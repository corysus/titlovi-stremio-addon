const { addonBuilder } = require("stremio-addon-sdk")
const manifest = require('./lib/manifest')
const subtitles = require('./lib/titlovi-api')

const builder = new addonBuilder(manifest)

builder.defineSubtitlesHandler(({ type, id }) => {

	console.log("Request for subtitles: " + type + " " + id)

	return subtitles.getSubtitle(id, type).then(subs => {
		if (subs.length > 0) {
			console.log('Subtitle loaded.')
			return Promise.resolve({ subtitles: subs })
		} else {
			console.log('Subtitle not found.')
			return Promise.resolve({ subtitles: [] })
		}
	})

})

module.exports = builder.getInterface()