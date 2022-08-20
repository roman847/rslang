import React from 'react'
import { text } from 'stream/consumers'
import {
  aboutTeam,
  developersNames,
  avatarsTeam,
  teamGithub,
} from '../../../../core/variables/constants'

import Card from '../Card'

function Team() {
  return (
    <div className='container'>
      <h2>О команде</h2>

      <Card
        name={developersNames.Roman}
        avatar={avatarsTeam.Roman}
        text={aboutTeam.Roman}
        github={teamGithub.Roman}
      />
    </div>
  )
}

export default Team
