module.exports.homePage = (req, res) => {
    res.send(`
        <form action="/" method="POST">
            Nome do cliente: <input type="text" name="nome" id="">
            Idade: <input type="text" name="idade" id="">
            <button>Enviar</button>
        </form>
    `
    );
}