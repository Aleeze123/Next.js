import { log } from 'console'
import React from 'react'

const Props = ({name="Nisha"}:{name?:string}) => {
    
    
  return (
    <div>
        <h3>{`Greetings ${name}`}</h3>
    </div>
  )
}

export default Props