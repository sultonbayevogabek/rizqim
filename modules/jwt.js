const jwt = require('jsonwebtoken')
const { SECRET_WORD } = require('../config')
console.log(SECRET_WORD)

const generateToken = data => {
   return jwt.sign(data, SECRET_WORD)
}

const verifyToken = token => {
   try {
      return jwt.verify(token, SECRET_WORD)
   } catch (e) {
      return false
   }
}

console.log(verifyToken('eyJhGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFzZGFzZEBhc2QuY29tIiwidHlwZSI6InVzZXIiLCJpYXQiOjE2NDk2MTAyNTh9.N5AN4UPulNxRzzrIX6gHNgi-u31typqscACBP3r6_wg'))

module.exports =  { generateToken, verifyToken }