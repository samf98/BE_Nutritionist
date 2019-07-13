var assert = require('assert');


let name = 'Cesar';
let password = 'root';
let lastname = 'Figueroa';
let username = 'cesarabelfigueroa@gmail.com';

describe('User', function() {
	context('#create()', function() {

		it('should create and find the user', function(done) {

			let userPromise = new Promise(async (resolve, reject) => {
				let userController = require('../../../api/controllers/UsersController.js');
				let dataset = await userController._create({
					name: name,
					password: password,
					lastname: lastname,
					username: username
				});

				resolve(dataset);
			}).then(user => {
				assert.equal(user.name, name)
				done();
			});
		});
	});
});