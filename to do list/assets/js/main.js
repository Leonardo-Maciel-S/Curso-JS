const input = document.querySelector('.new-task')
const btnInput = document.querySelector('.btn-add-task')
const viewListTask = document.querySelector('.list-taks')

const local = localStorage.getItem('listTask')
const listTask = JSON.parse(local) || []

function showList(list) {  
    
    viewListTask.innerHTML = ''

    for (let index in list) {

        let li = document.createElement('li')
        let span = document.createElement('span')
        let btnClear = document.createElement('button')

        btnClear.onclick = () => {deleteTask(`${index}`)}
        
        btnClear.innerText = 'Apagar'
        span.innerText = list[index]
        
        li.appendChild(span)
        li.appendChild(btnClear)
        viewListTask.appendChild(li)

        
    }
}

function saveTask() {
    const json = JSON.stringify(listTask)
    localStorage.setItem('listTask', json)
}

function createTask() {

    listTask.push(input.value)

    clearInput()
    showList(listTask)

    saveTask()
}

function clearInput() {
    input.value = ''
    input.focus()

}

function deleteTask(index) {
    let item = listTask.indexOf(listTask[index])
    listTask.splice(item, 1)

    showList(listTask)
    saveTask()
}

input.addEventListener('keypress', (e) => {
    if (!input.value) {
        return
    }
    
    if (e.key === 'Enter') {
        createTask()
    }
})

btnInput.addEventListener('click', () => {
    if (!input.value) {
        return
    }

    createTask()
}) 

showList(listTask)