const Contact = require('../models/contactModel')

exports.homePage = (req, res) => {
    return res.render('index');
}

exports.getContacts = async (req, res, next) => {
    try {
        const contact = new Contact()

        const listContact = await contact.getAllContact()
        
        res.locals.listContact = contact.listContact
    
    } catch(e) {
        console.log(e)
    }

    next()

}

