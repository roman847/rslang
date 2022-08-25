import React, { useState } from 'react'
import { Box, Link, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import Logo from 'pages/main/components/Logo'
import Input from 'components/Input'
import { errorMessageText, TypesInput } from 'core/variables/constants'
import ProjectButton from 'components/ProjectButton'
import { signIn } from '../../services/signIn'
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
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault()
    if (password.length < 8) {
      setErrorMessage(errorMessageText.passwordLengthIncorrect)
      return
    } else {
      setErrorMessage('')
      signIn({ password, email }).then((data) => {
        if (!Object.hasOwn(data, 'errorMessage')) {
          navigate('/')
        } else {
          console.log(errorMessage)
          setErrorMessage(errorMessageText.emailOrPasswordIncorrect)
        }
      })
    }
  }
  return (
    <Box sx={styles.wrapper}>
      <Link href='/' sx={styles.logo}>
        <Logo />
      </Link>
      <Box>
        <Box sx={styles.header}>
          <Typography sx={styles.header__text} variant='h1'>
            Войти в свой аккаунт
            <Box sx={styles.logo__container}>
              <Typography sx={styles.header__text}>в&nbsp;</Typography>
              <Typography sx={styles.header__text_extraOrange}>RS</Typography>
              <Typography sx={styles.header__text_extra}>LANG</Typography>
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
            <Link sx={styles.sign__link} href='reg'>
              Зарегистрироваться
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Authorization
