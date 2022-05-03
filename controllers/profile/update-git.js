module.exports = async (req, res) => {
   const id = req.user.id
   const { git } = req.body

   if ((git.startsWith('https://github.com/') || git.startsWith('https://gitlab.com/')) && git.length > 20) {
      await req.psql.users.update({
         git
      }, {
         where: { id }
      })

      return res.status(200).send({
         ok: true,
         message: `Git sayt muvaffaqqiyatli o'zgartirildi`
      })
   }

   return res.status(400).send({
      ok: false,
      message: `Ma'lumotlar to'g'ri kiritilmadi`
   })
}