import auth from './auth/_auth'
import general from './general/_general'
import profile from './profile/_profile'
import admin from './admin/_admin'
import contact from './contact/_contact'

document.addEventListener('DOMContentLoaded', () => {
    general()
    auth()
    profile()
    contact()
    admin()
})