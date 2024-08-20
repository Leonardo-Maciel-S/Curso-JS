const { concat } = require('core-js/actual/array')
const mongoose = require('mongoose')
const validator = require('validator')

const contactSchema = new mongoose.Schema({
    name: { type: String, required: true},
    lastName: { type: String, required: false, default: ''},
    email: { type: String, required: false, default: ''},
    number: { type: String, required: false, default: ''},
    createIn: { type: Date, default: Date.now}
})

const contactModel = new mongoose.model('contacts', contactSchema)

class Contact {
    constructor(body) {
        this.body = body
        this.errors = []
        this.contact = null
        this.listContact = []
    }

    // Statics functions

    static async getAllContact() {
        const contacts = await contactModel.find().sort({ createIn: -1})
        return contacts
    }

    static async getId(id) {
        if (typeof id !== "string") return
        
        const user = await contactModel.findById(id)            
        return user
    }

    static async deleteById(id) {
        const response = await contactModel.deleteOne({ _id: id})
        return response
    }

    // Async functions

    async edit(id) {
        if(typeof id !== 'string') return


        this.validation()

        if(this.errors.length > 0) return

        this.contact = await contactModel.findOneAndUpdate( { _id: id }, this.body, { new: true })
    }                            

    async register() {

        this.validation()

        if(this.errors.length > 0) return

        this.contact = await contactModel.create(this.body)
    }

    
    validation() {
        this.cleanUp()

        if(this.body.email && !validator.isEmail(this.body.email)) {
            this.errors.push('E-mail inválido');
        }

        if(!this.body.name) this.errors.push('Nome é um campo obrigatório')
        if(!this.body.email && !this.body.number) this.errors.push('Pelo menos um contato precisa ser enviado: e-mail ou telefone.')
    }


    cleanUp() {
        for(let key in this.body) {
            if (typeof this.body[key] !== 'string') {
                this.body[key] = '';
            }
        }

        this.body = {
            name: this.body.name,
            lastName: this.body.lastName,
            email: this.body.email,
            number: this.body.number
        };
    }



}

module.exports = Contact