const path = require('path')
module.exports = async (req, res) => {
   const { project_name, project_link } = req.body

   if (project_name.trim().length < 3 || project_name.trim().length > 25) {
      return res.status(404).send({
         ok: false,
         message: `Portfolio nomi to'g'ri kiritilmadi`
      })
   }

   if (!((project_link.trim().startsWith('http://') || project_link.trim().startsWith('https://')) && project_link.trim().length > 10)) {
      return res.status(404).send({
         ok: false,
         message: `Portfolio linki to'g'ri kiritilmadi`
      })
   }

   if (!req.files) {
      return res.status(404).send({
         ok: false,
         message: `Portfolio rasmi yuklanmadi`
      })
   }

   const portfolio_img = req.files['portfolio_img']

   await portfolio_img.mv(
      path.join(
         __dirname,
         "..",
         "..",
         "public",
         "img",
         "portfolio",
         `${portfolio_img.md5}.${portfolio_img.mimetype.split("/")[1]}`
      ),
      (err) => {}
   )
   const portfolioImgUrl = `/img/portfolio/${portfolio_img.md5}.${portfolio_img.mimetype.split("/")[1]}`

   await req.psql.portfolios.create({
      photo: portfolioImgUrl,
      project_name,
      project_link,
      user_id: req.user.id
   })

   res.status(201).send({
      ok: true,
      message: `Portfolio muvaffaqqiyatli qo'shildi`
   })
}