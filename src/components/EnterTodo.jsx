import React, {useState} from 'react'
import { TodoForm } from './TodoForm'
import { Todo } from './Todo'

export const EnterTodo = () => {
    const [todos, setTodos] = useState ([])
        
    const addTodo = todo => {
        setTodos([...todos, 
            {id: crypto.randomUUID, 
              task: todo, completed: false, isEditing: false}]
          ) 
    }


    
  return (
    <div className='AddTodo'>
        <TodoForm addTodo={addTodo} />
        {todos.map((todo, index) => (
          <Todo task={todo} key={index} />
        )
        )}
    </div>
  )
}
