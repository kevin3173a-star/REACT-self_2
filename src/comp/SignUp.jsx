import React, { useState } from 'react'
import TextField from '@mui/material/TextField';

function SignUp({label, save}) {
    let[text,setText]=useState("")
  return (
        <TextField id="outlined-basic" 
            label={label} 
            variant="standard" //outlined, filled, standard
            value={text}
            onChange={(e)=>{
                setText(e.target.value)
                save(label,e.target.value)
            }}
        />
  )
}

export default SignUp