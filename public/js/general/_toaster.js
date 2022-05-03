import { selectOne } from './_functions'

const toasterList = selectOne('.toaster-list')

function error(message) {
   const toaster = document.createElement('div')
   toaster.classList.add('toaster', 'toaster--error')

   const toasterText = document.createElement('p')
   toasterText.classList.add('toaster__text')
   toasterText.textContent = message

   toaster.append(toasterText)

   let toasterTimer = setTimeout(() => {
      toaster.remove()
   }, 3000)

   toaster.addEventListener('click', e => {
      clearTimeout(toasterTimer)
      toaster.remove()
   })

   toasterList.append(toaster)
}

function success(message) {
   const toaster = document.createElement('div')
   toaster.classList.add('toaster', 'toaster--success')

   const toasterText = document.createElement('p')
   toasterText.classList.add('toaster__text')
   toasterText.textContent = message

   toaster.append(toasterText)

   let toasterTimer = setTimeout(() => {
      toaster.remove()
   }, 3000)

   toaster.addEventListener('click', e => {
      clearTimeout(toasterTimer)
      toaster.remove()
   })

   toasterList.prepend(toaster)
}

function warning(message) {
   const toaster = document.createElement('div')
   toaster.classList.add('toaster', 'toaster--warning')

   const toasterText = document.createElement('p')
   toasterText.classList.add('toaster__text')
   toasterText.textContent = message

   toaster.append(toasterText)

   let toasterTimer = setTimeout(() => {
      toaster.remove()
   }, 3000)

   toaster.addEventListener('click', e => {
      clearTimeout(toasterTimer)
      toaster.remove()
   })

   toasterList.prepend(toaster)
}

export { error, success, warning }