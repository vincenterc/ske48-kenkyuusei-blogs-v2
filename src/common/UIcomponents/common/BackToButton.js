import React from 'react'
import { Link } from 'react-router-dom'

import { backToTop } from '../../libClient/index'
import { pathnamePrefix } from '../../config/index'

const BackToButton = ({ memberId, memberName }) => {
  const clickHandler = () => backToTop()

  return (
    <li>
      <Link to={memberId ? `${pathnamePrefix}/${memberId}` : `${pathnamePrefix}`} onClick={clickHandler}>
        {memberName || 'HOME'}
      </Link>
    </li>
  )
}

export default BackToButton
