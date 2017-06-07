import React from 'react'

import { BackToButton } from '../common/index'
import PostNavButton from './PostNavButton'

const PostNav = ({ postInfo }) => {
  const { memberId, memberName, nextPostId, prevPostId } = postInfo

  return (
    <nav>
      <ul>
        {
          nextPostId
          ? <PostNavButton
               text="Next Post"
               charCode={'&#9668;'}
               memberId={memberId}
               postId={nextPostId}
            />
          : ''
        }
        <BackToButton />
        <BackToButton memberId={memberId} memberName={memberName} />
        {
          prevPostId
          ? <PostNavButton
               text="Prev Post"
               charCode={'&#9658;'}
               memberId={memberId}
               postId={prevPostId}
            />
          : ''
        }
      </ul>
    </nav>
  )
}

export default PostNav
