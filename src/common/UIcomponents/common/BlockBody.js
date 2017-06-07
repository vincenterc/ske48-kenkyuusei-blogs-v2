import React from 'react'

const BlockBody = ({ className = 'blogs-main-body', children }) => (
  <div className={className}>
    {children}
  </div>
)

export default BlockBody
