module.exports = async = (req, res, next) => {
    req.user = {
        firstName: `Og'abek`,
        lastName: `Sultonbayev`,
        username: 'sultonbayevogabek'
    }
    next()
}