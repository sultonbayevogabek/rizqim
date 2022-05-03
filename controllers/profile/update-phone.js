module.exports = async (req, res) => {
   const id = req.user.id
   const { phoneNumber } = req.body

   if (!phoneNumber.trim()) {
      return res.status(400).send({
         ok: false,
         message: `Ma'lumotlar to'liq kiritilmadi`
      })
   }

   await req.psql.users.update({
      phone_number: phoneNumber
   }, {
      where: { id }
   })

   res.status(200).send({
      ok: true,
      message: `Telefon raqam muvaffaqqiyatli o'zgartirildi`
   })
}