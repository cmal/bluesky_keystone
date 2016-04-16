var keystone = require('keystone');
var Klass = keystone.list('Klass');

exports = module.exports = function(req, res) {
    
    var view = new keystone.View(req, res);
    var locals = res.locals;
    // Set locals
    locals.section = 'klass';
    locals.filters = {
	klass: req.params.klass
    };
    
    view.query('klasses', Klass.model.find().sort('-scheduledDate'));

    // Render the view
    view.render('klass');
    
};
