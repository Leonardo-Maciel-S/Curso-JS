const inputCpf = document.querySelector('#cpf')
const btn = document.querySelector('.validation')
const p = document.querySelector('.result')

btn.onclick = () => { 
    validation()
}


inputCpf.addEventListener('keypress', e => {

    if (e.key !== 'Enter') valiteFormat(e.key)

    if (e.key === 'Enter') { 
        if (inputCpf.value === '') return 
        validation()
     }
})


function validation(){
   
    const cpf = inputCpf.value
    const cpfFull = cpf.replace(/\D+/g , '')

    if (isSequence(cpfFull)) return


    let cpfNumbers = splitCPf(cpfFull)


    let result = multiplicator(cpfNumbers)

    let firstDig = getDigit(result)

    cpfNumbers.push(firstDig)


    result = result = multiplicator(cpfNumbers)

    let secondDig = getDigit(result)

    cpfNumbers.push(secondDig)

    const cpfvalidated = cpfNumbers.join('')

    if (cpfvalidated.toString() === cpfFull.toString()) {
        p.innerHTML = `O CPF ${addCaracter(cpfNumbers)} é válido`
        p.classList.remove('invalidated')
        p.classList.add('validated')
        return 
    }

    p.classList.remove('validated')
    p.classList.add('invalidated')
    p.innerHTML = `O CPF ${cpf} é inválido`
}


function valiteFormat(key) {

    if (inputCpf.value.length > 14) {
        inputCpf.value = inputCpf.value.slice(0, -1)
        return
    }

    let value = inputCpf.value

    if (value.length  === 3 || value.length === 7) {
        inputCpf.value += '.'
    }

    if (value.length === 11) {
        inputCpf.value += '-'
    }
}

function isSequence(cpf) {
    return cpf[0].repeat(cpf.length) === cpf
}

function multiplicator(array) {
    let sum = 0
    let multiplier = array.length + 1

    for (let num of array) {
        sum += num * multiplier
        multiplier -= 1
    }

    return sum
}


function splitCPf(cpf) {
    
    let cpfBeforeDig = cpf.slice(0, -2)
    let cpfNumbers = cpfBeforeDig.split('')
    
    cpfNumbers = cpfNumbers.map(e => Number(e))

    return cpfNumbers
}


function getDigit(sum) {
    const digit = 11 - (sum % 11)

    return digit > 9 ? 0 : digit
}


function addCaracter(cpf) {

    cpf.splice(3, 0, '.')  // add . 
    cpf.splice(7, 0, '.')  // add . 
    cpf.splice(11, 0, '-') // add -

    return cpf.join('')
}