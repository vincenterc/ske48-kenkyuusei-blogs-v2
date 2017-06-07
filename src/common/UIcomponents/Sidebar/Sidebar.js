import React from 'react'
import { connect } from 'react-redux'

import { BlockHeader, BlockBody } from '../common/index'
import SidebarList from './SidebarList'

class Sidebar extends React.Component {
  render() {
    const members = this.props.members

    return (
      <div className="sidebar-module">
        <BlockHeader className="sidebar-module-title" text="Member List"/>
        <BlockBody className="sidebar-module-content">
          {
            members.map(value => (
              <SidebarList
                key={value.generation}
                generation={value.generation}
                members={value.members}
              />
            ))
          }
        </BlockBody>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  members: state.members,
})

Sidebar = connect(mapStateToProps, undefined)(Sidebar)

export default Sidebar
