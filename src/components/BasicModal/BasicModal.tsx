import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { IPropsModal } from 'core/interfaces/propsInterfaces'
import style from './style'

const BasicModal = ({ open, handleOpening }: IPropsModal) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleOpening}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style.modal}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Поздравляем, вы успешно зарегистрировались!
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            Теперь авторизуйтесь на сайте по логину и паролю указанному ранее
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}

export default BasicModal
