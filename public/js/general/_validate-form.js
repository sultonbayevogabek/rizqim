import { selectOne, selectAll, addClass, removeClass } from './_functions'

export default () => {
    try {
        const form = selectOne('.form'),
            submit = form.querySelector('button[type="submit"]')

        const inputs = selectAll('.input')
        const labels = selectAll('.label')

        inputs.forEach(input => {
            input.addEventListener('paste', (e) => {
                e.preventDefault()
            })
        })

        const makeInvalid = (label, errorText) => {
            removeClass(label, 'valid')
            addClass(label, 'invalid')
            const error = document.createElement('small')
            if (!label.children[2]) {
                addClass(error, 'error')
                error.textContent = errorText
                label.append(error)
            }
        }

        const makeValid = label => {
            removeClass(label, 'invalid')
            addClass(label, 'valid')
            if (label.children[2]) {
                label.children[2].remove()
            }
        }

        inputs.forEach(input => {
            input.addEventListener('input', e => {
                let target = e.target
                let value = target.value
                let label = e.target.parentElement
                if (target.hasAttribute('data-input-fname')) {
                    if (!/^[a-z'`]+$/i.test(value) || value.length < 3 || value.length > 30) {
                        makeInvalid(label, `3 tadan kam bo'lmagan va 30 tadan ko'p bo'lmagan, lotin harflaridan iborat bo'lishi kerak`)
                    } else {
                        makeValid(label)
                    }
                }
                if (target.hasAttribute('data-input-project-name')) {
                    if (value.length < 3 || value.length > 25) {
                        makeInvalid(label, `Proyekt nomi 3 tadan kam bo'lmagan va 25 tadan ko'p bo'lmagan, lotin harflaridan iborat bo'lishi kerak`)
                    } else {
                        makeValid(label)
                    }
                }
                if (target.hasAttribute('data-input-lname')) {
                    if (!/^[a-z'`]+$/i.test(value) || value.length < 5 || value.length > 30) {
                        makeInvalid(label, `Familiya 5 tadan kam bo'lmagan va 30 tadan ko'p bo'lmagan lotin harflaridan iborat bo'lishi kerak`)
                    } else {
                        makeValid(label)
                    }
                }
                if (target.hasAttribute('data-input-work-place')) {
                    if (value.length < 4) {
                        makeInvalid(label, `Ish joyining nomi 4 ta belgidan kam bo'la olmaydi`)
                    } else {
                        makeValid(label)
                    }
                }
                if (target.hasAttribute('data-input-edu-place')) {
                    if (value.length < 4) {
                        makeInvalid(label, `O'qish joyining nomi 4 ta belgidan kam bo'la olmaydi`)
                    } else {
                        makeValid(label)
                    }
                }
                if (target.hasAttribute('data-input-edu-type')) {
                    if (value.length < 4) {
                        makeInvalid(label, `O'qish yo'nalishining nomi nomi 4 ta belgidan kam bo'la olmaydi`)
                    } else {
                        makeValid(label)
                    }
                }
                if (target.hasAttribute('data-input-work-job')) {
                    if (value.length < 4) {
                        makeInvalid(label, `4 tadan kam bo'lmagan matn kiriting`)
                    } else {
                        makeValid(label)
                    }
                }
                if (target.hasAttribute('data-input-email')) {
                    if (!/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|uz|ru|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b/.test(value)) {
                        makeInvalid(label, `Emailni to'g'ri formatda kiritish kerak. Misol uchun: sultonbayev@gmail.com`)
                    } else {
                        makeValid(label)
                    }
                }
                if (target.hasAttribute('data-input-telegram')) {
                    if (!(value.startsWith('@') && value.length > 3)) {
                        makeInvalid(label, `Telegram username "@" bilan boshlanishi kerak. Uzunligi kamida 4 ta bo'lishi kerak`)
                    } else {
                        makeValid(label)
                    }
                }
                if (target.hasAttribute('data-input-password')) {
                    if (value.length < 6) {
                        makeInvalid(label, `Parol uzunligi kamida 6ta belgidan iborat bo'lishi kerak`)
                    } else {
                        makeValid(label)
                    }
                }
                if (target.hasAttribute('data-input-phone')) {
                    const phoneCodes = ['33', '62', '70', '71', '78', '88', '90', '91', '93', '94', '95', '97', '99']
                    value = value.replace(/\D/g, '')
                    let phoneCode = value.substr(3, 2)
                    if (value.length !== 12 || !phoneCodes.includes(phoneCode)) {
                        makeInvalid(label, `Telefon raqamni to'g'ri formatda kiritish kerak`)
                    } else {
                        makeValid(label)
                    }
                }
                if (target.hasAttribute('data-input-git')) {
                    if ((value.trim().startsWith('https://github.com/') || value.trim().startsWith('https://gitlab.com/')) && value.length > 23) {
                        makeValid(label)
                    } else {
                        makeInvalid(label, `Github yoki Gitlab profilingiz manzilini to'g'ri kiritishingiz kerak. Misol uchun: https://github.com/sultonbayevogabek`)
                    }
                }
                if (target.hasAttribute('data-input-portfolio-link')) {
                    if ((value.trim().startsWith('https://') || value.trim().startsWith('http://')) && value.length > 10) {
                        makeValid(label)
                    } else {
                        makeInvalid(label, `URL manzilni kiritishingiz kerak. Misol uchun: https://sultonbayev.uz`)
                    }
                }
                if (target.hasAttribute('data-input-project-link')) {
                    if (value.trim().startsWith('https://') && value.length > 12) {
                        makeValid(label)
                    } else {
                        makeInvalid(label, `Proyekt uchun havolani kiritishingiz kerak. Misol uchun: https://abm.uz`)
                    }
                }
                if (target.hasAttribute('data-input-role')) {
                    addClass(target.parentElement.parentElement, 'valid')
                }
                if (selectAll('.valid').length === labels.length) {
                    submit.removeAttribute('disabled')
                } else {
                    submit.setAttribute('disabled', true)
                }
            })
        })
    } catch (e) {
        console.log(e)
    }
}