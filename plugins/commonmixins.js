import _ from 'lodash'
const moment = require('moment-timezone')

export default {
  methods: {
    getErrorMessages(response, key) {
      // eslint-disable-next-line no-undef
      return _.get(response, key)
    },
    getPrice(price) {
      return `$. ${parseFloat(price).toFixed(2)} `
    },
    removeLeadingZeorsFromReferences(reference) {
      // eslint-disable-next-line no-undef
      const split_ref = _.split(reference, '-')
      if (split_ref.length === 1) return reference
      return `${split_ref[0]}-${parseInt(split_ref[1])}`
    },
    firstLetterUpperCase(value) {
      if (value === null) return 'N/A'
      // eslint-disable-next-line no-undef
      return _.startCase(_.toLower(value))
    },
    makeUpperCase(value) {
      // eslint-disable-next-line no-undef
      return _.startCase(_.toUpper(value))
    },
    // For time format
    momentFormat(value, arg) {
      return moment(new Date(value), arg).tz('Australia/Sydney').format(arg)
    },
    momentTimestampFormat(value, arg) {
      return moment(new Date(value)).format(arg)
    },
    convertDateToTimezone(date, timezone) {
      const str = moment(date).format('DD MMMM YYYY hh:mm:ss A')
      const tzMoment = moment.tz(str, timezone.identifier)
      return tzMoment.toDate()
    },
    momentConvertToUTCAndReturn(value, arg) {
      return moment(new Date(moment.utc(value).format())).format(arg)
    },
    getFullName(tr) {
      if (!tr.first_name) return 'N/A'
      // eslint-disable-next-line no-undef
      return _.startCase(_.toLower(`${tr.first_name} ${tr.last_name}`))
    },
    // For time format ends
  },
}
