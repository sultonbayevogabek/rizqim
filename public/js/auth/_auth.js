import { selectOne, selectAll } from '../general/_functions'
import { url } from '../general/_variables'
import { warning } from '../general/_toaster'

export default () => {
   try {
      const registerForm = selectOne('#register-form'),
         firstNameInput = selectOne('[data-input-fname]'),
         lastNameInput = selectOne('[data-input-lname]'),
         emailInput = selectOne('[data-input-email]'),
         passwordInput = selectOne('[data-input-password]'),
         registerSubmitBtn = registerForm.querySelector('.button-blue')

      registerForm.addEventListener('submit', async e => {
         e.preventDefault()
         registerSubmitBtn.setAttribute('disabled', 'true')

         let response = await fetch(`${url}/signup`, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify({
               firstName: firstNameInput.value,
               lastName: lastNameInput.value,
               email: emailInput.value,
               password: passwordInput.value,
               type: 'freelancer'
            })
         })

         response = await response.json()
         registerSubmitBtn.removeAttribute('disabled')

         if (response.ok) {
            window.location.href = 'https://rizqim.uz/signin'
         }

         if (!response.ok) {
            warning(response.message)
            registerSubmitBtn.setAttribute('disabled', 'true')
         }
      })
   } catch (e) {}

   try {
      const loginForm = selectOne('#login-form'),
         emailInput = loginForm.querySelector('[data-input-email]'),
         passwordInput = loginForm.querySelector('[data-input-password]'),
         loginSubmitBtn = loginForm.querySelector('.button-blue')

      loginForm.addEventListener('submit', async e => {
         e.preventDefault()
         loginSubmitBtn.setAttribute('disabled', 'true')

         let response = await fetch(`${url}/signin`, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify({
               email: emailInput.value,
               password: passwordInput.value
            })
         })

         response = await response.json()
         loginSubmitBtn.removeAttribute('disabled')

         if (response.ok) {
            window.location.href = url
         }

         if (!response.ok) {
            warning(response.message)
            loginSubmitBtn.setAttribute('disabled', 'true')
         }
      })
   } catch (e) {}
}