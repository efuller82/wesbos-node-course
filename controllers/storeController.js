exports.myMiddleware = (req, res, next) => {
    req.name = 'Eric';
    if (req.name === 'Eric') {
        throw Error('That is a stupid name');
    }
    next();
};
exports.homePage = (req, res) => {
    console.log(req.name);
    res.render('index');
};