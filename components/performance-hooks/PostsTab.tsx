import React, { memo } from 'react'
import SlowPost from './SlowPost'

const PostsTab = memo(() => {
  // Log once. The actual slowdown is inside SlowPost.
  console.log('[ARTIFICIALLY SLOW] Rendering 500 <SlowPost />')

  let items = []
  for (let i = 0; i < 500; i++) {
    items.push(<SlowPost key={i} index={i} />)
  }
  return <ul>{items}</ul>
})

export default PostsTab
