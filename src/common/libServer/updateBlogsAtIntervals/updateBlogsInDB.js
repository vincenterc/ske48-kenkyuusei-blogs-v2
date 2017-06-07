import getLatestPostIdFromDB from './getLatestPostIdFromDB'
import getNextPostId from './getNextPostId'
import getPostDate from './getPostDate'
import getPostTitle from './getPostTitle'
import insertPostToDB from './insertPostToDB'
import postDistributorDB from './postDistributorDB'
import writers from './writers.json'

/**
 * Update blogs in the database
 *
 * updateBlogsInDB: (mongodbUri: string) => void
 */
const updateBlogsInDB = async (mongodbUri) => {
  const collection = 'blogs'

  Object.keys(writers).forEach(async (group) => {
    // get the latest post id in the DB
    let postId = await getLatestPostIdFromDB(mongodbUri, collection, group)

    // do the loop util the postId is undefined
    while (postId) {
      // get the next post id in the official website
      postId = await getNextPostId(postId)

      // if the next post id exits, insert and distuibute it in the DB
      if (postId) {
        // get the post date
        const postDate = await getPostDate(postId)
        // get the post title
        const postTitle = await getPostTitle(postId)
        const post = { id: postId, date: postDate, title: postTitle }
        console.log(`The updated post: {id: ${post.id}, date: ${post.date}, title: ${post.title}}`)
        // insert post in the DB
        await insertPostToDB(mongodbUri, collection, group, '', 0, post)
        //  distribute post
        await postDistributorDB(mongodbUri, collection, group, post)
      }
    }
  })
}

export default updateBlogsInDB
