const bcrypt = require('bcrypt');

const hashPassword = async (password) => {
  const hashPassword = await bcrypt.hash(password, 10);
  return hashPassword;
};

const validatePassword = async (password, hashPassword) => {
  return bcrypt.compare(password, hashPassword);
};

module.exports = { hashPassword, validatePassword };
