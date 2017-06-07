import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { getPostInfo, backToTop } from '../../libClient/index'
import { Icon } from '../common/index'
import { pathnamePrefix } from '../../config/index'

let PostNavButton = ({ text, charCode, memberId, postId, getPostInfoDispatch }) => {
  const clickHandler = async (memberId, postId) => {
    const postInfo = await getPostInfo(memberId, postId)
    getPostInfoDispatch(postInfo)
    backToTop()
  }

  return (
    <li>
      <Link
        to={`${pathnamePrefix}/${memberId}/${postId}`}
        onClick={() => clickHandler(memberId, postId)}
      >
        <Icon charCode={charCode} />
      </Link>
    </li>
  )
}

const mapDispatchToProps = dispatch => ({
  getPostInfoDispatch: postInfo => dispatch({ type: 'GET_POSTINFO', postInfo }),
})

PostNavButton = connect(undefined, mapDispatchToProps)(PostNavButton)

export default PostNavButton
