const path = require('path')

const PORT = 8000
const DEV_HOST = 'vmep.com'

module.exports = {
	pages: {
		home: {
			entry: 'src/home.js',
			template: 'public/index.html',
			filename: 'home.html',
			title: 'Home Page',
			chunks: ['chunk-vendors', 'chunk-common', 'home']
		},
		form: {
			entry: 'src/form.js',
			template: 'public/index.html',
			filename: 'form.html',
			title: 'Form Page',
			chunks: ['chunk-vendors', 'chunk-common', 'form']
		}
	},

	devServer: {
		port: PORT,
		historyApiFallback: {
			rewrites: [
				{
					from: /^\/home\/?.*/,
					to: path.posix.join('/', 'home.html')
				},
				{
					from: /^\/form\/?.*/,
					to: path.posix.join('/', 'form.html')
				}
			]
		},
		allowedHosts: [DEV_HOST]
	}
}
