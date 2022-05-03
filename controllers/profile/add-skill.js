module.exports = async (req, res) => {
   const skills = req.body

   await req.psql.users.update({
      skills
   }, {
      where: {
         id: req.user.id
      }
   })

   console.log(skills)

   res.status(200).send({
      ok: true,
      message: `Ko'nikmalar ro'yxati yangilandi`
   })
}