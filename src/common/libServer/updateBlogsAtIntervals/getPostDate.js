import fetch from 'node-fetch'
import cheerio from 'cheerio'

/**
 * Get the post date
 *
 * getPostDate: (postId: string) => postDate:string
 */
const getPostDate = async (postId) => {
  const postUrl = `http://www2.ske48.co.jp/blog_pc/detail/id:${postId}/`
  const body = await fetch(postUrl).then(res => res.text())
  const $ = cheerio.load(body, { decodeEntities: false })
  const postDate = $('div.unitBlog > h3').html()
  return postDate
}

export default getPostDate
