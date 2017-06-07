import React from 'react'
import { connect } from 'react-redux'

import { getPageInfo } from '../../libClient/index'
import { BlockHeader, BlockBody } from '../common/index'
import PostList from './PostList'
import PageNav from './PageNav'

import '../../styles/member.css'

class Member extends React.Component {
  async componentDidMount() {
    let pageInfo = this.props.pageInfo

    if (JSON.stringify(pageInfo) === '{}') {
      const memberId = this.props.match.params.memberId
      pageInfo = await getPageInfo(memberId)
      this.props.getPageInfoDispatch(pageInfo)
    }
  }

  render() {
    const memberId = this.props.match.params.memberId
    const pageInfo = this.props.pageInfo
    const postList = pageInfo.postList

    return (
      <div>
        <BlockHeader text="MEMBER" />
        <BlockBody>
          <PostList memberId={memberId} postList={postList} />
        </BlockBody>
        <PageNav pageInfo={pageInfo} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  pageInfo: state.pageInfo,
})

const mapDispatchToProps = dispatch => ({
  getPageInfoDispatch: pageInfo => dispatch({ type: 'GET_PAGEINFO', pageInfo }),
})

Member = connect(mapStateToProps, mapDispatchToProps)(Member)

export default Member
