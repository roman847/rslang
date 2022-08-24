import React from 'react'
import { Box, Link, Typography } from '@mui/material'
import Logo from 'pages/main/components/Logo'
import Input from 'components/Input'
import { TypesInput } from 'core/variables/constants'
import ProjectButton from 'components/ProjectButton'
import styles from './Authorization.styles'

const Authorization = () => {
  return (
    <Box sx={styles.wrapper}>
      <Logo />
      <Box>
        <Box sx={styles.header}>
          <Typography sx={styles.header__text} variant='h1'>
            Войти в свой аккаунт
            <Box sx={styles.logo__container}>
              <Typography sx={styles.header__text}>в&nbsp;</Typography>
              <Typography sx={styles.logo_orange}>RS</Typography>
              <Typography sx={styles.logo}>LANG</Typography>
            </Box>
          </Typography>
        </Box>
        <Box sx={styles.inputsContainer}>
          <Input id='email' placeholder='email*' type={TypesInput.email} />
          <Input id='password' placeholder='пароль*' type={TypesInput.password} />
        </Box>
        <Box sx={styles.button}>
          <ProjectButton width={470}>Войти</ProjectButton>
        </Box>
        <Box sx={styles.sign}>
          <Typography sx={styles.sign__text}>Нет аккаунта?&nbsp;</Typography>
          <Link sx={styles.sign__link}>Зарегистрироваться</Link>
        </Box>
      </Box>
    </Box>
  )
}

export default Authorization
