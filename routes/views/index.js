var keystone = require('keystone');

exports = module.exports = (req, res) => {
	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'homepage';

	// Render the view
	view.render('index');
};
