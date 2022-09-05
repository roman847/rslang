import React from 'react'
import clsx from 'clsx'
import { Typography } from '@mui/material'
import { AboutTeam, DevelopersNames, AvatarsTeam, TeamGithub } from 'core/variables/constants'
import Card from '../Card'
import style from './team.module.scss'

const Team = () => {
  return (
    <div className={clsx('container', style.container__team)}>
      <Typography variant='h2' className='title__accent'>
        О команде
      </Typography>
      <div className={style.container__cards}>
        <Card
          role={'Team lead'}
          name={DevelopersNames.Roman}
          teamAvatar={AvatarsTeam.Roman}
          text={AboutTeam.Roman}
          githubLink={TeamGithub.Roman}
        />
        <div style={{ marginLeft: 'auto' }}>
          <Card
            role={'Developer'}
            name={DevelopersNames.Alibek}
            teamAvatar={AvatarsTeam.Alibek}
            text={AboutTeam.Alibek}
            githubLink={TeamGithub.Alibek}
          />
        </div>
        <Card
          role={'Developer'}
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
