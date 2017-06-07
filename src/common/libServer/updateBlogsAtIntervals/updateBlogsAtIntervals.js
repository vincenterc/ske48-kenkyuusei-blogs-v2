import updateBlogsInDB from './updateBlogsInDB'

/**
 * Update blogs
 *
 * updateBlogs: (mongodbUri: string) => void
 */
const updateBlogs = (mongodbUri) => {
  const time = new Date()
  console.log(time.toLocaleString())
  updateBlogsInDB(mongodbUri)
}

/**
 * Update blogs at intervals
 *
 * updateBlogsAtIntervals: (mongodbUri: string, interval: string) => void
 */
const updateBlogsAtIntervals = (mongodbUri, interval) => {
  updateBlogs(mongodbUri)
  setInterval(() => {
    updateBlogs(mongodbUri)
  }, interval * 1000)
}

export default updateBlogsAtIntervals
