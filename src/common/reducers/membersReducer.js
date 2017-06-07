/**
 * Members reducer
 *
 * type Member = {
 *   id: string,
 *   jpnName: string,
 *   engName: string,
 * }
 *
 * action: {
 *   type: 'GET_MEMBERS',
 *   members: Array<{
 *     generation: number,
 *     members: Array<Member>,
 *   }>
 * }
 *
 * state: Array<{
 *   generation: number,
 *   members: Array<Member>,
 * }>
 */
const reducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_MEMBERS':
      return action.members
    default:
      return state
  }
}

export default reducer
