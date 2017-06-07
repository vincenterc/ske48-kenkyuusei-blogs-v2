import fetch from 'node-fetch'
import cheerio from 'cheerio'

/**
 * Get the post title
 *
 * getPostTitle: (postId: string) => postTitle: string
 */
const getPostTitle = async (postId) => {
  const postUrl = `http://www2.ske48.co.jp/blog_pc/detail/id:${postId}/`
  const body = await fetch(postUrl).then(res => res.text())
  const $ = cheerio.load(body, { decodeEntities: false })
  const postTitle = $('div.unitBlog > div > h3').html()
  return postTitle
}

export default getPostTitle
