import fetch from 'node-fetch'
import cheerio from 'cheerio'

/**
 * Get the next post Id in the offical website
 *
 * getNextPostId: (postId: string) => nextPostId: string
 */
const getNextPostId = async (postId) => {
  const postUrl = `http://www2.ske48.co.jp/blog_pc/detail/id:${postId}/`
  const body = await fetch(postUrl).then(res => res.text())
  const $ = cheerio.load(body, { decodeEntities: false })
  // Tag 'a.prev' actually points to the next post
  const nextPostId = $('a.prev').attr('href').slice(19, -1)
  return nextPostId
}

export default getNextPostId
