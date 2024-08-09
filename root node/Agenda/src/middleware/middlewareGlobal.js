
exports.checkCsrf = (err, req, res, next) => {
    if (err) {
        return res.render('404')
    }

    next()
}


exports.injectCsrf = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken()
    next()
}

exports.errors = (req, res, next) => {
    res.locals.errors = req.flash('errors')
    next()
}

exports.success = (req, res, next) => {
    res.locals.success = req.flash('success')
    next()
}






