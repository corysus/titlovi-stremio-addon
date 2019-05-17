# Titlovi.com Stremio Subtitle Addon

This addon will provide subtitles for movies & series from portal titlovi.com.
Subtitle languages that supported by titlovi.com is Bosnian, Croatian, Serbian, Macedonian, Slovenian and English language.

In stremio, subtitles will be displayed like LANG [titlovi.com] exp. "eng [titlovi.com]".
I use this approach because I want to separate subtitles from opensubtitles and 'titlovi.com'.

#### Notice
If you want to have all languages together than in config.SUBS_SUFIX remove string " [titlovi.com]"

## How to use

Clone this repo. and use NPM to install req. libs.

```bash
# Install req. libs
npm i

# To start addon on local server
npm start

# Open stremio addons and copy/paste url http://127.0.0.1:3005/manifest.json
```