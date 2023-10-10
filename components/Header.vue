<template>
  <body>
    <header
      class="header header-transparent bg-info"
      style="z-index: 301"
      data-scroll=""
    >
      <div class="header-container ">
        <div class="logo">
          <a href="/" class="logo-link"
            >Buy<span>Social</span>Media Marketing</a
          >
        </div>
        <a
          href="#"
          class="btn btn--md-less btn--outline show_on_mob sign-in-btn"
          data-modal="#modal-signup"
          >Sign Up</a
        >
        <div class="header_group_btns">
          <a
            href="/checkout"
            class="btn btn--md btn--secondary btn-candlelight relative"
          >
            <div class="btn_circle_number">0</div>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.8126 4.88246C11.8126 3.23745 10.3993 1.91985 8.72445 2.08233L8.72241 2.08253C7.35632 2.21003 6.18763 3.59429 6.18763 5.02496V5.75246C6.18763 6.06312 5.93579 6.31496 5.62513 6.31496C5.31447 6.31496 5.06263 6.06312 5.06263 5.75246V5.02496C5.06263 3.08096 6.60843 1.15055 8.61684 0.962491C10.9616 0.73561 12.9376 2.58281 12.9376 4.88246V5.91746C12.9376 6.22812 12.6858 6.47996 12.3751 6.47996C12.0645 6.47996 11.8126 6.22812 11.8126 5.91746V4.88246Z"
                fill="currentColor"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.53029 6.61288C3.19434 5.82339 4.33285 5.43746 6.00013 5.43746H12.0001C13.6674 5.43746 14.8059 5.82339 15.47 6.61288C16.1287 7.39601 16.1903 8.42525 16.0842 9.38433L16.0833 9.39224L15.5214 13.8875C15.4385 14.6572 15.2443 15.5002 14.5573 16.1277C13.874 16.7521 12.8153 17.0625 11.2501 17.0625H6.75013C5.18499 17.0625 4.12628 16.7521 3.44292 16.1277C2.75596 15.5002 2.56179 14.6571 2.47887 13.8874L1.91599 9.38433C1.80986 8.42525 1.87158 7.39601 2.53029 6.61288ZM3.03379 9.25672L3.59702 13.7625C3.6719 14.4615 3.82704 14.9549 4.20172 15.2972C4.58149 15.6441 5.30027 15.9375 6.75013 15.9375H11.2501C12.7 15.9375 13.4188 15.6441 13.7985 15.2972C14.1732 14.9549 14.3284 14.4615 14.4033 13.7625L14.4044 13.7527L14.9665 9.25663C15.0621 8.38776 14.9623 7.75703 14.609 7.33704C14.2606 6.92278 13.5354 6.56246 12.0001 6.56246H6.00013C4.46491 6.56246 3.73967 6.92278 3.39123 7.33704C3.03796 7.75704 2.93814 8.3878 3.03379 9.25672Z"
                fill="currentColor"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.8717 8.99996C10.8717 8.58575 11.2075 8.24996 11.6217 8.24996H11.6285C12.0427 8.24996 12.3785 8.58575 12.3785 8.99996C12.3785 9.41418 12.0427 9.74996 11.6285 9.74996H11.6217C11.2075 9.74996 10.8717 9.41418 10.8717 8.99996Z"
                fill="currentColor"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.62101 8.99996C5.62101 8.58575 5.9568 8.24996 6.37101 8.24996H6.37775C6.79196 8.24996 7.12775 8.58575 7.12775 8.99996C7.12775 9.41418 6.79196 9.74996 6.37775 9.74996H6.37101C5.9568 9.74996 5.62101 9.41418 5.62101 8.99996Z"
                fill="currentColor"
              ></path>
            </svg>
          </a>
          <a
            href="https://buysocialmediamarketing.com/dashboard"
            class="btn btn--md btn--secondary btn-candlelight"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.321 2.321C3.32185 1.32015 4.81952 0.9375 6.75 0.9375H11.25C13.1805 0.9375 14.6781 1.32015 15.679 2.321C16.6798 3.32185 17.0625 4.81952 17.0625 6.75V11.25C17.0625 13.1805 16.6798 14.6781 15.679 15.679C14.6781 16.6798 13.1805 17.0625 11.25 17.0625H6.75C4.81952 17.0625 3.32185 16.6798 2.321 15.679C1.32015 14.6781 0.9375 13.1805 0.9375 11.25V6.75C0.9375 4.81952 1.32015 3.32185 2.321 2.321ZM3.1165 3.1165C2.42985 3.80315 2.0625 4.93048 2.0625 6.75V11.25C2.0625 13.0695 2.42985 14.1969 3.1165 14.8835C3.80315 15.5702 4.93048 15.9375 6.75 15.9375H11.25C13.0695 15.9375 14.1969 15.5702 14.8835 14.8835C15.5702 14.1969 15.9375 13.0695 15.9375 11.25V6.75C15.9375 4.93048 15.5702 3.80315 14.8835 3.1165C14.1969 2.42985 13.0695 2.0625 11.25 2.0625H6.75C4.93048 2.0625 3.80315 2.42985 3.1165 3.1165Z"
                fill="currentColor"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.5625 5.625C9.5625 4.48934 10.4893 3.5625 11.625 3.5625C12.7607 3.5625 13.6875 4.48934 13.6875 5.625V12.375C13.6875 13.5107 12.7607 14.4375 11.625 14.4375C10.48 14.4375 9.5625 13.5088 9.5625 12.375V5.625ZM11.625 4.6875C11.1107 4.6875 10.6875 5.11066 10.6875 5.625V12.375C10.6875 12.8912 11.105 13.3125 11.625 13.3125C12.1393 13.3125 12.5625 12.8893 12.5625 12.375V5.625C12.5625 5.11066 12.1393 4.6875 11.625 4.6875Z"
                fill="currentColor"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.3125 9.75C4.3125 8.61434 5.23934 7.6875 6.375 7.6875C7.51066 7.6875 8.4375 8.61434 8.4375 9.75V12.375C8.4375 13.5107 7.51066 14.4375 6.375 14.4375C5.23001 14.4375 4.3125 13.5088 4.3125 12.375V9.75ZM6.375 8.8125C5.86066 8.8125 5.4375 9.23566 5.4375 9.75V12.375C5.4375 12.8912 5.85499 13.3125 6.375 13.3125C6.88934 13.3125 7.3125 12.8893 7.3125 12.375V9.75C7.3125 9.23566 6.88934 8.8125 6.375 8.8125Z"
                fill="currentColor"
              ></path>
            </svg>
          </a>
        </div>
        <div class="dropdown">
         
            <button
              type="button"
              data-select-btn=""
              class="dropdown-btn btn btn--md btn--secondary ico-left btn-candlelight header_burger_btn"
            >
              <span class="ico">
                <span></span>
                <span></span>
                <span></span>
              </span>
              <span>Our services</span>
            </button>
        
        
        </div>
        <div class="menu">
          <ul class="menu-list">
            <li>
              <a
                href="https://buysocialmediamarketing.com/reviews"
                class="link-primary"
              >
                <span>Reviews</span>
                <span class="primary-spans">
                  <span>2449</span>
                </span>
              </a>
            </li>
            <li>
              <a href="/faq">
                <span>FAQ</span>
              </a>
            </li>
            <li>
              <a href="/contact">
                <span>Contact us</span>
              </a>
            </li>
            <li class="header-auth-btn">
              <a href="#" data-modal="#modal-login">
                <span>Log In</span>
              </a>
            </li>
            <li class="header-auth-btn">
              <a href="#" data-modal="#modal-signup" class="btn-transparent">
                <span>Sign Up</span>
              </a>
            </li>
            <li class="header-dashboard-btn d-none">
              <a
                href="https://buysocialmediamarketing.com/dashboard"
                class="btn-transparent"
              >
                <span>Dashboard</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  </body>
 
</template>

<script>
import "../assets/header.css";
export default {
  name: 'HeaderPage',
}
</script>
