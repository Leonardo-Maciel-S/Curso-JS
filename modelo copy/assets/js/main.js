function Produto(nome, valor, estoque) {

    let nomePrivado = nome;

    Object.defineProperties(this, {
        nome: {
            enumerable: true,   // se vai mostrar a chave num iterável
            configurable: true,  // reconfigurável ou apagável
            get: () => {
                return nomePrivado
            }, 
            set: (valor) => {
                if (valor.toLowerCase() === 'leonardo') {
                    nomePrivado = 'gostoso'
                    return
                }

                nomePrivado = nome

            }
        },
    })
   
}

const produto1 = new Produto('camiseta', 20, 3)
produto1.nome = 'Leonardo'
console.log(produto1.nome)