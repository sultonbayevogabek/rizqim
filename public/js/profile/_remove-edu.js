import { selectAll } from '../general/_functions'
import { url } from '../general/_variables'

export default () => {
   try {
      const removeEduButtons = selectAll('[data-remove-edu-btn]')
      removeEduButtons.forEach(btn => {
         btn.addEventListener('click', async e => {
            const id = e.currentTarget.getAttribute('data-remove-edu-btn')

            let response = await fetch(`${url}/profile/remove-edu/${id}`, {
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