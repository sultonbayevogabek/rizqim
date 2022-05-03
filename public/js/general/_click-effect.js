import { selectAll } from './_functions'

export default () => {
    try {
        const buttons = selectAll('.button-click')

        buttons.forEach(button => {
            button.addEventListener('click', function(e) {
                let x = e.clientX
                let y = e.clientY

                let buttonTop = e.target.offsetTop
                let buttonLeft = e.target.offsetLeft

                let xInside = x - buttonLeft
                let yInside = y - buttonTop

                let circle = document.createElement('span')
                circle.classList.add('circle')
                circle.style.top = yInside + 'px'
                circle.style.left = xInside + 'px'

                this.appendChild(circle)

                setTimeout(() => {
                    circle.remove()
                }, 500)
            })
        })
    } catch (e) {

    }
}