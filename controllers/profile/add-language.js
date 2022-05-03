module.exports = async (req, res) => {
   const { language, degree } = req.body

   const languages = await req.psql.languages.findAll({
      where: {
         language
      }
   })

   const exists = languages.some(l => l.language === language)

   if (exists) {
      return res.status(400).send({
         ok: false,
         message: `Bu til oldin qo'shilgan. Uni o'zgartirish uchun o'chirib, qaytadan qo'shing.`
      })
   }

   await req.psql.languages.create({
      degree,
      language,
      user_id: req.user.id
   })

   res.status(200).send({
      ok: true,
      message: `Til qo'shildi`
   })
}