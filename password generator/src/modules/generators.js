function rand(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

export function getUpperChar() {
    return (
        String.fromCharCode(rand(65, 90))
    )
}


export function getLowerChar() {
    return (
        String.fromCharCode(rand(97, 122))
    )
}

export function getNumber() {
    return (
        String.fromCharCode(rand(0, 9))
    )
}

export function getSymbol() {
    return (
        String.fromCharCode(rand(33, 47))
    )
}
