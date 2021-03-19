import React from "react"
import Button from '@material-ui/core/Button';


const Answer = (props) => {
  //const classes = useStyles();
  console.log("Answer",props)
  return(
    <Button variant="contained" onClick={() => props.select(props.content, props.nextId)}>
      {props.content}
    </Button>
  )
}

export default Answer