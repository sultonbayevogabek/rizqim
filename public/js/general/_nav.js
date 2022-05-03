import { selectOne } from './_functions'

export default () => {
    try {
        const navOpenElement = selectOne('.nav__menu'),
            navCloseElement = selectOne('.nav__close'),
            navElement = selectOne('.nav__ul')

        navOpenElement.addEventListener('click', e => {
            navElement.style.left = 0
        })

        navCloseElement.addEventListener('click', e => {
            navElement.style.left = '1000%'
        })
    } catch (e) {}
}