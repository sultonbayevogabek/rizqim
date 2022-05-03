const { generateToken } = require('../../modules/jwt')

module.exports = async (req, res) => {
    const { email, password } = req.body

    if (!email.trim()) {
        return res.status(400).send({
            ok: false,
            message: 'Email kiritilmadi'
        })
    }

    if (!password.trim()) {
        return res.status(400).send({
            ok: false,
            message: 'Parol kiritilmadi'
        })
    }

    const user = await req.psql.users.findOne({
        where: { email }
    })

    if (!user) {
        return res.status(400).send({
            ok: false,
            message: `Bu email orqali oldin ro'yxatdan o'tilmagan`
        })
    }

    if (user.password !== password) {
        return res.status(400).send({
            ok: false,
            message: `Parol noto'g'ri`
        })
    }

    const token = generateToken({
        id: user.id,
        firstName: user.first_name,
        lastName: user.last_name,
        email: user.email,
        avatar: user.avatar,
        type: user.type
    })

    res.cookie('token', token).status(200).send({
        ok: true,
        message: 'Avtorizatsiya muvaffaqqiyatli amalga oshirildi'
    })
}