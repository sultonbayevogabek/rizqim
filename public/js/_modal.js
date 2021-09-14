import { selectOne, selectAll, addClass, removeClass } from './_functions'

const openModal = () => {
    const modal = selectOne('.modal'),
        modalContent = selectOne('.modal__content')

    modal.classList.remove('d-none')
    setTimeout(() => {
        modalContent.style.cssText = `
            opacity: 1;
            transform: scale(1);
        `
    }, 200)
}

const closeModal = () => {
    const modal = selectOne('.modal'),
        modalContent = selectOne('.modal__content'),
    modalContent.style.cssText = `
        opacity: 0;
        transform: scale(0);
    `
    modalContent.innerHTML = null
    setTimeout(() => {
        modal.classList.add('d-none')
    }, 400)
}

const modalClosing = () => {
    const modalCloseElements = selectAll('[data-modal-close]')

    modalCloseElements.forEach(el => {
        el.addEventListener('click', e => {
            closeModal()
        })
    })
}

export { openModal, closeModal, modalClosing }