/**
 * Get pageInfo
 *
 * type Post = {
 *   id: string,
 *   date: string,
 *   title: string,
 * }
 *
 * type PageInfo: {
 *   memberId: string,
 *   postList: Array<Post>,
 *   currentPage: number,
 *   prevPage: number,
 *   nextPage: number,
 *   firstPage: number,
 *   lastPage: number,
 *   numOfPages: number,
 * }
 *
 * getPageInfo: (memberId: string, page?: number) => pageInfo: PageInfo
 */
import { apiURL } from '../config'

const getPageInfo = async (memberId, page = 1) => {
  const getPageInfoURL = `${apiURL}/getPageInfo/${memberId}/${page}`
  const pageInfo = await fetch(getPageInfoURL).then(res => res.json())
  return pageInfo
}

export default getPageInfo
