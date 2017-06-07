import React from 'react'

import SidebarItem from './SidebarItem'

const SidebarList = ({ generation, members }) => {
  if (!members) {
    return null
  } else {
    return (
      <div className="col">
        <h5>{generation}期生</h5>
        <ul className="list-unstyled">
          {
            members.map(member => (
              <SidebarItem
                key={member.id}
                memberId={member.id}
                memberJpnName={member.jpnName}
              />
            ))
          }
        </ul>
      </div>
    )
  }
}

export default SidebarList
