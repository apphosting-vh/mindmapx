#!/usr/bin/env node
/**
 * Zero-dependency static file server for the built Mindx app.
 *
 *   node scripts/serve.mjs [port] [root]
 *
 * The app is a modern ES-module bundle, so it has to be served over HTTP —
 * browsers refuse to load module scripts from `file://`. This server exists so
 * `serve.cmd` can start the app with one double-click, offline, without npx.
 */
import http from 'node:http'
import fs from 'node:fs'
import path from 'node:path'

const PORT = Number(process.argv[2]) || 8080
const ROOT = path.resolve(process.argv[3] || '.')

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.webmanifest': 'application/manifest+json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain; charset=utf-8',
  '.map': 'application/json; charset=utf-8',
}

function send(res, status, body, type = 'text/plain; charset=utf-8') {
  res.writeHead(status, { 'content-type': type, 'cache-control': 'no-cache' })
  res.end(body)
}

const server = http.createServer((req, res) => {
  let pathname
  try {
    pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname)
  } catch {
    send(res, 400, 'Bad request')
    return
  }

  const relative = pathname.replace(/^\/+/, '')
  let filePath = path.join(ROOT, relative)
  if (!filePath.startsWith(ROOT)) {
    send(res, 403, 'Forbidden')
    return
  }

  try {
    if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
      filePath = path.join(filePath, 'index.html')
    }
    if (!fs.existsSync(filePath)) {
      // Single-page app: fall back to index.html for unknown paths.
      const fallback = path.join(ROOT, 'index.html')
      if (fs.existsSync(fallback)) {
        send(res, 200, fs.readFileSync(fallback), MIME['.html'])
        return
      }
      send(res, 404, 'Not found')
      return
    }

    const type = MIME[path.extname(filePath).toLowerCase()] || 'application/octet-stream'
    res.writeHead(200, { 'content-type': type, 'cache-control': 'no-cache' })
    fs.createReadStream(filePath).pipe(res)
  } catch (error) {
    send(res, 500, `Server error: ${error.message}`)
  }
})

server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.error(`\n  Port ${PORT} is already in use.`)
    console.error(`  Open http://localhost:${PORT}/ or run: node scripts/serve.mjs 8081\n`)
    process.exit(1)
  }
  throw error
})

server.listen(PORT, '127.0.0.1', () => {
  const url = `http://localhost:${PORT}/`
  console.log('')
  console.log('  Mindx is running at  ' + url)
  console.log('  Serving:             ' + ROOT)
  console.log('  Press Ctrl+C to stop.')
  console.log('')
  openBrowser(url)
})

/** Opens the default browser; harmless if it fails or is disabled. */
function openBrowser(url) {
  if (process.env.MINDX_NO_OPEN) return
  const command =
    process.platform === 'win32'
      ? { file: 'cmd', args: ['/c', 'start', '', url] }
      : process.platform === 'darwin'
        ? { file: 'open', args: [url] }
        : { file: 'xdg-open', args: [url] }
  import('node:child_process')
    .then(({ spawn }) => {
      const child = spawn(command.file, command.args, {
        detached: true,
        stdio: 'ignore',
        windowsHide: true,
      })
      child.on('error', () => {})
      child.unref()
    })
    .catch(() => {})
}

