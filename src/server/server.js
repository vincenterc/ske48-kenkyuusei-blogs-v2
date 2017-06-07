import Koa from 'koa'
import serve from 'koa-static'

import router from '../common/routers/index'
import { port, mongodbUri } from '../common/config/index'
import { updateBlogsAtIntervals } from '../common/libServer/index'

// Create a koa app
const app = new Koa()

// Static file serving middleware
app.use(serve('dist'))
app.use(serve('public'))

// Router
app.use(router.routes())
   .use(router.allowedMethods())

// start a server
app.listen(port, (err) => {
  if (err) return console.log(err)
  return console.log(`Listening on port: ${port}`)
})

// Update blogs of ske48 kenkyuusei
const interval = 5 * 60 // seconds
updateBlogsAtIntervals(mongodbUri, interval)
