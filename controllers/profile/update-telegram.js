module.exports = async (req, res) => {
   const id = req.user.id
   const { telegram } = req.body

   if (!telegram.trim()) {
      return res.status(400).send({
         ok: false,
         message: `Ma'lumotlar to'liq kiritilmadi`
      })
   }

   await req.psql.users.update({
      telegram_username: telegram
   }, {
      where: { id }
   })

   res.status(200).send({
      ok: true,
      message: `Telegram username muvaffaqqiyatli o'zgartirildi`
   })
}