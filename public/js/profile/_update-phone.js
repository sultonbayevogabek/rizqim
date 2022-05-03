import { selectOne, selectAll } from '../general/_functions'
import { closingModal, openingModal } from '../general/_modal'
import { url } from '../general/_variables'
import { error } from '../general/_toaster'
import getScrollbarWidth from '../general/_scroll-width'

export default () => {
   try {
      const editPhoneButton = selectOne('[data-phone-edit-btn]')
      const editPhoneModal = selectOne('[data-phone-edit-modal]')
      const editPhoneForm = editPhoneModal.querySelector('.modal__form')
      const phoneInput = editPhoneForm.querySelector('[data-input-phone]')

      editPhoneButton.addEventListener('click', async e => {
         let response = await fetch(`${url}/profile/data`)
         response = await response.json()

         phoneInput.value = response.user.phone_number

         editPhoneModal.classList.remove('d-none')
         document.body.style.overflow = 'hidden'
         document.body.style.paddingRight = getScrollbarWidth() + 'px'
      })

      editPhoneForm.addEventListener('submit', async e => {
         e.preventDefault()

         let phone = phoneInput.value
         const phoneCodes = ['33', '62', '70', '71', '78', '88', '90', '91', '93', '94', '95', '97', '99']
         phone = phone.replace(/\D/g, '')
         let phoneCode = phone.substr(3, 2)

         if (phone.length === 12 && phoneCodes.includes(phoneCode)) {
            let response = await fetch(`${url}/profile/update-phone`, {
               headers: {
                  'Content-Type': 'application/json'
               },
               method: 'POST',
               body: JSON.stringify({
                  phoneNumber: '+' + phone
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

      closingModal('[data-phone-edit-modal]')
   } catch (e) {}
}