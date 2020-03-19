const path = require('path')
const express = require('express')
const serveStatic = require('serve-static')
const fs = require('fs')
const dotenv = require('dotenv')
const dotenvExpand = require('dotenv-expand')
const proxy = require('http-proxy-middleware')


const envFile = path.resolve(__dirname, '..', '.env')
const envFile_local = path.resolve(__dirname, '..', '.env.local')

if (fs.existsSync(envFile_local)) {
  const buf = Buffer.from(fs.readFileSync(envFile_local))
  dotenvExpand({parsed: dotenv.parse(buf)})
}
if (fs.existsSync(envFile)) {
  const buf = Buffer.from(fs.readFileSync(envFile))
  dotenvExpand({parsed: dotenv.parse(buf)})
}


runServer({
  port: process.env.PORT || 8000,
  staticDir: path.resolve(__dirname, '../dist')
})


/**
 * @param {} config
 * @param {string} config.staticDir (required)
 */
function runServer (config) {
  return new Promise(async (resolve, reject) => {
    if (!config.staticDir) {
      return reject('Static directory path is undefined.')
    }

    console.info('Starting server...')

    const vueAppConfig = require('../vue.config.js')

    const app = express()

    // cached pages
    const PAGES_TEMPLATES = {}
    const filePath = path.resolve(config.staticDir, 'index.html')
    PAGES_TEMPLATES['index'] = fs.readFileSync(filePath, 'utf-8')

    // logger
    app.use((req, res, next) => { console.debug('->', req.url); next() })

    for (let key in vueAppConfig.devServer.proxy) {
      const route = key.replace(/\^/, '')
      app.use(proxy(route, vueAppConfig.devServer.proxy[key]));
    }

    app.use(process.env.VUE_APP_BASE_URL, serveStatic(config.staticDir, {'index': 'index.html'}))

    // if (process.env.VUE_APP_BASE_URL !== '/') {
    //   app.use('/', (req, res) => {
    //     res.writeHead(302, {Location: process.env.VUE_APP_BASE_URL})
    //     res.end()
    //   })
    // }

    app.use(async (req, res) => {
      let pageName = req.url.replace(/^\//, '').split('/')[0] || 'index'

      if (!PAGES_TEMPLATES.hasOwnProperty(pageName)) {
        pageName = 'index'
      }

      res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
      res.end(PAGES_TEMPLATES[pageName])
    })


    app.listen(config.port, (err) => {
      if (err) return reject(err)

      console.info(`Production server running on ${config.port}...`)

      resolve()
    })
  })
}
