import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faCheck } from '@fortawesome/free-solid-svg-icons'


export const Todo = ({task}) => {
  return (
    <div className= 'Todo'>
        <label>{task.task}
        <label>  </label>
        </label>
        <FontAwesomeIcon className='check-icon' icon={faCheck} beat size="lg" style={{color: "#ffffff",}} />

    </div>
  )
}

