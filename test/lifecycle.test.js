var sails = require('sails');

before(function(done) {

	// Increase the Mocha timeout so that Sails has enough time to lift.
	this.timeout(1000000);

	var rc;
	try {
		rc = require('rc');
	} catch (e0) {
		try {
			rc = require('sails/node_modules/rc');
		} catch (e1) {
			console.error('Could not find dependency: `rc`.');
			console.error('Your `.sailsrc` file(s) will be ignored.');
			console.error('To resolve this, run:');
			console.error('npm install rc --save');
			rc = function() {
				return {};
			};
		}
	}

	// Start server
	sails.lift(rc('sails'), function(err, server) {
		if (err) return done(err);
		// here you can load fixtures, etc.
		done(err, sails);
	});

});

after(function(done) {
	// here you can clear fixtures, etc.
	sails.lower(done);
});