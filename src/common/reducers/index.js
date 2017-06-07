import { combineReducers } from 'redux'

import members from './membersReducer'
import pageInfo from './pageInfoReducer'
import postInfo from './postInfoReducer'

export default combineReducers({
  members,
  pageInfo,
  postInfo,
})
