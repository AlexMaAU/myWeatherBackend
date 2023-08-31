const jwt = require('jsonwebtoken');
const config = require('../config');

if (!config.jwt_key) {
  return console.log('JWT_KEY is empty')
}

const generateToken = (payload)=>{
    return jwt.sign(payload, config.jwt_key, {expiresIn:'1d'})
}

const VerifyToken = (token)=> {
    try {
        // 在默认情况下，jwt.verify 函数会忽略 token 是否过期。它会验证 token 的签名是否有效，但不会检查 token 是否已过期。
        // 通过将 { ignoreExpiration: false } 选项设置为 false，您告诉 jwt.verify 函数在验证 token 时也要检查其是否过期。
        const decoded = jwt.verify(token, config.jwt_key, { ignoreExpiration: false })
        return decoded
    } catch (error) {
        throw new Error('Invalid token');
    }
}

module.exports = {generateToken, VerifyToken}