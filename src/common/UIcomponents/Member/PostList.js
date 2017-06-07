import React from 'react'

import PostItem from './PostItem'

const PostList = ({ memberId, postList }) => {
  if (!postList) return null
  return (
    <div className="postList">
      <ul>
        {
          postList.map(post => (
            <PostItem
              key={post.id}
              memberId={memberId}
              postId={post.id}
              postDate={post.date}
              postTitle={post.title}
            />
          ))
        }
      </ul>
    </div>
  )
}

export default PostList
