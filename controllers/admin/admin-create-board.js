const path = require('path')

module.exports = async (req, res) => {
   try {
      const {
         title,
         description,
         budget,
         admin_telegram,
         acceptance_data,
         finish_data,
         materials_link
      } = req.body

      const img = req.files['img']

      await img.mv(
         path.join(
            __dirname,
            "..",
            "..",
            "public",
            "img",
            "boards",
            `${img.md5}.${img.mimetype.split("/")[1]}`
         ),
         (err) => {}
      )
      const boardImgUrl = `/img/boards/${img.md5}.${img.mimetype.split("/")[1]}`

      await req.psql.boards.create({
         title,
         description,
         admin_telegram,
         budget,
         acceptance_data,
         finish_data,
         materials_link,
         img_url: boardImgUrl
      })

      res.status(200).send({
         ok: true,
         message: `E'lon muvaffaqqiyatli qo'shildi`
      })
   } catch (e) {
      res.redirect('/404')
   }
}