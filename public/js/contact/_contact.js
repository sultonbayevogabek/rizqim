import { selectOne } from '../general/_functions'
import { url } from '../general/_variables'
import { warning, success } from '../general/_toaster'

export default () => {
   try {
      const contactForm = selectOne('.contact-form')
      const nameInput = contactForm.querySelector('[data-input-fname]')
      const phoneInput = contactForm.querySelector('[data-input-phone]')
      const messageInput = contactForm.querySelector('textarea')

      contactForm.addEventListener('submit', async e => {
         e.preventDefault()

         let response = await fetch(`${url}/contact`, {
            headers: {
               'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
               name: nameInput.value.trim(),
               phone_number: phoneInput.value.trim(),
               message: messageInput.value.trim()
            })
         })

         response = await response.json()

         if (response.ok) {
            contactForm.reset()
            return success(`Xabaringiz platforma adminiga jo'natildi`)
         }

         warning(response.message)
      })
   } catch (e) {}
}