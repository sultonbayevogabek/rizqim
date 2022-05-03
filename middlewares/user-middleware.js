const { verifyToken } = require('../modules/jwt')

module.exports = async (req, res, next) => {
   const token = req.cookies['token']

   if (token && verifyToken(token)) {
      const tokenUser = verifyToken(token)

      req.user = await req.psql.users.findOne({
         where: { id: tokenUser.id },
         include: [
            req.psql.portfolios,
            req.psql.experiences,
            req.psql.educations,
            req.psql.languages
         ]
      })
   } else {
      res.clearCookie('token')
   }

   next()
}