const UserModel = require('../models/userModel');
const { hashPassword, validatePassword } = require('../utils/bcrypt');
const { generateToken } = require('../utils/jwt');

exports.register = async (req, res) => {
  let { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: 'need to input username and password' });
  }
  // if username and password is valid, hash password
  password = await hashPassword(password);
  // save hashed password into database instead of origin password
  const newUser = new UserModel({ username, password });
  await newUser.save();
  res.status(201).json(newUser);
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: 'need to input username and password' });
  }
  // find user from database by username
  const user = await UserModel.find({ username: username }).exec();
  //user[0].password - get password of that user
  const passwordValidation = await validatePassword(password, user[0].password); //validate password
  if (!passwordValidation) {
    return res.status(401).json({ error: 'invalid password' });
  }
  // once login successfully, sign a token, and response to frontend
  const token = generateToken({ username });
  
  res.status(201).json({username, token});
};
