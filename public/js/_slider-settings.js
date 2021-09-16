import { selectAll } from './_functions'

export default () => {
    try {
        for (let i = 0; i < selectAll('[class*="slider"]').length; i++) {
            new Splide(`.slider-${i + 1}`, {
                type: 'loop',
                speed: 400,
                autoplay: true,
                arrows: true,
                interval: 2000,
                pauseOnHover: true,
                pauseOnFocus: true,
                perPage: 4,
                perMove: 1,
                gap: '24px',
                pagination: false,
                breakpoints: {
                    '850': {
                        perPage: 3,
                        gap: '10px'
                    },
                    '620': {
                        perPage: 2,
                        gap: '10px',
                        arrows: false
                    }
                }
            }).mount()
        }
    } catch (e) {
    }
    try {
        new Splide('.top-freelancers', {
            type: 'loop',
            speed: 400,
            autoplay: true,
            arrows: true,
            interval: 2000,
            pauseOnHover: true,
            pauseOnFocus: true,
            perPage: 3,
            perMove: 1,
            gap: '24px',
            pagination: false,
            breakpoints: {
                '1200': {
                    perPage: 2
                },
                '850': {
                    perPage: 2,
                    gap: '10px'
                },
                '690': {
                    perPage: 1
                },
                '620': {
                    perPage: 1,
                    arrows: false
                }
            }
        }).mount()
    } catch (e) {
    }
}