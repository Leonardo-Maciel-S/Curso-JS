import Genaretor from './modules/generators';
import FormGerneratePassword from './modules/formGerneratePassword';
import './assets/css/style.css';


const btnGenerator = document.querySelector('.btn-generator');
const form = document.querySelector('.formPassword');
const passwordGenerated = document.querySelector('.password-generated');

const generator = new Genaretor();

form.onsubmit = (event) => {
    generatePassword(event);
}


const generatePassword = (event) => {
    event.preventDefault()

    const formEl = new FormData(event.target)
    const formGenerator = new FormGerneratePassword(passwordGenerated, formEl)

    let password = [];

    while (password.length <= formGenerator.qtdChar) {

        for (let key in formGenerator) {

            if (formGenerator[key] === 'on') {
                let char = gerenateDig(key)

                password.push(char)
            }

        }
    }

    passwordGenerated.innerHTML = password.join('').slice(0, formGenerator.qtdChar)

}   


function gerenateDig(type){
    const functions = {
        'isUpperCase': generator.getUpperChar(),
        'isLowerCase': generator.getLowerChar(),
        'isNumber': generator.getNumber(),
        'isUpperCase': generator.getSymbol(),

    }

    return (functions[type])

}






