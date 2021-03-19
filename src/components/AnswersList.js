import React from "react"
import {Answer} from "./index"

const AnsersList  = (props) => {

  console.log("AnswersList",props)
  return (
    <div className="c-grid__answer">
      {props.answers.map((answer, index) => {
        return <Answer content={answer.content} key={index.toString()} nextId={answer.nextId} select={props.select}/>
      })}
    </div>
  )
}

export default AnsersList