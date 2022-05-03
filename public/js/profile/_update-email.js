import { selectOne, selectAll } from '../general/_functions'
import { closingModal, openingModal } from '../general/_modal'
import { url } from '../general/_variables'
import { error } from '../general/_toaster'
import getScrollbarWidth from '../general/_scroll-width'

export default () => {
   try {
      const editEmailButton = selectOne('[data-email-edit-btn]')
      const editEmailModal = selectOne('[data-email-edit-modal]')
      const editEmailForm = editEmailModal.querySelector('.modal__form')
      const emailInput = editEmailForm.querySelector('[data-input-email]')

      editEmailButton.addEventListener('click', async e => {
         let response = await fetch(`${url}/profile/data`)
         response = await response.json()

         emailInput.value = response.user.email

         editEmailModal.classList.remove('d-none')
         document.body.style.overflow = 'hidden'
         document.body.style.paddingRight = getScrollbarWidth() + 'px'
      })

      editEmailForm.addEventListener('submit', async e => {
         e.preventDefault()
         const email = emailInput.value.trim()
         if (/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|uz|ru|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b/.test(email)) {

            let response = await fetch(`${url}/profile/update-email`, {
               headers: {
                  'Content-Type': 'application/json'
               },
               method: 'POST',
               body: JSON.stringify({
                  email
               })
            })

            response = await response.json()

            if (response.ok) {
               window.location.reload()
            } else {
               error(response.message)
            }
         }
      })

      closingModal('[data-email-edit-modal]')
   } catch (e) {}
}