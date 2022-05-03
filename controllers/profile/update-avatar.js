const path = require('path')
const { generateToken } = require('../../modules/jwt')

module.exports = async (req, res) => {
   const avatar = req.files.avatar

   await avatar.mv(
      path.join(
         __dirname,
         "..",
         "..",
         "public",
         "img",
         "profile",
         `${avatar.md5}.${avatar.mimetype.split("/")[1]}`
      ),
      (err) => {}
   )
   const avatarURL = `/img/profile/${avatar.md5}.${avatar.mimetype.split("/")[1]}`

   await req.psql.users.update({
      avatar: avatarURL
   }, {
      where: { email: req.user.email }
   })

   res.status(200).send({
      ok: true,
      message: 'Foydalanuvchi rasmi muvaffaqqiyatli yangilandi',
      avatar: avatarURL
   })
}