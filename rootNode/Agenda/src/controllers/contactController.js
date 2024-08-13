exports.homeContact = (req, res) => {
    if (!req.session.user) res.redirect('login')

    return res.render('homeContact')
}

exports.newContact = (req, res) => {
    console.log(req.body)
    res.send(req.body)
}