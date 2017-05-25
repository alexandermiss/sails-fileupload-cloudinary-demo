/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var cloudinary = require('cloudinary').v2;

module.exports = {

	upload: function ( req, res, next){

		cloudinary.config({
		  cloud_name: 'your_cloud_name',
		  api_key: 'your_api_key',
		  api_secret: 'your_api_secret'
		});

		req.file('avatar').upload({
			dirname: sails.config.appPath + '/assets/images'
		},function(err, files){

			var file = files[0];
			var _result = {};

			cloudinary.uploader.upload(file.fd)
				.then(function(result){
					_result = result;
					return _result;
				}).finally(function(){
					// User.update({id: req.session.user.id}, {photo: _result.secure_url})
					// 	.exec(function(err, user){
					// 		if(err) return res.json({err: err});
					// 		return res.json(_result);
					// 	});
					res.json(_result);
			});

		});
	}

};
