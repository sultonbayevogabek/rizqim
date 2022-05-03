import { selectAll } from '../general/_functions'
import { url } from '../general/_variables'

export default () => {
   try {
      const removePortfolioButtons = selectAll('[data-remove-portfolio-btn]')

      removePortfolioButtons.forEach(removeButton => {
         removeButton.addEventListener('click', async e => {
            const id = e.currentTarget.getAttribute('data-remove-portfolio-btn')
            console.log(id)
            let response = await fetch(`${url}/profile/remove-portfolio/${id}`, {
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