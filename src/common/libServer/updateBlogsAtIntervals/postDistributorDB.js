import getPostContent from '../getPostContent'
import insertPostToDB from './insertPostToDB'
import writers from './writers.json'

/**
 * Distribute post
 *
 * type Post = {
 *   id: string,
 *   date: string,
 *   title: string,
 * }
 *
 * distributor: (mongodbUri: string,
 *               collection: string,
 *               group: 'ken7' | 'ken81' | 'ken82' | 'ken83',
 *               post: Post) => void
 */
const distributor = async (mongodbUri, collection, group, post) => {
  let postTitle = post.title
  for (let i = 0; i < writers[group].length; i++) {
    for (let j = 0; j < writers[group][i].filter.length; j++) {
      // Use postContent to distribute if member is 'yahagi_yukina' or 'fukai_negai',
      // otherwise, use postTitle
      if (writers[group][i].writer === 'yahagi_yukina'
          || writers[group][i].writer === 'fukai_negai') {
        const postContent = await getPostContent(post.id)
        if (postContent.indexOf(writers[group][i].filter[j]) !== -1) {
          // if there is member matched, insert the post,
          // set postTitle = '' and break the loop
          await insertPostToDB(mongodbUri, collection, writers[group][i].writer,
                               writers[group][i].name, writers[group][i].generation, post)
          postTitle = ''
          break
        }
      } else if (postTitle.indexOf(writers[group][i].filter[j]) !== -1) {
        // if there is member matched, insert the post,
        // set postTitle = '' and break the loop
        await insertPostToDB(mongodbUri, collection, writers[group][i].writer,
                             writers[group][i].name, writers[group][i].generation, post)
        postTitle = ''
        break
      }
    }
    // if postTitle is empty, break the loop
    if (!postTitle) {
      break
    }
  }
  // if there is no member matched, insert the post to the 'other'
  if (postTitle) {
    await insertPostToDB(mongodbUri, collection, 'other', '', 0, post)
  }
}

export default distributor
