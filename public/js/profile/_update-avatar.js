import { selectOne } from '../general/_functions'
import { url } from '../general/_variables'
import { success } from '../general/_toaster'

export default () => {
   try {
      const avatarInput = selectOne('.avatar-change__input')
      const avatarImgElement = selectOne('.profile__avatar > img')

      avatarInput.addEventListener('change', async e => {
         const formData = new FormData()

         formData.append('avatar', e.target.files[0])

         let response = await fetch(`${url}/profile/avatar`, {
            method: 'POST',
            body: formData
         })

         response = await response.json()

         if (response.ok) {
            success(response.message)
            avatarImgElement.src = response.avatar
         }
      })
   } catch (e) {}
}