import { selectOne, selectAll } from '../general/_functions'
import { closingModal, openingModal } from '../general/_modal'
import { url } from '../general/_variables'
import { error, warning } from '../general/_toaster'
import getScrollbarWidth from '../general/_scroll-width'

export default () => {
   try {
      const editWebSiteButton = selectOne('[data-website-edit-btn]')
      const editWebSiteModal = selectOne('[data-website-edit-modal]')
      const editWebSiteForm = editWebSiteModal.querySelector('.modal__form')
      const URLInput = editWebSiteForm.querySelector('[data-website-link-input]')

      editWebSiteButton.addEventListener('click', async e => {
         let response = await fetch(`${url}/profile/data`)
         response = await response.json()

         URLInput.value = response.user.web_site

         editWebSiteModal.classList.remove('d-none')
         document.body.style.overflow = 'hidden'
         document.body.style.paddingRight = getScrollbarWidth() + 'px'
      })

      editWebSiteForm.addEventListener('submit', async e => {
         e.preventDefault()
         const webSite = URLInput.value.trim()
         if ((webSite.startsWith('https://') || webSite.startsWith('http://')) && webSite.length > 10) {

            let response = await fetch(`${url}/profile/update-website`, {
               headers: {
                  'Content-Type': 'application/json'
               },
               method: 'POST',
               body: JSON.stringify({
                  web_site: webSite
               })
            })

            response = await response.json()

            if (response.ok) {
               window.location.reload()
            } else {
               error(response.message)
            }
         } else {
            warning(`URL manzilni kiriting`)
         }
      })

      closingModal('[data-website-edit-modal]')
   } catch (e) {}
}