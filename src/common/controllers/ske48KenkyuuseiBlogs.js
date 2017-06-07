import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router'

import {
  renderFullPage,
  pagination,
  getPostContent,
  getMembersDB,
  getPostListInfoDB,
} from '../libServer/index'
import App from '../UIcomponents/App'
import reducer from '../reducers/index'

const getMembersHandler = async (ctx) => {
  const members7 = await getMembersDB(7)
  const members8 = await getMembersDB(8)
  ctx.body = JSON.stringify([
    { generation: 7, members: members7 },
    { generation: 8, members: members8 },
  ])
}

const getPageInfoHandler = async (ctx) => {
  const memberId = ctx.params.memberId

  // set currentPage
  const currentPage = +ctx.params.currentPage

  const postListInfo = await getPostListInfoDB(memberId)

  // pagination
  const numOfData = postListInfo.postList.length
  const numPerPage = 20 // the number of items per page
  const page = pagination(numOfData, numPerPage, currentPage)
  const postList = postListInfo.postList.slice(page.startIndex, page.endIndex)

  ctx.body = JSON.stringify({
    memberId,
    postList,
    currentPage: page.currentPage,
    prevPage: page.prevPage,
    nextPage: page.nextPage,
    firstPage: page.firstPage,
    lastPage: page.lastPage,
    numOfPages: page.numOfPages,
  })
}

const getPostInfoHandler = async (ctx) => {
  const postId = ctx.params.postId
  const memberId = ctx.params.memberId

  // postListInfo: { writer: string, name: string
  //                 postList: Array<{id: sting, date: string, title: string }>
  const postListInfo = await getPostListInfoDB(memberId)
  const postContent = await getPostContent(postId)

  // Get next/previous postId
  const postIds = postListInfo.postList.map(post => post.id)
  const currentPostIdIndex = postIds.indexOf(postId)
  const nextPostId = postIds[currentPostIdIndex - 1]
  const prevPostId = postIds[currentPostIdIndex + 1]

  ctx.body = JSON.stringify({
    memberId: postListInfo.writer,
    memberName: postListInfo.name,
    postContent,
    nextPostId,
    prevPostId,
  })
}

const homePageHandler = (ctx) => {
  const initialState = {
    members: [],
    pageInfo: {},
    postInfo: {},
  }
  const store = createStore(
    reducer,
    initialState,
  )
  const html = ReactDOMServer.renderToString(
    <StaticRouter context={{}} location={ctx.url} >
      <Provider store={store}>
        <App />
      </Provider>
    </StaticRouter>)
  const preloadedState = store.getState()
  ctx.status = 200
  ctx.body = renderFullPage(html, preloadedState)
}

export {
  getMembersHandler,
  getPageInfoHandler,
  getPostInfoHandler,
  homePageHandler,
}
