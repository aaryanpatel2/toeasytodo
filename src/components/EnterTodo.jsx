import React, {useState} from 'react'
import { TodoForm } from './TodoForm'
import { Todo } from './Todo'
import { v4 as uuidv4 } from 'uuid';
uuidv4();

export const EnterTodo = () => {
    const [todos, setTodos] = useState ([])
        
    const addTodo = todo => {
        setTodos([...todos, 
            {id: uuidv4() , 
              task: todo, completed: false, isEditing: false}]
          ) 
    }

    function checkTodo(id) {
      return (
        setTodos(todos.filter(todo => todo.id !== id))
      )
    }

  
  return (
    <div className='AddTodo'>
        <TodoForm addTodo={addTodo} />
        {todos.map((todo, index) => (
          <Todo task={todo} key={index} 
          checkTodo={checkTodo}
          />
        )
        )}
    </div>
  )
}
