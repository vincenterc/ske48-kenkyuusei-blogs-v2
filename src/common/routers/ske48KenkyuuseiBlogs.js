import Router from 'koa-router'

import {
  getPostInfoHandler,
  getPageInfoHandler,
  getMembersHandler,
  homePageHandler,
} from '../controllers/index'

// Create a router with prefix "/ske48_kenkyuusei_blogs"
const router = new Router({
  prefix: '/ske48_kenkyuusei_blogs',
})

// getPostInfo
router.get('/getPostInfo/:memberId/:postId', getPostInfoHandler)

// getPostList
router.get('/getPageInfo/:memberId/:currentPage', getPageInfoHandler)

// getMembers
router.get('/getMembers', getMembersHandler)

// Home page
router.get('*', homePageHandler)

export default router
