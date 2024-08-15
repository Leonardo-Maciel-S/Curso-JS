const Contact = require('../models/contactModel')

exports.homePage = (req, res) => {
    return res.render('index');
}

exports.getContacts = (req, res, next) => {
    try {
        const contact = new Contact()

        contact.getAllContact()
    } catch(e) {
        console.log(e)
    }

    next()
}

