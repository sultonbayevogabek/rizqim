module.exports = async (req, res) => {
    const { firstName, lastName, email, password, type } = req.body

    if (!firstName.trim()) {
        return res.status(400).send({
            ok: false,
            message: 'Ism kiritilmadi'
        })
    }

    if (firstName.trim().length < 3 || firstName.trim().length > 30) {
        return res.status(400).send({
            ok: false,
            message: `Ism uzunligi kamida 3ta va ko'pi bilan 30 ta belgidan iborat bo'lishi kerak`
        })
    }

    if (!lastName.trim()) {
        return res.status(400).send({
            ok: false,
            message: 'Familiya kiritilmadi'
        })
    }

    if (lastName.trim().length < 5 || lastName.trim().length > 30) {
        return res.status(400).send({
            ok: false,
            message: `Familiya kamida 5ta va ko'pi bilan 30 ta belgidan iborat bo'lishi kerak`
        })
    }

    if (!email.trim()) {
        return res.status(400).send({
            ok: false,
            message: 'Email kiritilmadi'
        })
    }

    if (!/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|uz|ru|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b/.test(email)) {
        return res.status(400).send({
            ok: false,
            message: `Email to'g'ri formatda kiritilmadi. Emailni quyidagicha kiriting: sultonbayev@gmail.com`
        })
    }

    if (!password.trim()) {
        return res.status(400).send({
            ok: false,
            message: 'Parol kiritilmadi'
        })
    }

    if (password.trim().length < 6) {
        return res.status(400).send({
            ok: false,
            message: `Parol uzunligi kamida 6 ta belgidan iborat bo'lishi kerak!`
        })
    }

    if (type !== 'freelancer' && type !== 'user') {
        return res.status(400).send({
            ok: false,
            message: `Foydalanuvchining roli tanlanmadi`
        })
    }

    const user = await req.psql.users.findOne({
        where: { email }
    })

    if (user) {
        return res.status(400).send({
            ok: false,
            message: `Kiritilgan email orqali oldin ro'yxatdan o'tilgan.`
        })
    }

    const newUser = await req.psql.users.create({
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
        type: 'freelancer',
        is_verified: false
    })

    res.status(201).send({
        ok: true,
        message: `Foydalanuvchi muvaffaqqiyatli ro'yxatdan o'tdi`
    })
}