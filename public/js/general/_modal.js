import { selectOne } from './_functions'

function openModal(selector) {
   selectOne(selector).classList.remove('d-none')
}

function closeModal(selector) {
   selectOne(selector).classList.add('d-none')
}

function openingModal(selectorBtn, selectorModal) {
   const button = selectOne(selectorBtn)
   const modal = selectOne(selectorModal)

   button.addEventListener('click', e => {
      document.body.style.overflow = 'hidden'
      modal.classList.remove('d-none')
   })
}

function closingModal(selector) {
   const modal = selectOne(selector)
   const modalCloserButtons = modal.querySelectorAll('[data-modal-close]')

   modal.addEventListener('click', e => {
      if (e.target.classList.contains('modal')) {
         document.body.style.overflow = ''
         document.body.style.paddingRight = '0'
         modal.classList.add('d-none')
      }
   })

   modalCloserButtons.forEach(btn => {
      btn.addEventListener('click', e => {
         document.body.style.overflow = ''
         document.body.style.paddingRight = '0'
         modal.classList.add('d-none')
      })
   })
}

export { openingModal, closingModal }