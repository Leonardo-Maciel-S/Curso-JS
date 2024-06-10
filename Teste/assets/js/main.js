const paragraphs = document.querySelectorAll('p')

const styleComputed = getComputedStyle(document.querySelector('body'))

for (let i of paragraphs) {
    i.style.backgroundColor = 
    console.log(styleComputed.backgroundColor)
}