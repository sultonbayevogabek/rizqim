module.exports = async (req, res) => {
   const id = req.user.id
   const { bio } = req.body

   await req.psql.users.update({
      bio
   }, {
      where: { id }
   })

   res.status(200).send({
      ok: true,
      message: `Foydalanuvchining biografiyasi muvaffaqqiyatli o'zgartirildi`
   })
}