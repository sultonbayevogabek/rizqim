import { selectOne, selectAll, removeClass, addClass } from './_functions'

export default () => {
    try {
        const selectElements = selectAll('.select')

        selectElements.forEach(selectElement => {
            const selectSelected = selectElement.querySelector('.select__selected'),
                selectList = selectElement.querySelector('.select__list'),
                selectItems = selectElement.querySelectorAll('.select__item')

            function showSelectList() {
                removeClass(selectList, 'd-none')
            }

            function hideSelectList() {
                addClass(selectList, 'd-none')
            }

            selectSelected.addEventListener('click', e => {
                if (selectList.classList.contains('d-none')) {
                    showSelectList()
                } else {
                    hideSelectList()
                }
            })
            let selectedOptionIndex
            selectList.addEventListener('click', e => {
                const target = e.target
                selectItems.forEach((item, index) => {
                    removeClass(item, 'select__item--active')
                    if (target === item) {
                        selectedOptionIndex = index
                        selectSelected.textContent = selectItems[selectedOptionIndex].textContent
                    }
                })
                addClass(target, 'select__item--active')
            })
            window.addEventListener('keydown', e => {
                if (e.code === 'Escape') {
                    hideSelectList()
                }
            })
            window.addEventListener('click', e => {
                if (e.target !== selectSelected) {
                    hideSelectList()
                }
            })
        })
    } catch (e) {
    }
}