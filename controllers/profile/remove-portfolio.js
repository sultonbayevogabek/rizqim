const path = require('path')
const fs = require('fs/promises')

module.exports = async (req, res) => {
   const id = req.params.id

   try {
      const portfolio = await req.psql.portfolios.findOne({
         where: {
            id
         }
      })

      await req.psql.portfolios.destroy({
         where: {
            id
         }
      })
      await fs.unlink(path.join(__dirname, '..', '..', 'public', portfolio.photo))

      res.status(200).send({
         ok: true,
         message: `Portfolio muvaffaqqiyatli o'chirildi`
      })
   } catch (e) {
      return res.status(404).send({
         ok: false,
         message: `Portfolioni o'chirishda xatolik yuz berdi`
      })
   }
}