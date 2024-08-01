export default class Gerator {

    rand(min, max) {
        return Math.floor(Math.random() * (max - min) + min)
    }

    getUpperChar() {
        return (
            String.fromCharCode(this.rand(65, 90))
        )
    }

    getLowerChar() {
        return (
            String.fromCharCode(this.rand(97, 122))
        )
    }

    getNumber() {
        return (
            String.fromCharCode(this.rand(48, 57))
        )
    }

    getSymbol() {
        const symbols = '!@#$%*_+-=~.,;:/?{}[]' 

        return symbols[this.rand(0, symbols.length)]

    }

}

