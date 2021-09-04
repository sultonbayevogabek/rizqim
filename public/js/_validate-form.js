import { selectAll, addClass, removeClass } from './_functions'

export default () => {
    try {
        const inputs = selectAll('.auth__input')
        inputs.forEach(input => {
            input.addEventListener('paste', (e) => {
                e.preventDefault()
            })
        })
        const makeInvalid = (label, errorText) => {
            label.classList.remove('valid')
            label.classList.add('invalid')
            const authError = document.createElement('small')
            if (!label.children[2]) {
                addClass(authError, 'auth__error')
                authError.textContent = errorText
                label.append(authError)
            }
        }
        const makeValid = label => {
            label.classList.remove('invalid')
            label.classList.add('valid')
            if (label.children[2]) {
                label.children[2].remove()
            }
        }
        inputs.forEach(input => {
            input.addEventListener('input', e => {
                const target = e.target
                const value = target.value
                const label = e.target.parentElement
                if (target.hasAttribute('data-input-fname')) {
                    if (!/^[a-z '`]+$/i.test(value) || value.length < 3 || value.length > 30) {
                        makeInvalid(label, `Ism 3 tadan kam bo'lmagan va 30 tadan ko'p bo'lmagan lotin harflaridan iborat bo'lishi kerak`)
                    } else {
                        makeValid(label)
                    }
                }
                if (target.hasAttribute('data-input-lname')) {
                    if (!/^[a-z '`]+$/i.test(value) || value.length < 5 || value.length > 30) {
                        makeInvalid(label, `Familiya 5 tadan kam bo'lmagan va 30 tadan ko'p bo'lmagan lotin harflaridan iborat bo'lishi kerak`)
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
                if (target.hasAttribute('data-input-password')) {
                    if (value.length < 6) {
                        makeInvalid(label, `Parol uzunligi kamida 6ta belgidan iborat bo'lishi kerak`)
                    } else {
                        makeValid(label)
                    }
                }
            })
        })
    } catch (e) {
    }
}