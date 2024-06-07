const elements = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
]

const container = document.querySelector('.container')
const divContainer = document.createElement('div')
    divContainer.style.display = 'block'


function createLine(object) {
    const element = document.createElement(object.tag)
    element.innerHTML = object.texto

    return element
}

function createContainer(elements) {

    for (let i = 0; i < elements.length; i++) {
       divContainer.appendChild(createLine(elements[i]))
    }

    container.appendChild(divContainer)
}

createContainer(elements)

