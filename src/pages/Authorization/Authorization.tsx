import React, { useState } from 'react'
import { Box, Link, Typography } from '@mui/material'
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import Logo from 'components/Logo'
import Input from 'components/Input'
import { LogoSize, Pages, TypesInput, UserErrorMessage } from 'core/variables/constants'
import ProjectButton from 'components/ProjectButton'
import { signIn } from 'services/signIn'
import isServerError from 'core/functions/isServerError'
import { saveUserID } from 'services'
import styles from './styles'

const Authorization = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const navigate = useNavigate()

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === TypesInput.email) {
      setEmail(e.target.value)
    } else {
      setPassword(e.target.value)
    }
  }
  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault()
    if (password.length < 8) {
      setErrorMessage(UserErrorMessage.incorrectPasswordLength)
      return
    } else {
      setErrorMessage('')

      const data = await signIn({ password, email })
      if (typeof data === 'string') {
        setErrorMessage(data)
      } else if (isServerError(data)) {
        setErrorMessage(UserErrorMessage.unexpectedError)
      } else {
        saveUserID(data)
        navigate(Pages.main)
      }
    }
  }
  return (
    <Box sx={styles.page}>
      <Box sx={styles.wrapper}>
        <Link component={RouterLink} to={Pages.main} sx={styles.link}>
          <Logo />
        </Link>
        <Box>
          <Box sx={styles.header}>
            <Typography sx={styles.header__text} variant='h1'>
              Войти в свой аккаунт
              <Box sx={styles.logo__container}>
                <Typography sx={styles.header__text}>в&nbsp;</Typography>
                <Logo size={LogoSize.big} />
              </Box>
            </Typography>
          </Box>
          <Box sx={styles.content}>
            <Box component='form' onSubmit={submitHandler}>
              <Box sx={styles.inputsContainer}>
                <Input
                  name={TypesInput.email}
                  action={changeHandler}
                  id='email'
                  placeholder='email*'
                  type={TypesInput.email}
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
                <ProjectButton type='submit' width='100%'>
                  Войти
                </ProjectButton>
              </Box>
            </Box>
            <Box sx={styles.sign}>
              <Typography sx={styles.sign__text}>Нет аккаунта?&nbsp;</Typography>
              <Link component={RouterLink} to={Pages.reg} sx={styles.sign__link}>
                Зарегистрироваться
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Authorization
