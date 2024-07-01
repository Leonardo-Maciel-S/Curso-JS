class Validator {
    constructor() {
        this.btn = document.querySelector('.validation');
        this.input = document.querySelector('#cpf');
        this.p = document.querySelector('.result')
    }


    Listener() {

        this.btn.addEventListener('click', e => {
            this.validation()
        })

        this.input.addEventListener('keypress', e => {
            if (e.key === 'Enter') {
                this.validation()
                
            }
        })

    }

    validation() {
        this.getCPF()
        this.getPartCPF(this.startCPF)

        this.firstDig = this.getDig(10)
        this.partCPF.push(this.firstDig)

        this.secondDig = this.getDig(11)
        this.partCPF.push(this.secondDig)

                
        this.showP(this.isValid())
    }   

    getCPF() {
        const cpf = document.querySelector('#cpf').value
        this.startCPF = cpf.replace(/\D+/g , '')

        console.log(this.startCPF)
    }

    getPartCPF(cpf) {
        this.partCPF = cpf.slice(0, -2).split('').map(x => Number(x))
        console.log(this.partCPF)
    }

    getDig(lenght) {
        let total = 0;

        for (let i of this.partCPF) {
            total += i * lenght
            lenght -= 1
        }
        
        const dig = 11 - (total % 11)

        return dig
    }

    isValid() {
        const cpfGenerated = this.partCPF.join('')
        if (cpfGenerated.toString() === this.startCPF) return true

        return false
    }


    showP(isValid) {

        this.partCPF.splice(3, 0, '.')
        this.partCPF.splice(7, 0, '.')
        this.partCPF.splice(11, 0, '-')

        const cpfFull = this.partCPF.join('') 

        if (isValid) {
            this.p.innerHTML = cpfFull + ' é válido'
            this.p.classList.add('validated')
            this.p.classList.remove('invalidated')
            return
        }

        this.startCPF = this.startCPF.split('')
        this.startCPF.splice(3, 0, '.')
        this.startCPF.splice(7, 0, '.')
        this.startCPF.splice(11, 0, '-')



        this.p.innerHTML = this.startCPF.join('') + ' é inválido'
        this.p.classList.add('invalidated')
        this.p.classList.remove('validated')

    }
    
}


const validator = new Validator()
validator.Listener()



