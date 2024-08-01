export default class FormGerneratePassword {
    constructor(passwordGenerated, form) {
        this.passwordGenerated = passwordGenerated
        this.qtdChar = form.get('qtdChar')
        this.isUpperCase = form.get('isUpperCase')
        this.isLowerCase = form.get('isLowerCase')
        this.isNumber = form.get('isNumber')
        this.isSymbol = form.get('isSymbol')
    }

}
