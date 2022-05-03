import { selectAll } from '../general/_functions'
import { url } from '../general/_variables'

export default () => {
   try {
      const removeExpButtons = selectAll('[data-remove-exp-btn]')
      removeExpButtons.forEach(btn => {
         btn.addEventListener('click', async e => {
            const id = e.currentTarget.getAttribute('data-remove-exp-btn')

            let response = await fetch(`${url}/profile/remove-work/${id}`, {
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