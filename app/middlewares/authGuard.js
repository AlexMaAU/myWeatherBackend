const { VerifyToken } = require('../utils/jwt');

const authGuard = (req, res, next) => {
  const authorization = req.header('Authorization');
  if (!authorization) {
    return res.status(401).json({ error: 'missing authorization header' });
  }

  const [prefix, token] = authorization.split(' ');
  if (prefix !== 'Bearer' || !token) {
    return res
      .status(401)
      .json({ error: 'invalid authorization token format' });
  }

  try {
    const payload = VerifyToken(token);
    req.user = payload;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'invalid token' });
  }
};

module.exports = authGuard;
