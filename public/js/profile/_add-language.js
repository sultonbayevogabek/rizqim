import { selectOne } from '../general/_functions'
import { closingModal } from '../general/_modal'
import { url } from '../general/_variables'
import getScrollbarWidth from '../general/_scroll-width'
import { warning } from '../general/_toaster'

export default () => {
   try {
      const addLanguageBtn = selectOne('[data-add-language-btn]')
      const addLanguageModal = selectOne('[data-language-add-modal]')
      const addLanguageForm = addLanguageModal.querySelector('.modal__form')
      const languageNameElement = addLanguageForm.querySelector('[data-language-name]')
      const languageDegreeElement = addLanguageForm.querySelector('[data-language-degree]')

      addLanguageBtn.addEventListener('click', async e => {
         addLanguageModal.classList.remove('d-none')

         document.body.style.overflow = 'hidden'
         document.body.style.paddingRight = getScrollbarWidth() + 'px'
      })

      addLanguageForm.addEventListener('submit', async e => {
         e.preventDefault()

         const languageList = [
            'Ingliz tili',
            'Rus tili',
            'Koreys tili',
            'Xitoy tili',
            'Arab tili',
            'Yapon tili',
            'Nemis tili',
            'Fransuz tili',
            'Tojik tili',
            'Turk tili'
         ]
         const degreeList = [
            `Boshlang'ich`,
            `O'rta`,
            'Yuqori'
         ]

         const languageName = languageNameElement.textContent.trim()
         const languageDegree = languageDegreeElement.textContent.trim()

         if (!languageList.includes(languageName) || !degreeList.includes(languageDegree)) {
            return warning(`Biladigan tilingiz nomini va bilish darajangizni kiriting`)
         }

         let response = await fetch(`${url}/profile/add-language`, {
            headers: {
               'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
               language: languageName,
               degree: languageDegree,
            })
         })

         response = await response.json()

         if (!response.ok) {
            warning(response.message)
         }

         if (response.ok) {
            window.location.reload()
         }
      })

      closingModal('[data-language-add-modal]')
   } catch (e) {}
}