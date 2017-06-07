import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { backToTop } from '../../libClient/index'
import { pathnamePrefix } from '../../config/index'

let PostItem = ({ memberId, postId, postDate, postTitle, clearPostInfoDispatch }) => {
  const clickHandler = () => {
    clearPostInfoDispatch()
    backToTop()
  }

  return (
    <li>
      <div className="post-title">
        <Link to={`${pathnamePrefix}/${memberId}/${postId}`} onClick={clickHandler}>
          {postTitle}<time dateTime="YYYY-MM-DD">{postDate}</time>
        </Link>
      </div>
    </li>
  )
}

const mapDispatchToProps = dispatch => ({
  clearPostInfoDispatch: () => dispatch({ type: 'CLEAR_POSTINFO' }),
})

PostItem = connect(undefined, mapDispatchToProps)(PostItem)

export default PostItem
