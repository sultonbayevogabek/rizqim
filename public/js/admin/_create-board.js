import { selectOne } from '../general/_functions'
import { url } from '../general/_variables'

export default () => {
   try {
      const createBoardForm = selectOne('#create-board')
      const boardTitleInput = createBoardForm.querySelector('[data-board-title]')
      const boardBudgetInput = createBoardForm.querySelector('[data-board-budget]')
      const boardDescriptionInput = createBoardForm.querySelector('[data-board-descr]')
      const boardMaterialLinkInput = createBoardForm.querySelector('[data-board-material-link]')
      const boardImgInput = createBoardForm.querySelector('[data-board-img]')
      const boardAcceptanceDateInput = createBoardForm.querySelector('[data-board-acceptance-date]')
      const boardFinishDateInput = createBoardForm.querySelector('[data-board-finish-date]')
      const boardAdminTelegramInput = createBoardForm.querySelector('[data-board-admin-telegram]')

      createBoardForm.addEventListener('submit', async e => {
         e.preventDefault()

         let formData = new FormData()
         formData.append('title', boardTitleInput.value)
         formData.append('description', boardDescriptionInput.value)
         formData.append('budget', boardBudgetInput.value)
         formData.append('admin_telegram', boardAdminTelegramInput.value)
         formData.append('acceptance_data', boardAcceptanceDateInput.value)
         formData.append('finish_data', boardFinishDateInput.value)
         formData.append('materials_link', boardMaterialLinkInput.value)
         formData.append('img', boardImgInput.files[0])

         let response = await fetch(`${url}/admin/create-board`, {
            method: 'POST',
            body: formData
         })

         response = await response.json()

         if (response.ok) {
            window.location.reload()
         }
      })
   } catch (e) {

   }
}