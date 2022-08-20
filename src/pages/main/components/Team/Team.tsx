import React from 'react'
import style from './team.module.scss'
import { Container } from '@mui/material'
import {
  aboutTeam,
  developersNames,
  avatarsTeam,
  teamGithub,
} from '../../../../core/variables/constants'
import clsx from 'clsx'
import Card from '../Card'

function Team() {
  return (
    <div className={clsx('container', style.container__team)}>
      <h2>О команде</h2>
      <div className={style.container__cards}>
        <Card
          name={developersNames.Roman}
          avatar={avatarsTeam.Roman}
          text={aboutTeam.Roman}
          github={teamGithub.Roman}
        />
        <div style={{ marginLeft: 'auto' }}>
          <Card
            name={developersNames.Alibek}
            avatar={avatarsTeam.Alibek}
            text={aboutTeam.Alibek}
            github={teamGithub.Alibek}
          />
        </div>
        <Card
          name={developersNames.Andrey}
          avatar={avatarsTeam.Andrey}
          text={aboutTeam.Andrey}
          github={teamGithub.Andrey}
        />
      </div>
    </div>
  )
}

export default Team
