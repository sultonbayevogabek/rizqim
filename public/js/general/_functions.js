const selectOne = selector => document.querySelector(selector)
const selectAll = selector => document.querySelectorAll(selector)
const addClass = (element, className) => {
    element.classList.add(className)
}
const removeClass = (element, className) => {
    element.classList.remove(className)
}

export { selectOne, selectAll, addClass, removeClass }