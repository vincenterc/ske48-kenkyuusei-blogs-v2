import React from 'react'
import { connect } from 'react-redux'

import { getPostInfo } from '../../libClient/index'
import { BlockHeader, BlockBody } from '../common/index'
import PostNav from './PostNav'

import '../../styles/post.css'

class Post extends React.Component {
  async componentDidMount() {
    const memberId = this.props.match.params.memberId
    const postId = this.props.match.params.postId
    const postInfo = await getPostInfo(memberId, postId)
    this.props.getPostInfoDispatch(postInfo)
  }

  render() {
    const postInfo = this.props.postInfo

    return (
      <div>
        <BlockHeader text="POST" />
        <BlockBody>
          <div className="post-content" dangerouslySetInnerHTML={{__html: postInfo.postContent}} />
        </BlockBody>
        <PostNav postInfo={postInfo} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  postInfo: state.postInfo,
})

const mapDispatchToProps = dispatch => ({
  getPostInfoDispatch: postInfo => dispatch({ type: 'GET_POSTINFO', postInfo }),
})

Post = connect(mapStateToProps, mapDispatchToProps)(Post)

export default Post
