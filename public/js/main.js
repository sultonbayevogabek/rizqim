import clickEffect from './_click-effect'
import sliderSettings from './_slider-settings'
import validateForm from './_validate-form'
import devTool from './_dev-tools'
import customSelect from './_custom-select'
import maskPhone from './_mask-phone'
import previewImg from './_preview-img'
import nav from './_nav'

document.addEventListener('DOMContentLoaded', () => {
    clickEffect()
    sliderSettings()
    validateForm()
    customSelect()
    maskPhone()
    nav()
    previewImg('#modal', '.modal__preview')
})