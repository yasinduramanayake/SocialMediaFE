import profile from "@/Api/Modules/auth";

export default {
  state: {
    current_user_data: null,
    current_user_permission: null,
  },
  mutations: {
    CLEAR_CURRENT_USER: (state) => {
      state.current_user_data = undefined;
      state.current_user_permission = undefined;
      localStorage.clear();
    },
    SET_CURRENT_USER_PERMISSION: (state, value) => {
      state.current_user_permission = value;
    },
    SET_CURRENT_USER: (state, value) => {
      state.current_user_data = value;
    },
    UPDATE_USER_INFO: (state, { displayName, photoURL }) => {
      state.current_user_data.user.name = displayName;
      state.current_user_data.user.image = photoURL;
    },
  },
  getters: {
    isLogedIn: (state) =>
      state.current_user_data !== undefined && state.current_user_data !== null,
    // currentUser: state => state.current_user_data,
    // permissions: state => state.current_user_permission
  },
  actions: {
    setCurrentUser: ({ commit }, payload) => {
      commit("SET_CURRENT_USER", payload);
    },
    // eslint-disable-next-line no-unused-vars
    async afterLogin({ commit }, fromLogin) {
      if (!fromLogin) {
        router.replace("/");
      }
    },
    async autoLogin({ commit }) {
      try {
        const cacheUserToken = localStorage.getItem("token");
        if (!this.getters.isLogedIn && cacheUserToken) {
          const cacheUserData = (await profile.profile()).data.data;
          commit("SET_CURRENT_USER", {
            user: cacheUserData,
            access_token: cacheUserToken,
          });
          // commit('UPDATE_USER_INFO', {
          //   displayName: cacheUserData.name,
          // })
          // await this.dispatch("afterLogin", true);
        }
      } catch (e) {
        // console.log(e)
        await this.dispatch("logout");
      }
    },
    async login({ commit }, payload) {
      const loginData = (await profile.login(payload)).data.data;
      commit("SET_CURRENT_USER", loginData);
      // await this.dispatch('afterLogin')
    },
    async logout({ commit }) {
      try {
        await profile.logout();
      } catch (error) {
        await commit("CLEAR_CURRENT_USER");
      }
      await commit("CLEAR_CURRENT_USER");
      window.location.href = "/login";
    },
    async updateCurrentUserPhotoUrl({ commit }, newUrl) {
      commit("UPDATE_USER_INFO", {
        photoURL: newUrl,
      });
    },
  },
};
