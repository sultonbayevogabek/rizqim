module.exports = async (req, res) => {
   const id = req.user.id
   const { web_site } = req.body

   if ((web_site.startsWith('https://') || web_site.startsWith('http://')) && web_site.length > 10) {
      await req.psql.users.update({
         web_site
      }, {
         where: { id }
      })

      return res.status(200).send({
         ok: true,
         message: `Veb sayt muvaffaqqiyatli o'zgartirildi`
      })
   }

   return res.status(400).send({
      ok: false,
      message: `Ma'lumotlar to'g'ri kiritilmadi`
   })
}