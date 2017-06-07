import React from 'react'
import { connect } from 'react-redux'

import { BlockHeader, BlockBody } from '../common/index'
import MemberList from './MemberList'

import '../../styles/home.css'

let Home = ({ members }) => (
  <div>
    <BlockHeader text="HOME" />
    <BlockBody>
      {
        members.map(value => (
          <MemberList
            key={value.generation}
            generation={value.generation}
            members={value.members}
          />
        ))
      }
    </BlockBody>
  </div>
)

const mapStateToProps = state => ({
  members: state.members,
})

Home = connect(mapStateToProps, undefined)(Home)

export default Home
