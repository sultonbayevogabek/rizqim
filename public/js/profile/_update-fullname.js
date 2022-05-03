import { selectOne, selectAll } from '../general/_functions'
import { closingModal, openingModal } from '../general/_modal'
import { url } from '../general/_variables'
import { error } from '../general/_toaster'
import getScrollbarWidth from '../general/_scroll-width'

export default () => {
   try {
      const editFullNameButton = selectOne('[data-full-name-edit-btn]')
      const editFullNameModal = selectOne('[data-full-name-edit-modal]')
      const editFullNameForm = editFullNameModal.querySelector('.modal__form')
      const editFullNameFormSubmit = editFullNameForm.querySelector('.button-blue')
      const firstNameInput = editFullNameForm.querySelector('[data-input-fname]')
      const lastNameInput = editFullNameForm.querySelector('[data-input-lname]')

      editFullNameButton.addEventListener('click', async e => {
         let response = await fetch(`${url}/profile/data`)
         response = await response.json()

         firstNameInput.value = response.user.first_name
         lastNameInput.value = response.user.last_name

         editFullNameModal.classList.remove('d-none')
         document.body.style.overflow = 'hidden'
         document.body.style.paddingRight = getScrollbarWidth() + 'px'
      })

      editFullNameForm.addEventListener('submit', async e => {
         e.preventDefault()

         if (firstNameInput.value.trim() && lastNameInput.value.trim()) {
            let response = await fetch(`${url}/profile/update-full-name`, {
               headers: {
                  'Content-Type': 'application/json'
               },
               method: 'POST',
               body: JSON.stringify({
                  firstName: firstNameInput.value.trim(),
                  lastName: lastNameInput.value.trim()
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

      closingModal('[data-full-name-edit-modal]')
   } catch (e) {}
}