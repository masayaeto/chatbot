import { TextField } from '@material-ui/core'
import React from 'react'

const TextInput = (props) => {
  return (
    <TextField 
      fullWidth={true} 
      label={props.label}
      margin={"dense"}
      multiline={props.multiline}
      row={props.rows}
      value={props.value}
      type={props.type}
      onChange={props.onChange}
    />
  )
}

export default TextInput