import { selectOne, selectAll } from '../general/_functions'
import { closingModal, openingModal } from '../general/_modal'
import { url } from '../general/_variables'
import { error, warning } from '../general/_toaster'
import getScrollbarWidth from '../general/_scroll-width'

export default () => {
   try {
      const editGitButton = selectOne('[data-git-edit-btn]')
      const editGitModal = selectOne('[data-git-edit-modal]')
      const editGitForm = editGitModal.querySelector('.modal__form')
      const URLInput = editGitForm.querySelector('input')

      editGitButton.addEventListener('click', async e => {
         let response = await fetch(`${url}/profile/data`)
         response = await response.json()

         URLInput.value = response.user.git

         editGitModal.classList.remove('d-none')
         document.body.style.overflow = 'hidden'
         document.body.style.paddingRight = getScrollbarWidth() + 'px'
      })

      editGitForm.addEventListener('submit', async e => {
         e.preventDefault()
         const gitURL = URLInput.value.trim()
         if ((gitURL.startsWith('https://github.com/') || gitURL.startsWith('https://gitlab.com/')) && gitURL.length > 20) {

            let response = await fetch(`${url}/profile/update-git`, {
               headers: {
                  'Content-Type': 'application/json'
               },
               method: 'POST',
               body: JSON.stringify({
                  git: gitURL
               })
            })

            response = await response.json()

            if (response.ok) {
               window.location.reload()
            } else {
               error(response.message)
            }
         } else {
            warning(`Github yoki Gitlabdagi manzilni kiriting`)
         }
      })

      closingModal('[data-git-edit-modal]')
   } catch (e) {}
}