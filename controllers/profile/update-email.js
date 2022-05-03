module.exports = async (req, res) => {
   const id = req.user.id
   const { email } = req.body

   if (!email.trim()) {
      return res.status(400).send({
         ok: false,
         message: `Ma'lumotlar to'liq kiritilmadi`
      })
   }

   await req.psql.users.update({
      email
   }, {
      where: { id }
   })

   res.status(200).send({
      ok: true,
      message: `Email muvaffaqqiyatli o'zgartirildi`
   })
}