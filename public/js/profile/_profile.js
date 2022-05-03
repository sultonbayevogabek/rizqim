import updateAvatar from './_update-avatar'
import updateFullName from './_update-fullname'
import updatePhone from './_update-phone'
import updateEmail from './_update-email'
import updateTelegram from './_update-telegram'
import updateBio from './_update-bio'
import addPortfolio from './_add-portfolio'
import removePortfolio from './_remove-portfolio'
import addWork from './_add-work'
import removeWork from './_remove-work'
import addEducation from './_add-education'
import removeEducation from './_remove-edu'
import addLanguage from './_add-language'
import removeLanguage from './_remove-lang'
import addSkill from './_add-skill'
import updateWebSite from './_update-website'
import updateGit from './_update-git'

export default () => {
   updateAvatar()
   updateFullName()
   updatePhone()
   updateEmail()
   updateTelegram()
   updateBio()
   addPortfolio()
   removePortfolio()
   addWork()
   removeWork()
   addEducation()
   removeEducation()
   addLanguage()
   removeLanguage()
   addSkill()
   updateWebSite()
   updateGit()
}