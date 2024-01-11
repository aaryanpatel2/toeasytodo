import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'


export const Todo = ({task, checkTodo}) => {
  return (
    <div className= 'Todo'>
        <label>{task.task}
        <label>  </label>
        </label>
        <FontAwesomeIcon className='check-icon' icon={faCheck} beat size="lg" style={{color: "#ffffff",}} 
        onClick={() => checkTodo(task.id)}
        />

    </div>
  )
}

