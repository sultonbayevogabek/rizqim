import { selectOne } from '../general/_functions'
import { closingModal } from '../general/_modal'
import { url } from '../general/_variables'
import getScrollbarWidth from '../general/_scroll-width'
import previewImg from '../general/_preview-img'
import { warning } from '../general/_toaster'

export default () => {
   try {
      previewImg('[data-portfolio-img-input]', '.modal__preview')

      const addPortfolioButton = selectOne('[data-portfolio-add-btn]')
      const addPortfolioModal = selectOne('[data-portfolio-add-modal]')
      const addPortfolioForm = addPortfolioModal.querySelector('.modal__form')
      const addPortfolioImgInput = addPortfolioForm.querySelector('[data-portfolio-img-input]')
      const addPortfolioNameInput = addPortfolioForm.querySelector('[data-input-project-name]')
      const addPortfolioLinkInput = addPortfolioForm.querySelector('[data-input-portfolio-link]')

      addPortfolioButton.addEventListener('click', async e => {
         addPortfolioModal.classList.remove('d-none')
         document.body.style.overflow = 'hidden'
         document.body.style.paddingRight = getScrollbarWidth() + 'px'
      })

      addPortfolioForm.addEventListener('submit', async e => {
         e.preventDefault()

         const formData = new FormData()

         formData.append('portfolio_img', addPortfolioImgInput.files[0])
         formData.append('project_name', addPortfolioNameInput.value)
         formData.append('project_link', addPortfolioLinkInput.value)

         let response = await fetch(`${url}/profile/add-portfolio`, {
            method: 'POST',
            body: formData
         })

         response = await response.json()

         if (!response.ok) {
            warning(response.message)
         }

         if (response.ok) {
            window.location.reload()
         }
      })

      closingModal('[data-portfolio-add-modal]')
   } catch (e) {}
}