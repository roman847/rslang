import React from 'react'
import style from './team.module.scss'
import {
  AboutTeam,
  DevelopersNames,
  AvatarsTeam,
  TeamGithub,
} from '../../../../core/variables/constants'
import clsx from 'clsx'
import Card from '../Card'
import { Typography } from '@mui/material'

const Team = () => {
  return (
    <div className={clsx('container', style.container__team)}>
      <Typography variant='h2' className='title__accent'>
        О команде
      </Typography>
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
