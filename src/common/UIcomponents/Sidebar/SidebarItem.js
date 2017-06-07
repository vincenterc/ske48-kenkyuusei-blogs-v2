import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { getPageInfo } from '../../libClient/index'
import { pathnamePrefix } from '../../config/index'

let SidebarItem = ({ memberId, memberJpnName, clearPageInfoDispatch, getPageInfoDispatch }) => {
  const clickHandler = async () => {
    clearPageInfoDispatch()
    const pageInfo = await getPageInfo(memberId)
    getPageInfoDispatch(pageInfo)
  }

  return <li><Link to={`${pathnamePrefix}/${memberId}`} onClick={clickHandler}>{memberJpnName}</Link></li>
}

const mapDispatchToProps = dispatch => ({
  clearPageInfoDispatch: () => dispatch({ type: 'CLEAR_PAGEINFO' }),
  getPageInfoDispatch: pageInfo => dispatch({ type: 'GET_PAGEINFO', pageInfo }),
})

SidebarItem = connect(undefined, mapDispatchToProps)(SidebarItem)

export default SidebarItem
