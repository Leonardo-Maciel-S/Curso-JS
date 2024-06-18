function Pessoa(nome, sobrenome) {

    const id = 12345

    
    this.getId = () => {
        return id
    }


    this.nome = nome
    this.sobrenome = sobrenome

    
}

const p1 = new Pessoa('Leonardo', 'Maciel')
const p2 = new Pessoa('João', 'Silva')



console.log(p1.getId())
console.log(p2.nome)