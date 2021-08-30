module.exports = async = (req, res) => {
    res.render('index', {
        title: `Rizqim.uz | O'zbekistondagi frilans platformasi`,
        user: {
            name: `Og'abek Sultonbayev`
        }
    })
}