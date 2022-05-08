module.exports = async (req, res, next) => {
   if (!req.user || req.user.role !== 'admin') {
      return res.redirect('/404')
   }

   next()
}