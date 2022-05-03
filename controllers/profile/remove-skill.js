module.exports = async (req, res) => {
   const { skill } = req.body

   let oldSkills = req.user.skills
   oldSkills = oldSkills.filter(s => s !== skill)

   await req.psql.users.update({
      skills: oldSkills
   }, {
      where: { id: req.user.id }
   })

   res.status(200).send({
      ok: true,
      message: `Ko'nikmalar ro'yxatidan olib o'chirildi`
   })
}