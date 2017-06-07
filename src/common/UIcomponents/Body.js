import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { getMembers } from '../libClient/index'
import Sidebar from './Sidebar/index'
import Home from './Home/index'
import Member from './Member/index'
import Post from './Post/index'
import { pathnamePrefix } from '../config/index'

class Body extends React.Component {
  async componentDidMount() {
    const members = await getMembers()
    this.props.getMembersDispatch(members)
  }

  render() {
    return (
      <div className="row">
        <div className="hidden-xs col-sm-3 blogs-sidebar">
          <Sidebar />
        </div>
        <div className="col-sm-9 blogs-main">
          <Route exact path={`${pathnamePrefix}`} component={Home} />
          <Route exact path={`${pathnamePrefix}/:memberId`} component={Member} />
          <Route path={`${pathnamePrefix}/:memberId/:postId`} component={Post} />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getMembersDispatch: members => dispatch({ type: 'GET_MEMBERS', members }),
})

Body = withRouter(connect(undefined, mapDispatchToProps)(Body))

export default Body
