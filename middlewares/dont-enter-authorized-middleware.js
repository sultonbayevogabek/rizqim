const { verifyToken } = require('../modules/jwt')

module.exports = async (req, res, next) => {
   if (req.user) {
      return res.redirect('/404')
   }

   next()
}