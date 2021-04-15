import React from 'react'

const Todo=({id,complete,text})=>{
    const onCompleteTodo=(id,complete)=>{}
    const onDeleteTodo=(id)=>{}
    return(
        <div key={id}>
            <button
                className={`todo-item ${complete ? "complete" : "incomplete"}`}
                tabIndex="0"
                onClick={()=>onCompleteTodo(id, complete)}
            >
                {text}
            </button>
            <button
                onClick={()=>onDeleteTodo(id)}
            >
                remove
            </button>

        </div>
    )
}
export default Todo;