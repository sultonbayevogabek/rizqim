import { selectOne } from '../general/_functions'
import { closingModal } from '../general/_modal'
import { url } from '../general/_variables'
import getScrollbarWidth from '../general/_scroll-width'
import { error } from '../general/_toaster'

export default () => {
   try {
      const editBioButton = selectOne('[data-bio-edit-btn]')
      const editBioModal = selectOne('[data-bio-edit-modal]')
      const editBioForm = editBioModal.querySelector('.modal__form')
      const bioInput = editBioForm.querySelector('textarea')

      editBioButton.addEventListener('click', async e => {
         let response = await fetch(`${url}/profile/data`)
         response = await response.json()

         bioInput.value = response.user.bio

         editBioModal.classList.remove('d-none')
         document.body.style.overflow = 'hidden'
         document.body.style.paddingRight = getScrollbarWidth() + 'px'
      })

      editBioForm.addEventListener('submit', async e => {
         e.preventDefault()
         const bio = bioInput.value.trim()

         let response = await fetch(`${url}/profile/update-bio`, {
            headers: {
               'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
               bio
            })
         })

         response = await response.json()

         if (response.ok) {
            window.location.reload()
         } else {
            error(response.message)
         }
      })

      closingModal('[data-bio-edit-modal]')
   } catch (e) {}
}