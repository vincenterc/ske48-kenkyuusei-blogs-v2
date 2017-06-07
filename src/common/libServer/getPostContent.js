import fetch from 'node-fetch'
import cheerio from 'cheerio'

/**
 * Get post content
 *
 * getPostContent (postId: string) => postContent: string
 */
const getPostContent = async (postId) => {
  const postUrl = `http://www2.ske48.co.jp/blog/detail/id:${postId}/`
  const body = await fetch(postUrl).then(res => res.text())
  const $ = cheerio.load(body, { decodeEntities: false })
  const postContent = $('div#blog_detail').html()

  return postContent
}

export default getPostContent
