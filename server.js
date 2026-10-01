const http = require('http');

const host = process.env.HOST || '127.0.0.1';
const port = Number(process.env.PORT) || 8765;

const server = http.createServer((request, response) => {
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    response.writeHead(405, { Allow: 'GET, HEAD' }).end('Method not allowed');
    return;
  }

  let pathname;
  try {
    pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
  } catch {
    response.writeHead(400).end('Bad request');
    return;
  }

  if (pathname !== '/' && pathname !== '/index.html') {
    response.writeHead(404, { 'Cache-Control': 'no-store' }).end('Not found');
    return;
  }

  response.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8',
    'Cache-Control': 'no-store',
    'X-Content-Type-Options': 'nosniff',
  });
  if (request.method === 'HEAD') {
    response.end();
    return;
  }

  response.end(require('fs').readFileSync(require('path').join(__dirname, 'index.html')));
});

server.listen(port, host, () => {
  const displayHost = host === '0.0.0.0' ? '<computer-local-IP>' : host;
  console.log(`Metro Rush ready at http://${displayHost}:${port}`);
});
