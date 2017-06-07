import Router from 'koa-router'
import ske48KenkyuuseiBlogs from './ske48KenkyuuseiBlogs'

const router = new Router()

router.use(ske48KenkyuuseiBlogs.routes())

export default router
