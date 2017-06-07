/**
 * PostInfo reducer
 *
 * type PostInfo: {
 *   memberId: string,
 *   memberName: string,
 *   postContent: string,
 *   nextPostId: string,
 *   prevPostId: string,
 * }
 *
 * action: {
 *   type: 'GET_POSTLIST',
 *   postInfo?: PostInfo,
 * }
 *
 * state: PostInfo
 */
const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_POSTINFO':
      return action.postInfo
    case 'CLEAR_POSTINFO':
      return {}
    default:
      return state
  }
}

export default reducer
