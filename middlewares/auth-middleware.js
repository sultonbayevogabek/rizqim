module.exports = async = (req, res, next) => {
    req.user = {
        name: 'Og\'abek Sultonbayev'
    }
    next()
}