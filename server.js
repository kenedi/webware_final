var http = require('http')
  , fs   = require('fs')
  , url  = require('url')
  , port = 8080

var server = http.createServer (function (req, res) {
  var uri = url.parse(req.url)

 switch( uri.pathname ) {
    case '/':
      sendFile(res, 'public/index.html', 'text/html', 200)
      break
    case '/index.html':
      sendFile(res, 'public/index.html', 'text/html', 200)
      break
    case '/css/style.css':
      sendFile(res, 'public/style.css', 'text/css', 200)
      break
    case '/README.md':
      sendFile(res, 'README.md', 'text/markdown', 200)
      break
    case '/js/scripts.js':
      sendFile(res, 'public/scripts.js', 'text/javascript', 200)
      break
    default:
      res.end("404 not found")
  }

})

server.listen(process.env.PORT || port)
console.log('listening on 8080')

function sendFile(res, filename, type, code) {
  fs.readFile(filename, function(error, content) {
    res.writeHead(code, {'Content-type': type})
    res.end(content, 'utf-8')
  })
}