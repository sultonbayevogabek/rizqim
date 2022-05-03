import { selectOne } from '../general/_functions'
import { closingModal } from '../general/_modal'
import { url } from '../general/_variables'
import getScrollbarWidth from '../general/_scroll-width'
import { warning } from '../general/_toaster'

export default () => {
   try {
      const eduAddModalOpenBtn = selectOne('[data-education-add-btn]')
      const eduAddModal = selectOne('[data-education-add-modal]')
      const eduAddForm = eduAddModal.querySelector('form')
      const eduPlaceInput = eduAddForm.querySelector('[data-input-edu-place]')
      const eduTypeInput = eduAddForm.querySelector('[data-input-edu-type]')
      const eduStartYearInput = eduAddForm.querySelector('[data-edu-start-year]')
      const eduStartMonthInput = eduAddForm.querySelector('[data-edu-start-month]')
      const eduEndYearInput = eduAddForm.querySelector('[data-edu-end-year]')
      const eduEndMonthInput = eduAddForm.querySelector('[data-edu-end-month]')
      const eduAboutInput = eduAddForm.querySelector('[data-edu-about]')
      const eduEndYearList = eduAddForm.querySelector('[data-edu-end-year-list]')
      const eduEndYearListItems = eduEndYearList.querySelectorAll('.select__item')
      const eduEndMonthLabel = eduAddForm.querySelector('[data-edu-end-month-label]')

      eduEndYearListItems.forEach(item => {
         item.addEventListener('click', e => {
            const text = e.target.textContent
            if (text === 'hozirgacha') {
               eduEndMonthLabel.classList.add('d-none')
            } else {
               eduEndMonthLabel.classList.remove('d-none')
            }
         })
      })

      eduAddModalOpenBtn.addEventListener('click', e => {
         eduAddModal.classList.remove('d-none')

         document.body.style.overflow = 'hidden'
         document.body.style.paddingRight = getScrollbarWidth() + 'px'
      })

      eduAddForm.addEventListener('submit', async e => {
         e.preventDefault()

         const body = {
            eduPlace: eduPlaceInput.value.trim(),
            eduType: eduTypeInput.value.trim(),
            eduStartYear: eduStartYearInput.textContent.trim(),
            eduStartMonth: eduStartMonthInput.textContent.trim(),
            eduEndYear: eduEndYearInput.textContent.trim(),
            eduEndMonth: eduEndMonthInput.textContent.trim(),
            eduAbout: eduAboutInput.value.trim()
         }

         let response = await fetch(`${url}/profile/add-edu`, {
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
      closingModal('[data-education-add-modal]')
   } catch (e) {}
}