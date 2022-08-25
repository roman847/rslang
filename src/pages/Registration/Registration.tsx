import React, { useState } from 'react'
import { Box, Link, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import Logo from 'pages/main/components/Logo'
import Input from 'components/Input'
import { UserErrorMessage, TypesInput } from 'core/variables/constants'
import ProjectButton from 'components/ProjectButton'
import { createUser } from 'services/users'
import styles from './style'

const Registration = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const navigate = useNavigate()

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === TypesInput.email) {
      setEmail(e.target.value)
    } else if (e.target.name === TypesInput.name) {
      setName(e.target.value)
    } else {
      setPassword(e.target.value)
    }
  }
  const clickHandler = (e?: React.MouseEvent) => {
    e?.preventDefault()
    if (password.length < 8) {
      setErrorMessage(UserErrorMessage.incorrectPasswordLength)
      return
    } else if (!email) {
      setErrorMessage(UserErrorMessage.emptyEmail)
    } else if (!name) {
      setErrorMessage(UserErrorMessage.emptyName)
    } else {
      createUser({ password, name, email }).then((data) => {
        if (Array.isArray(data)) {
          navigate('/')
        } else {
          console.log(data)
          setErrorMessage(UserErrorMessage.unexpectedError)
        }
      })
    }
  }
  return (
    <Box sx={styles.wrapper}>
      <Logo />
      <Box>
        <Box sx={styles.header}>
          <Typography sx={styles.header__text} variant='h1'>
            Зарегистрируйся
            <Box sx={styles.logo__container}>
              <Typography sx={styles.header__text}>в&nbsp;</Typography>
              <Typography sx={styles.logo_orange}>RS</Typography>
              <Typography sx={styles.logo}>LANG</Typography>
            </Box>
          </Typography>
        </Box>
        <Box sx={styles.content}>
          <form>
            <Box sx={styles.inputsContainer}>
              <Input
                name={TypesInput.email}
                action={changeHandler}
                id='email'
                placeholder='email*'
                type={TypesInput.email}
              />
              <Input
                name={TypesInput.name}
                action={changeHandler}
                id='name'
                placeholder='имя*'
                type={TypesInput.name}
              />
              <Input
                name={TypesInput.password}
                action={changeHandler}
                id='password'
                placeholder='пароль*'
                type={TypesInput.password}
              />
            </Box>
            <Typography sx={styles.errorMessage}>{errorMessage}</Typography>
            <Box sx={styles.button}>
              <ProjectButton type='submit' width='100%' action={clickHandler}>
                Зарегистрироваться
              </ProjectButton>
            </Box>
          </form>
          <Box sx={styles.reg}>
            <Typography sx={styles.reg__text}>Уже есть аккаунт?&nbsp;</Typography>
            <Link sx={styles.reg__link}>Войти</Link>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Registration
