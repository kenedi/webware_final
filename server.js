var http = require('http')
  , fs   = require('fs')
  , url  = require('url')
  , port = 8080

var server = http.createServer (function (req, res) {
  var uri = url.parse(req.url)

 switch( uri.pathname ) {
    case '/':
      sendFile(res, 'home.html', 'text/html', 200)
      break
    case '/home.html':
      sendFile(res, 'home.html', 'text/html', 200)
      break
    case '/about.html':
      sendFile(res, 'about.html', 'text/html', 200)
      break
    case '/bootstrap.css':
      sendFile(res, '/css/bootstrap.css', 'text/css', 200)
      break
    case '/README.md':
      sendFile(res, 'README.md', 'text/markdown', 200)
      break
    case 'bootstrap.min.js':
      sendFile(res, 'js/bootstrap.min.js', 'text/javascript', 200)
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