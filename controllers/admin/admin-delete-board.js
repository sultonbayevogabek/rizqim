const path = require('path')
const fs = require('fs/promises')

module.exports = async (req, res) => {
   const id = req.params.id

   try {
      const board = await req.psql.boards.findOne({
         where: {
            id
         }
      })

      try {
         await fs.unlink(path.join(__dirname, '..', '..', 'public', board.img_url))
      } catch (e) {}

      await req.psql.boards.destroy({
         where: {
            id
         }
      })

      res.redirect('/admin/boards')
   } catch (e) {
      return res.status(404).send({
         ok: false,
         message: `E'lonni o'chirishda xatolik yuz berdi`
      })
   }
}