exports.home = ( (req, res ) => {
    res.render('home/index');
});

exports.login = ( (req,res) => {
    res.render('auth/login');
});

exports.register = ( (req, res) => {
    res.render('auth/register');
});