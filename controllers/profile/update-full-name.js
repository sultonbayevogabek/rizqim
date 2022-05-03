module.exports = async (req, res) => {
   const id = req.user.id
   const { firstName, lastName } = req.body

   if (!firstName.trim() || !lastName.trim()) {
      return res.status(400).send({
         ok: false,
         message: `Ma'lumotlar to'liq kiritilmadi`
      })
   }

   await req.psql.users.update({
      first_name: firstName,
      last_name: lastName
   }, {
      where: { id }
   })

   res.status(200).send({
      ok: true,
      message: `Ism va familiya muvaffaqqiyatli o'zgartirildi`
   })
}