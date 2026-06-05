const Cryptr = require('cryptr');
const cryptr = new Cryptr(process.env.ENCRYPTION_KEY);

function encryptData(data) {
  return cryptr.encrypt(JSON.stringify(data));
}

function decryptData(data) {
  return JSON.parse(cryptr.decrypt(data));
}

module.exports = { encryptData, decryptData };
