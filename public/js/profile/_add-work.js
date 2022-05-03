import { selectOne } from '../general/_functions'
import { closingModal } from '../general/_modal'
import { url } from '../general/_variables'
import getScrollbarWidth from '../general/_scroll-width'
import { warning } from '../general/_toaster'

export default () => {
   try {
      const workAddModalOpenBtn = selectOne('[data-work-add-btn]')
      const workAddModal = selectOne('[data-work-add-modal]')
      const workAddForm = workAddModal.querySelector('form')
      const workPlaceInput = workAddForm.querySelector('[data-input-work-place]')
      const workTypeInput = workAddForm.querySelector('[data-input-work-job]')
      const workStartYearInput = workAddForm.querySelector('[data-work-start-year]')
      const workStartMonthInput = workAddForm.querySelector('[data-work-start-month]')
      const workEndYearInput = workAddForm.querySelector('[data-work-end-year]')
      const workEndMonthInput = workAddForm.querySelector('[data-work-end-month]')
      const workAboutInput = workAddForm.querySelector('[data-work-about]')
      const workEndYearList = workAddForm.querySelector('[data-work-end-year-list]')
      const workEndYearListItems = workEndYearList.querySelectorAll('.select__item')
      const workEndMonthLabel = workAddForm.querySelector('[data-work-end-month-label]')

      workEndYearListItems.forEach(item => {
         item.addEventListener('click', e => {
            const text = e.target.textContent
            if (text === 'hozirgacha') {
               workEndMonthLabel.classList.add('d-none')
            } else {
               workEndMonthLabel.classList.remove('d-none')
            }
         })
      })
      workAddModalOpenBtn.addEventListener('click', e => {
         workAddModal.classList.remove('d-none')

         document.body.style.overflow = 'hidden'
         document.body.style.paddingRight = getScrollbarWidth() + 'px'
      })

      workAddForm.addEventListener('submit', async e => {
         e.preventDefault()

         const body = {
            workPlace: workPlaceInput.value.trim(),
            workType: workTypeInput.value.trim(),
            workStartYear: workStartYearInput.textContent.trim(),
            workStartMonth: workStartMonthInput.textContent.trim(),
            workEndYear: workEndYearInput.textContent.trim(),
            workEndMonth: workEndMonthInput.textContent.trim(),
            workAbout: workAboutInput.value.trim()
         }

         let response = await fetch(`${url}/profile/add-work`, {
            headers: {
               'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(body)
         })

         response = await response.json()

         if (!response.ok) {
            warning(response.message)
         }

         if (response.ok) {
            window.location.reload()
         }
      })
      closingModal('[data-work-add-modal]')
   } catch (e) {}
}