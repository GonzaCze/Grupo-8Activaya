function authMiddleware(req, res, next) {
	if (!req.session.userLogged) {
		return res.redirect('/users/login'); /// a la vista login o register a eleccion
	}
	next();
}

module.exports = authMiddleware;