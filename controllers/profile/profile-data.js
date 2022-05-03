module.exports = async (req, res) => {
   const user = req.user

   res.status(200).send({
      ok: true,
      message: `Foydalanuvchi ma'lumotlari`,
      user
   })
}