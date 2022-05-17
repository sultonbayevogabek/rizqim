const path = require('path')
module.exports = async (req, res) => {
    try {
        const {
            link
        } = req.body

        const logo = req.files['logo']

        await logo.mv(
           path.join(
              __dirname,
              "..",
              "..",
              "public",
              "img",
              "sponsors",
              `${logo.md5}.${logo.mimetype.split("/")[1]}`
           ),
           (err) => {}
        )
        const sponsorImgUrl = `/img/sponsors/${logo.md5}.${logo.mimetype.split("/")[1]}`

        await req.psql.sponsors.create({
            link,
            logo: sponsorImgUrl
        })

        res.status(200).send({
            ok: true,
            message: `Homiy muvaffaqqiyatli qo'shildi`
        })
    } catch (e) {
        res.redirect('/404')
    }

}