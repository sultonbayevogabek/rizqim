export default () => {
    try {
        window.addEventListener('contextmenu', e => {
            e.preventDefault()
        })

        window.addEventListener('keydown', e => {
            if (e.key === 'F12') {
                e.preventDefault()
            }
        })
    } catch (e) {
        console.log(e)
    }
}