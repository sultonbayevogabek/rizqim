module.exports = async (req, res) => {
   res.clearCookie('token').redirect('/signin')
}