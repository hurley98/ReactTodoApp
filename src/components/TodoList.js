import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
    return (
        <div>
            {props.todos.map((todo) => {
                return  <Todo 
                        key={todo.id}
                        id={todo.id}
                        checkTodo={props.checkTodo}
                        deleteTodo={props.deleteTodo}
                        title={todo.title}
                        isComplete={todo.isComplete}
                    />
            })}
        </div>
    )
}

export default TodoList;