
const form = document.querySelector("form")


form.addEventListener("submit", (evento) => {
    evento.preventDefault()

    const peso = parseFloat(form.querySelector("#peso").value)
    const altura = parseFloat(form.querySelector("#altura").value)

    if (!peso) {
        setResultado("Peso inválido")
        return
    }

    if (!altura) {
        setResultado("Altura inválida")
        return  
    }

    imc = calculaImc(peso, altura)

    const pResult = document.getElementById("p-result")

    const msg = `Seu IMC é ${imc['valor']} (${imc["table"]})`

    setResultado(msg, true)
})

function calculaImc(peso, altura) {

    const imc = (peso / (altura ** 2))
    let table = ""

    if (imc < 18.5) {
        table = "Abaixo do peso"
    } else if (imc >= 18.5 && imc <= 24.9) {
        table = 'Peso normal'
    } else if (imc >= 25 && imc <= 29.9) {
        table = 'Sobrepeso'
    } else if (imc >= 30 && imc <= 34.9) {
        table = "Obesidade grau 1"
    } else if (imc >= 35 && imc <= 39.9) {
        table = 'Obesidade grau 2'
    } else {
        table = 'Obesidade grau 3'
    }

    return {
        valor: imc.toFixed(2),
        table: table
    }
}

function setResultado(msg, isValid) {
    const pResult = document.getElementById("p-result")
    pResult.innerText = msg
    pResult.style.display = 'block'

    if (isValid) {
        pResult.classList.remove("p-invalid")
        pResult.classList.add("p-ok")
        return
    }

    pResult.classList.remove("p-ok")
    pResult.classList.add("p-invalid")
}
