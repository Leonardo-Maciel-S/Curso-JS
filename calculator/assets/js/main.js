function createCalculator() {
    
    return {
        display: document.querySelector('.display'),
        btns: document.querySelector('.buttons-container'),
        
        start() {
            this.getButton()
            this.pressEnter()   
        },

        getButton() {
            this.btns.addEventListener('click', (e) => {
                const element = e.target

                if (element.classList.contains('btn-num')) {
                    this.display.value += element.innerText
                    
                }

                if (element.classList.contains('clear')) {
                    this.clearDisplay()

                }

                if (element.classList.contains('del')) {
                    this.del()
                }

                if (element.classList.contains('equal')) {
                    this.result()
                }
            })
        },

        pressEnter() {
            this.display.addEventListener('keypress', (e) => {

                if (e.key === 'Enter') {
                    this.result()
                }
            })
        },

        clearDisplay() {
            this.display.value = ''
        },

        del() {
            this.display.value = this.display.value.slice(0, -1)
        },

        result() {
            const expression = this.display.value
            
        

            try {
                const result = eval(expression)

                if (!result && result !== 0) {
                    alert('conta inválida')
                }

                if (result === Infinity) {
                    result = 0
                }

                this.display.value = result

            } catch (e) {
                alert('conta inválida')
                return
            }

        }

    }

    

}


const calculator = createCalculator()
calculator.start()