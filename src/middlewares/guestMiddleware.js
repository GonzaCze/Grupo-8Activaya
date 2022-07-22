function guestMiddleware(req, res, next) {
	if (req.session.userLogged) {
		return res.redirect('/users/userLogged');
	}
	next();
}

module.exports = guestMiddleware;