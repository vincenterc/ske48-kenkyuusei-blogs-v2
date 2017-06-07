import React from 'react'

import MemberItem from './MemberItem'

const MemberList = ({ generation, members }) => {
  if (!members) return null
  return (
    <div className="memberList">
      <div className="memberList-title">
        <h3>{generation}期生</h3>
      </div>
      <div className="memberList-content">
        <ul>
          {
            members.map(member => (
              <MemberItem
                key={member.id}
                memberId={member.id}
                memberJpnName={member.jpnName}
                memberEngName={member.engName}
              />
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default MemberList
