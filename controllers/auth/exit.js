module.exports = async (req, res) => {
   console.log(123)
   res.clearCookie('token').redirect('/signin')
}