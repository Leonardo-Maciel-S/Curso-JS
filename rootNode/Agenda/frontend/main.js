import './assets/css/style.css';
import 'core-js/stable'
import 'regenerator-runtime/runtime'

function clearInputs(event) {
    event.preventDefault()

    console.log(event.target)
}