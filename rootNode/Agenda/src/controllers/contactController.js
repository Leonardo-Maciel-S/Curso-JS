const Contact = require('../models/contactModel')

exports.homeContact = (req, res) => {
    return res.render('homeContact', {
        contact: {}
    })
}

exports.register = async (req, res) => {
    try {
        const contact = new Contact(req.body)
        await contact.register()

        if (contact.errors.length > 0 ) {
            req.flash('errors', contact.errors)
            req.session.save(() => res.redirect('/contact'))
            return
        }

        req.flash('success', 'Contato registrado com sucesso!')
        res.redirect(`/contact/${contact.contact._id}`)
    } catch(e) {
        return res.render('404')    
    }

}

exports.editContact = async (req, res, next) => {
    if (!req.params.id) return res.render('404')

    try {
        const contact = await Contact.getId(req.params.id)

        if(!contact) return res.render('404')
    
        res.render('homeContact', { contact })
    } catch(e) {
        res.render('404')
    }
}

exports.edit = async (req, res, next) => {
    try {
        const contact = new Contact(req.body)

        await contact.edit(req.params.id)

        if (contact.errors.length > 0 ) {
            req.flash('errors', contact.errors)
            req.session.save(() => res.redirect('/contact'))
            return
        }

        req.flash('success', 'Contato editado com sucesso!')
        res.redirect(`/contact/${contact.contact._id}`)


    } catch(e) {
        res.render('404')
    }

}

exports.delete = async (req, res) => {
    if (!req.params.id) return res.render('404')

    try {
        const contact = await Contact.deleteById(req.params.id)

        if(!contact) return res.render('404')

        req.flash('success', 'Contato exluido com sucesso')
        req.session.save(() => {
            res.redirect('back')
        })    

        
    } catch(e) {
        res.render('404')
    }
}