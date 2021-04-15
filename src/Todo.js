import React from 'react'
import { firestore } from './firebase'
import './todo.css'

const Todo=({id,complete,text,createdAt})=>{
    const todosRef=firestore.collection(`suggestme`)
    const onCompleteTodo=(id,complete)=>{
    todosRef.doc(id).set({complete: !complete},{merge: true})};
    const onDeleteTodo=(id)=>{todosRef.doc(id).delete()}
    return(
        <div key={id}>
            <button
                className={`todo-item ${complete ? "complete" : "incomplete"}`}
                tabIndex="0"
                onClick={()=>onCompleteTodo(id, complete)}
            >
                {text}
            </button>&nbsp;&nbsp;
            {new Date(createdAt.seconds * 1000).toLocaleDateString("en-US")}
            <button
                className="remove"
                onClick={()=>onDeleteTodo(id)}
            >
                x
            </button>

        </div>
    )
}
export default Todo;