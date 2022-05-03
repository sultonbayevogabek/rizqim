import auth from './auth/_auth'
import general from './general/_general'
import profile from './profile/_profile'

document.addEventListener('DOMContentLoaded', () => {
    general()
    auth()
    profile()
})