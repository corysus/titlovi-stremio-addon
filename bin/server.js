#!/usr/bin/env node

const { serveHTTP, publishToCentral } = require("stremio-addon-sdk")
const addonInterface = require("../addon")

serveHTTP(addonInterface, { port: process.env.PORT || 3005, static: '/static/' })
// publishToCentral("https://your-url.ext/mainfest.json")