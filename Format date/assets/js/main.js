// function convertDate(date) {
//     const day = date.getDate()
//     const month = date.getMonth() + 1
//     const year = date.getFullYear()

//     const hour = zeroLeft(date.getHours())
//     const min = zeroLeft(date.getMinutes())

//     const dayWeek = date.getDay()

//     const monthYear = getMonthYear(month)
//     const dayOnWeek = getDayWeek(dayWeek)

//     const dateFormated = `${dayOnWeek}, ${day} de ${monthYear} de ${year} <br> ${hour}:${min}`

//     return dateFormated
// } 

// function zeroLeft(number) {
//     return number >= 10 ? number : `0${number}`
// }

// function getDayWeek(number) {
//     const daysWeek = {
//         0: 'Domingo',
//         1: 'Segunda-feira',
//         2: 'Terça-feira',
//         3: 'Quarta-feira',
//         4: 'Quinta-feira',
//         5: 'Sexta-feira',
//         6: 'Sábado'
//     }

//     return daysWeek[number]
// }

// function getMonthYear(number) {

//     const monthYear = {
//         1: "Janero",
//         2: "Fevereiro",
//         3: "Março",
//         4: "Abril",
//         5: "Maio",
//         6: "Junho",
//         7: "Julho",
//         8: "Agosto",
//         9: "Setembro",
//         10: "Outubro",
//         11: "Novembro",
//         12: "Dezembro"
//     }

//     return monthYear[number]
// }

// const date = new Date()
// const dateFormated = convertDate(date)

// const h1 = document.querySelector("h1")
// h1.innerHTML = dateFormated

const date = new Date()
const h1 = document.querySelector("h1")
const option =  { 
    dateStyle : 'full', 
    timeStyle: 'short'  
}

h1.innerHTML = new Intl.DateTimeFormat("pt-BR", option).format(date)


