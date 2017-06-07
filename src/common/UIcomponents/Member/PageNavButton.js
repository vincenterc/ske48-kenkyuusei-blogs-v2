import React from 'react'
import { connect } from 'react-redux'

import { getPageInfo, backToTop } from '../../libClient/index'
import { Icon } from '../common/index'

let PageNavButton = ({ page, memberId, charCode, getPageInfoDispatch }) => {
  const clickHandler = async (memberId, page) => {
    const pageInfo = await getPageInfo(memberId, page)
    getPageInfoDispatch(pageInfo)
    backToTop()
  }

  return (
    <li>
      <a
        href="#page"
        onClick={(e) => {
          e.preventDefault()
          clickHandler(memberId, page)
        }}
      >
        <Icon charCode={charCode} />
      </a>
    </li>
  )
}

const mapDispatchToProps = dispatch => ({
  getPageInfoDispatch: pageInfo => dispatch({ type: 'GET_PAGEINFO', pageInfo }),
})

PageNavButton = connect(undefined, mapDispatchToProps)(PageNavButton)


export default PageNavButton
