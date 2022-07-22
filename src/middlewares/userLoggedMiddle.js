const User = require('../models/User')
function userLoggedMiddle(req, res, next){
    res.locals.isLogged = false;
    
    let emailInCookie = req.cookies.cookieEmailUser;
    let userFronCookie = User.findByField('userEmail', emailInCookie);

    if (userFronCookie){
        req.session.userLogged =  userFronCookie;
    }

    if (req.session.userLogged) {
		res.locals.isLogged = true;
		res.locals.userLogged = req.session.userLogged;
	}


    next();
}

module.exports = userLoggedMiddle;