let VUE_APP_ADDRESS_FOLDER_NAME = process.env.VUE_APP_ADDRESS_FOLDER_NAME
if (!VUE_APP_ADDRESS_FOLDER_NAME) {
    VUE_APP_ADDRESS_FOLDER_NAME = 'uat'
}
const configs = require(`./${VUE_APP_ADDRESS_FOLDER_NAME}/FSS_Ward.js`)
module.exports = {
  ...configs
}