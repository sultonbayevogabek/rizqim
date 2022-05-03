import { selectAll, selectOne } from '../general/_functions'
import { closingModal } from '../general/_modal'
import { url } from '../general/_variables'
import getScrollbarWidth from '../general/_scroll-width'
import { warning } from '../general/_toaster'

export default () => {
   try {
      const technologies = [
         'HTML',
         'CSS',
         'JavaScript',
         'Bootstrap',
         'Sass',
         'Less',
         'XML',
         'Webpack',
         'Jquery',
         'Babel',
         'Materialize',
         'React',
         'Redux',
         'NextJS',
         'Angular',
         'AngularJS',
         'TypeScript',
         'Docker',
         'RXJS',
         'VueJS',
         'VanillaJS',
         'UMI JS',
         'Git',
         'Github',
         'Gitlab',
         'NPM',
         'Socket.io',
         'NodeJS',
         'Java',
         'Python',
         'PHP',
         'C#',
         'Go',
         'Axon',
         'Spring',
         'Django',
         'Laravel',
         'Express',
         'EJS',
         'SQL',
         'PostgresSQL',
         'MongoDB',
         'MySQL',
         'Oracle',
         'Sequelize',
         'PUG',
         'Figma',
         'Photoshop',
         'Postman'
      ]
      let oldSkills = []

      const addSkillModalOpenBtn = selectOne('[data-add-skill-btn]')
      const addSkillModal = selectOne('[data-skill-add-modal]')
      const addSkillForm = addSkillModal.querySelector('.modal__form')
      const skillInput = selectOne('[data-skill-input]')
      const skillHintsListElement = selectOne('.skills__hints')
      const skillsListElement = selectOne('.skills__list')

      addSkillModalOpenBtn.addEventListener('click', async e => {
         addSkillModal.classList.remove('d-none')
         skillsListElement.innerHTML = ''
         skillHintsListElement.innerHTML = ''
         skillInput.value = ''

         let response = await fetch(`${url}/profile/data`)
         response = await response.json()

         if (response.user.skills.length) {
            oldSkills = response.user.skills

            skillsDrawer(oldSkills)
         } else {
            oldSkills = []
            skillsDrawer(oldSkills)
         }

         document.body.style.overflow = 'hidden'
         document.body.style.paddingRight = getScrollbarWidth() + 'px'
      })

      addSkillForm.addEventListener('submit', async e => {
         e.preventDefault()

         let response = await fetch(`${url}/profile/add-skill`, {
            headers: {
               'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(oldSkills)
         })

         response = await response.json()

         if (response.ok) {
            window.location.reload()
         }
      })

      skillInput.addEventListener('input', e => {
         const searchingTechnology = e.target.value.trim().toLowerCase()
         let filteredTechnologies = technologies.filter(tech => {
            return tech.toLowerCase().indexOf(searchingTechnology) !== -1
         })

         skillsHintsDrawer(filteredTechnologies)
      })

      function skillsDrawer(skills) {
         skillsListElement.innerHTML = ''

         skills.forEach(skill => {
            skillsListElement.innerHTML += `
               <li class="skills__item">
                  <span>${skill}</span>
                  <span class="skills__remove">
                      <img src="/img/icons/times.svg" alt="remove icon">
                  </span>
              </li>
            `
         })

         removeSkill()
      }

      function skillsHintsDrawer(filteredSkills) {
         skillHintsListElement.innerHTML = ''

         filteredSkills.forEach(item => {
            skillHintsListElement.innerHTML += `
               <li class="skills__hints__item">
                   ${ item }
               </li>
            `
         })
         selectSkill()
      }

      function selectSkill() {
         const skillHintItems = selectAll('.skills__hints__item')
         skillHintItems.forEach(item => {
            item.addEventListener('click', e => {
               const skill = e.target.textContent.trim()

               if (oldSkills.includes(skill)) {
                  return warning(`Bun texnologiya ro'yxatda bor`)
               }

               oldSkills.push(skill)
               skillInput.value = ''
               skillHintsListElement.innerHTML = ''
               skillsDrawer(oldSkills)
            })
         })
      }

      function removeSkill() {
         const removeSkillIcons = selectAll('.skills__remove')

         removeSkillIcons.forEach((item, index) => {
            item.addEventListener('click', e => {
               oldSkills.splice(index, 1)
               skillsDrawer(oldSkills)
            })
         })
      }

      closingModal('[data-skill-add-modal]')

      const removeSkillButtons = selectAll('.profile__skills__remove')
      removeSkillButtons.forEach(btn => {
         btn.addEventListener('click', async e => {
            const removingSkill = e.currentTarget.previousElementSibling.textContent.trim()

            let response = await fetch(`${url}/profile/remove-skill`, {
               headers: {
                  'Content-Type': 'application/json',
               },
               method: 'POST',
               body: JSON.stringify({
                  skill: removingSkill
               })
            })

            response = await response.json()

            if (response.ok) {
               window.location.reload()
            }
         })
      })
   } catch (e) {}
}