import React from 'react'
import style from './team.module.scss'
import { Container } from '@mui/material'
import {
  AboutTeam,
  DevelopersNames,
  AvatarsTeam,
  TeamGithub,
} from '../../../../core/variables/constants'
import clsx from 'clsx'
import Card from '../Card'

const Team = () => {
  return (
    <div className={clsx('container', style.container__team)}>
      <h2>О команде</h2>
      <div className={style.container__cards}>
        <Card
          name={DevelopersNames.Roman}
          teamAvatar={AvatarsTeam.Roman}
          text={AboutTeam.Roman}
          githubLink={TeamGithub.Roman}
        />
        <div style={{ marginLeft: 'auto' }}>
          <Card
            name={DevelopersNames.Alibek}
            teamAvatar={AvatarsTeam.Alibek}
            text={AboutTeam.Alibek}
            githubLink={TeamGithub.Alibek}
          />
        </div>
        <Card
          name={DevelopersNames.Andrey}
          teamAvatar={AvatarsTeam.Andrey}
          text={AboutTeam.Andrey}
          githubLink={TeamGithub.Andrey}
        />
      </div>
    </div>
  )
}

export default Team
