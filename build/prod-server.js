const path         = require('path');
const finalhandler = require('finalhandler')
const http         = require('http')
const serveStatic  = require('serve-static')

const PORT = 8081;
const staticDir = path.resolve(__dirname, '../dist');

const serve = serveStatic(staticDir, {'index': 'index.html'});

const app = http.createServer((req, res) => {
  serve(req, res, finalhandler(req, res));
});

app.listen(PORT, () => {
  console.log(`Distribution folder: ${staticDir}`);
  console.log(`Production server running on ${PORT}...`);
});
