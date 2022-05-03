import { selectOne } from '../general/_functions'
import { closingModal } from '../general/_modal'
import { url } from '../general/_variables'
import getScrollbarWidth from '../general/_scroll-width'
import { error } from '../general/_toaster'

export default () => {
   try {
      const editTelegramButton = selectOne('[data-telegram-edit-btn]')
      const editTelegramModal = selectOne('[data-telegram-edit-modal]')
      const editTelegramForm = editTelegramModal.querySelector('.modal__form')
      const telegramInput = editTelegramForm.querySelector('[data-input-telegram]')

      editTelegramButton.addEventListener('click', async e => {
         let response = await fetch(`${url}/profile/data`)
         response = await response.json()

         telegramInput.value = response.user.telegram_username

         editTelegramModal.classList.remove('d-none')
         document.body.style.overflow = 'hidden'
         document.body.style.paddingRight = getScrollbarWidth() + 'px'
      })

      editTelegramForm.addEventListener('submit', async e => {
         e.preventDefault()
         const telegram = telegramInput.value.trim()

         if (telegram.startsWith('@') && telegram.length > 3) {
            let response = await fetch(`${url}/profile/update-telegram`, {
               headers: {
                  'Content-Type': 'application/json'
               },
               method: 'POST',
               body: JSON.stringify({
                  telegram
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

      closingModal('[data-telegram-edit-modal]')
   } catch (e) {}
}