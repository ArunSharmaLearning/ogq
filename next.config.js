const path = require('path')

module.exports = {
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	},
	images: {
		domains: ['ogqbackend.pythonanywhere.com', 'administration.ogq.org'], // Add your image source domain here
	},

}