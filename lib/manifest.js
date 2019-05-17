const config = require('./config')
const pkg = require('../package')

module.exports = {
	"id": "net.corysus",
    "name": "Titlovi.com",
    "version": pkg.version,
	"description": pkg.description,
	"logo": config.LOGO_URL,
	"catalogs": [],
	"resources": ["subtitles"],
	"types": ["movie", "series"],
	"idPrefixes": ["tt"]
}