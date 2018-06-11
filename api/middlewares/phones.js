const createError = require('http-errors');

module.exports.checkValidId = (req, res, next) => {
	const id = Number(req.params.id);
	if (id) {
		next();
	} else {
		next(createError(400, `Invalid phone id: ${id}`));
	}
};
