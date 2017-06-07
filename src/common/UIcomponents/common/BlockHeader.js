import React from 'react'

const BlockHeader = ({ className = 'blogs-main-header', text }) => (
  <div className={className}>
    <h4>{text}</h4>
  </div>
)

export default BlockHeader
