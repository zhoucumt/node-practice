// util.js
const crypto = require("crypto");
const MAGIC_KEY = "258EAFA5-E914-47DA-95CA-C5AB0DC85B11";

module.exports = function generateAcceptValue(secWsKey) {
  console.log('secWsKey: ', secWsKey);
  return crypto
    .createHash("sha1")
    .update(secWsKey + MAGIC_KEY, "utf8")
    .digest("base64");
}

// module.exports = {

// }
