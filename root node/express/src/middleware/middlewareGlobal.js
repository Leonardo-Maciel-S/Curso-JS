exports.checkCsrf = (err, req, res, next) => {
    if (err && 'EBADCSRFTOKEN' === err.code) {
        return res.send("BAB CSRF")
    }
}


exports.injectCsrf = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken()
    next()
}





