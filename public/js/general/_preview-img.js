import { selectOne } from './_functions'

export default (selectorFileInput, selectorPreviewImgWrapper) => {
    try {
        selectOne(selectorFileInput).addEventListener('change', ev => {
            const previewImgWrapper = selectOne(selectorPreviewImgWrapper)

            if (ev.target.files[0]) {
                let reader = new FileReader();

                reader.onload = function (e) {
                    previewImgWrapper.innerHTML = `
                        <img src="${e.target.result}">
                    `
                }

                reader.readAsDataURL(ev.target.files[0])
            }
        })
    } catch (e) {
        console.log(e)
    }
}