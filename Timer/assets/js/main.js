let time0 = new Date(0)
let atual = 0
let clicked = 0
let interval;

const timer = document.querySelector('.timer')
const play = document.querySelector('.play');
const pause = document.querySelector('.pause');
const clear = document.querySelector('.clear');

function changeTimer() {
    atual += 1000
    time0 = new Date(atual)
    return time0.toLocaleTimeString('pt-BR', {
        hour12: false, 
        timeZone: 'UTC'
    })
} 

function playTimer() {
    timer.style.color = 'black'

    interval = setInterval(function () {
        timer.innerHTML = changeTimer() 
        console.log(atual)
    }, 1000);
}

function pauseTImer() {
    clearInterval(interval)

    timer.style.color = 'red'
}

function clearTimer() {
    clearInterval(interval)  
    
    timer.style.color = 'black'
    atual = 0
    timer.innerHTML = '00:00:00'
}



play.addEventListener('click', () => {
    if (clicked > 0) {
        return 
    }

    playTimer()

    clicked = 1
})


pause.addEventListener('click', () => {
    pauseTImer()
    clicked = 0
})


clear.addEventListener('click', () => {
    clearTimer()
    clicked = 0
})



// temporizador --------------------

const temporizador = document.querySelector('.temporizador')
const playTemp = document.querySelector('.play-temporizador')
const pauseTemp = document.querySelector('.pause-temporizador')
const clearTemp = document.querySelector('.clear-temporizador')

temporizador.addEventListener('click', (event) => {
    
})





