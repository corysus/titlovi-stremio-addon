module.exports = {
    LOGO_URL: 'http://127.0.0.1:3005/static/logo.png',

    // Subtitle server endpoint
    TITLOVI_API_ENDPOINT: 'titlovi-server.herokuapp.com',

    // ISO 639-2 language map for all available subtitle languages from titlovi.com
    // wiki: https://en.wikipedia.org/wiki/List_of_ISO_639-2_codes
    LANG_MAP: {
        "Bosanski": "bos",
        "Hrvatski": "hrv",
        "Srpski": "srb",
        "English": "eng",
        "Makedonski": "mkd",
        "Slovenski": "slo"
    },
    SUBS_SUFIX: ' [titlovi.com]' // leave empty to use ISO 639-2
}