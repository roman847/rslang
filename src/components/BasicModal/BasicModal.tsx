import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { IPropsModal } from 'core/interfaces/propsInterfaces'

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

const BasicModal = ({ open, handleOpening }: IPropsModal) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleOpening}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
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
