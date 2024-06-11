let time0 = new Date(0)
let atual = 0
let clicked = 0
let interval;
let intervalTemp;

const timer = document.querySelector('.timer')
const play = document.querySelector('.play');
const pause = document.querySelector('.pause');
const clear = document.querySelector('.clear');

function changeTimer(type) {

    if (type === 'down') {
        time0 = new Date(atualTemp)
        atualTemp -= 1000
    } else {
        atual += 1000
        time0 = new Date(atual)
    }

    return time0.toLocaleTimeString('pt-BR', {
        hour12: false, 
        timeZone: 'UTC'
    })
} 

function playTimer(type, timer) {
    timer.style.color = 'black'

    if (type === 'up') {
        interval = setInterval(function () {
            timer.innerHTML = changeTimer(type)
        }, 1000);
        return
    }

    intervalTemp = setInterval(function () {
        timer.innerHTML = changeTimer(type) 
    }, 1000);
}

function pauseTimer(type, timer) {
    
    if (type === 'up') {
        clearInterval(interval)

        timer.style.color = 'red'
        return
    }

    clearInterval(intervalTemp)
    timer.style.color = 'red'
}

function clearTimer(type, timer) {

    if (type === 'up') {
        clearInterval(interval)
        timer.style.color = 'rgb(100, 98, 98)'
        atual = 0
        timer.innerHTML = '00:00:00'
        return
    }

    clearInterval(intervalTemp)
    timer.style.color = 'black'

}

function clearDivTemp() {
           
    divTemp.innerHTML = ''
    
    for (let index = 0; index < inputs.length; index++) {
        
        divTemp.appendChild(inputs[index])
        inputs[index].value = '00'

        if (index < inputs.length - 1) {
            divTemp.innerHTML += ':'
        }
    }
}



play.addEventListener('click', () => {
    if (clicked > 0) {
        return 
    }

    playTimer('up', timer)

    clicked = 1
})


pause.addEventListener('click', () => {
    pauseTimer('up', timer)
    clicked = 0
})


clear.addEventListener('click', () => {
    clearTimer('up', timer)
    clicked = 0
})



// temporizador --------------------

const temporizador = document.querySelector('.temporizador')

const playTemp = document.querySelector('.play-temporizador')
const pauseTemp = document.querySelector('.pause-temporizador')
const clearTemp = document.querySelector('.clear-temporizador')

let inputs = document.querySelectorAll('.temporizador input')
const divTemp = document.querySelector('.inputs-temporizador')

const tempMax = 86399000 // 23:59:59
let atualTemp = 0
let clicledTemp = 0
let playing = false
let timeOut;

function getTime() {
    inputs = document.querySelectorAll('.temporizador input')

    const hour = inputs[0].value * 60 * 60 * 1000
    const min = inputs[1].value * 60 * 1000
    const sec = inputs[2].value * 1000
    const time = hour + min + sec
    console.log('time', time)
    return time
    
}

playTemp.addEventListener('click', () => {

    console.log(!playing)
    if (!playing) {
        atualTemp = getTime()
    }

    if (clicledTemp !== 0 || atualTemp === 0) {
        console.log('clicledTemp != 0 || atualTemp === 0')
        console.log(clicledTemp, atualTemp)

        return
    }
    
    if (atualTemp > tempMax) {
        atualTemp = tempMax
    }

    playTimer('down', divTemp)

    timeOut = setTimeout(() => {
        clearInterval(intervalTemp)

        clearTimer('down', divTemp)
        clearDivTemp()

        alert('Tempo acabou')
        atualTemp = 0

    }, atualTemp + 2000)


    playing = true
    clicledTemp = 1
})

pauseTemp.addEventListener('click', () => {
    pauseTimer('down', divTemp)

    clearTimeout(timeOut)

    clicledTemp = 0
})  

clearTemp.addEventListener('click', () => {
    clearTimer('down', divTemp)
    clearDivTemp()

    clearTimeout(timeOut)

    atualTemp = 0
    clicledTemp = 0 
    playing = false
})

