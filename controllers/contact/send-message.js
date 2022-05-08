module.exports = async (req, res) => {
   console.log(req.body)
   const {
      name,
      phone_number,
      message
   } = req.body

   if (name.trim().length < 3) {
      return res.status(400).send({
         ok: false,
         message: `Ism uzunligi kamida 3 ta belgidan iborat bo'lishi kerak`
      })
   }

   if (phone_number.replace(/\D/g,'').length !== 12) {
      return res.status(400).send({
         ok: false,
         message: `Telefon raqamni to'g'ri kiriting`
      })
   }

   await req.psql.messages.create({
      name,
      phone_number,
      message
   })

   res.status(200).send({
      ok: true,
      message: `Xabaringiz muvaffaqqiyatli jo'natildi`
   })
}