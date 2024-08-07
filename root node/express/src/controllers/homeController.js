exports.homePage = (req, res) => {
    res.render('index');
}

exports.homePost = (req, res) => {
    res.send(`Você me enviou ${req.body.nome} e ${req.body.idade}`);
}