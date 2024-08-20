const Contact = require('../models/contactModel')

exports.homePage = async (req, res) => {
    try {
        const listContact = await Contact.getAllContact()
        return res.render('index', { listContact });
    }catch(e) {
        console.log(e)
        res.render('404')
    }
    
}


