const createError = require('http-errors');
const phonesMock = require('../assets/data/phones-mock');

module.exports.list = (req, res) => {
	res.json(phonesMock);
};

module.exports.findById = (req, res, next) => {
	const id = req.params.id;
	const phone = phonesMock.find(p => p.id === id);
	if (phone) {
		res.json(phone);
	} else {
		next(createError(404, 'Phone not found'));
	}
};
