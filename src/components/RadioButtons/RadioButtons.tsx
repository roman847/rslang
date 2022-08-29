import * as React from 'react'
import { styled } from '@mui/material/styles'
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup'
import FormControlLabel, { FormControlLabelProps } from '@mui/material/FormControlLabel'
import Radio from '@mui/material/Radio'
import { Color, languageLevels } from 'core/variables/constants'
import pxToRem from 'core/functions/pxToRem'
import styles from './styles'

interface StyledFormControlLabelProps extends FormControlLabelProps {
  checked: boolean
}

const StyledFormControlLabel = styled((props: StyledFormControlLabelProps) => (
  <FormControlLabel {...props} />
))(({ checked }) => ({
  '.MuiFormControlLabel-label': {
    background: checked ? Color.activePrimaryButton : 'none',
    border: `1px solid ${Color.primary}`,
    width: pxToRem(63),
    height: pxToRem(63),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: pxToRem(63),
  },
}))

function MyFormControlLabel(props: FormControlLabelProps) {
  const radioGroup = useRadioGroup()

  let checked = false

  if (radioGroup) {
    checked = radioGroup.value === props.value
  }

  return <StyledFormControlLabel checked={checked} {...props} />
}

export default function RadioButtons() {
  return (
    <RadioGroup sx={styles.container} name='use-radio-group' defaultValue='first' row>
      {languageLevels.map((level) => (
        <MyFormControlLabel
          key={level}
          value={level}
          label={level}
          control={<Radio sx={styles.radio} />}
        />
      ))}
    </RadioGroup>
  )
}
