/**
 * Get members
 *
 * type Member = {
 *   id: string,
 *   jpnName: string,
 *   engName: string,
 * }
 *
 * getMember: () => Array<{ generation: number, members: Array<Member> }>
 */
import { apiURL } from '../config'

const getMembers = async () => {
  const getMembersURL = `${apiURL}/getMembers`
  const members = await fetch(getMembersURL).then(res => res.json())
  return members
}

export default getMembers
