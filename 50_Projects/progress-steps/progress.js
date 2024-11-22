const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1


next.addEventListener('click', () => {
    currentActive++

    if(currnetActive > circles.length) {
        currentActive = circles.length
    }

    update()
})


next.addEventListener('click', () => {
    currentActive--

    if(currnetActive < 1) {
        currentActive = 1
    }

    update()
})

