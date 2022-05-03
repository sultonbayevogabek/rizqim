import { selectAll } from '../general/_functions'
import { url } from '../general/_variables'

export default () => {
   try {
      const removeLangButtons = selectAll('[data-remove-lang-btn]')
      removeLangButtons.forEach(btn => {
         btn.addEventListener('click', async e => {
            const id = e.currentTarget.getAttribute('data-remove-lang-btn')

            let response = await fetch(`${url}/profile/remove-lang/${id}`, {
               method: 'DELETE'
            })

            response = await response.json()

            if (response.ok) {
               window.location.reload()
            }
         })
      })
   } catch (e) {}
}