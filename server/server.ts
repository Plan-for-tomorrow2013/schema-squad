import express from 'express'
import * as Path from 'node:path'

import menuRoutes from './routes/menu.ts'
import customMenuRoutes from './routes/customMenu.ts'

const server = express()

server.use(express.json())

server.use('/api/v1/menu', menuRoutes)

server.use('/api/v1/customMenu', customMenuRoutes)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
