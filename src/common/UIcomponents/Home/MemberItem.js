import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { pathnamePrefix } from '../../config/index'

let MemberItem = ({ memberId, memberJpnName, memberEngName, clearPageInfoDispatch }) => {
  const clickHandler = async () => {
    clearPageInfoDispatch()
  }

  return (
    <li>
      <div className="member">
        <Link to={`${pathnamePrefix}/${memberId}`} onClick={clickHandler}>
          {memberJpnName} <span>{memberEngName}</span>
        </Link>
      </div>
    </li>
  )
}

const mapDispatchToProps = dispatch => ({
  clearPageInfoDispatch: () => dispatch({ type: 'CLEAR_PAGEINFO' }),
})

MemberItem = connect(undefined, mapDispatchToProps)(MemberItem)

export default MemberItem
