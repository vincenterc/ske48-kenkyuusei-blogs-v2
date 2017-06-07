/**
 * Get postInfo
 *
 * type PostInfo: {
 *   memberId: string,
 *   memberName: string,
 *   postContent: string,
 *   nextPostId: string,
 *   prevPostId: string,
 * }
 *
 * getPostInfo: (memberId: string, postId: string) => postInfo: PostInfo
 */
import { apiURL } from '../config'

const getPostInfo = async (memberId, postId) => {
  const getPostInfoURL = `${apiURL}/getPostInfo/${memberId}/${postId}`
  const postInfo = await fetch(getPostInfoURL).then(res => res.json())
  return postInfo
}

export default getPostInfo
