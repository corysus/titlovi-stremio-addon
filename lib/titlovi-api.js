const config = require('./config')
const https = require('https')

/**
 * Get subtitles
 * /GET search/imdb/type/lang?
 *
 * @param {string} imdb
 * @param {string} type
 */
const getSubtitle = async (imdb, type) => {
    const langs = Object.keys(config.LANG_MAP)
    const res = await get(config.TITLOVI_API_ENDPOINT, `/search/${imdb}/${type}/${langs.join('|')}`)

    if (res.status === 200) {
        const remap = res.data.map(sub => {
            const lang = config.LANG_MAP[sub.lang]
            return {
                id: sub.id,
                url: sub.link_srt,
                lang: `${lang}${config.SUBS_SUFIX}`,
            };
        });
        return remap
    } else {
        return []
    }
}

/**
 * HTTPS GET Wrapper
 *
 * @param {string} host
 * @param {string} query
 */
const get = (host, query) => {
    const options = {
        host: host,
        path: query,
        port: 443,
        method: 'GET'
    }

    return new Promise((resolve, reject) => {
        const getReq = https.request(options, (res) => {
            res.on('data', (ret) => resolve(JSON.parse(ret)))
        })

        getReq.end()
        getReq.on('error', (err) => reject(err))
    })
}

module.exports = { getSubtitle }