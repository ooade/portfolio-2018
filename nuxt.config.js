const fs = require('fs')
const head = JSON.parse(fs.readFileSync('./config/head.json'))
const manifest = JSON.parse(fs.readFileSync('./config/manifest.json'))

module.exports = {
	css: ['./main.css'],
	head,
	manifest,
	modules: ['@nuxtjs/workbox', '@nuxtjs/manifest']
}
