import { selectOne } from '../general/_functions'
import { url } from '../general/_variables'

export default () => {
   try {
      const createSponsorForm = selectOne('#create-sponsor')
      const sponsorUrlInput = createSponsorForm.querySelector('[data-sponsor-url]')
      const sponsorLogoInput = createSponsorForm.querySelector('[data-sponsor-logo]')

      createSponsorForm.addEventListener('submit', async e => {
         e.preventDefault()

         let formData = new FormData()

         formData.append('link', sponsorUrlInput.value.trim())
         formData.append('logo', sponsorLogoInput.files[0])

         let response = await fetch(`${url}/admin/create-sponsor`, {
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