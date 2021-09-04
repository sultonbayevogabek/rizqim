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
                    '1300': {
                        perPage: 4,
                        width: '100%',
                        gap: '20px',
                    },
                    '1060': {
                        perPage: 3,
                        width: '100%',
                        gap: '20px',
                    },
                    '800': {
                        perPage: 2,
                        width: '100%',
                        gap: '20px',
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
                '1300': {
                    perPage: 4,
                    width: '100%',
                    gap: '20px',
                },
                '1060': {
                    perPage: 3,
                    width: '100%',
                    gap: '20px',
                },
                '800': {
                    perPage: 2,
                    width: '100%',
                    gap: '20px',
                }
            }
        }).mount()
    } catch (e) {
    }
}