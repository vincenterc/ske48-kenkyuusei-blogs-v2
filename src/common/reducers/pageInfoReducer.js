/**
 * PageInfo reducer
 *
 * type Post = {
 *   id: string,
 *   date: string,
 *   title: string,
 * }
 *
 * action: {
 *   type: string,
 *   pageInfo?: {
 *     memberId: string,
 *     postList: Array<Post>,
 *     currentPage: number,
 *     prevPage: number,
 *     nextPage: number,
 *     firstPage: number,
 *     lastPage: number,
 *     numOfPages: number,
 *   }
 * }
 *
 * state: {
 *   memberId: string,
 *   postList: Array<Post>,
 *   currentPage: number,
 *   prevPage: number,
 *   nextPage: number,
 *   firstPage: number,
 *   lastPage: number,
 *   numOfPages: number,
 * }
 */
const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_PAGEINFO':
      return action.pageInfo
    case 'CLEAR_PAGEINFO':
      return {}
    default:
      return state
  }
}

export default reducer
