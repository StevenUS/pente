const {http} = require('http');
const {fs} = require('fs');
const {networkInterfaces} = require('os');

const hostName = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/html' });
  fs.createReadStream('index.html').pipe(res);
})

server.listen(process.env.PORT || port, hostName);

// display local network ip and port
for (const interfaces of Object.values(networkInterfaces())) {
  for (const i of interfaces) {
    if (i.family === 'IPv4' && !i.internal) {
       console.log(`http://${i.address}:${port}`);
    }
  }
}

