import React, { useState } from 'react'
import { firestore } from './firebase'
import Todo from './Todo'
import firebase from "firebase";
import {useCollectionData} from "react-firebase-hooks/firestore"
import './todo.css'

const Suggest=()=>{
    const [todo,setTodo]=useState("")
    const todosRef=firestore.collection(`suggestme/`)
    const [todos]=useCollectionData(todosRef, {idField: "id"});

   const addSuggestion=(event)=>{
        event.preventDefault();
        setTodo("");
        todosRef.add({
            text: todo,
            complete: false,
            // createdAt: firebase.firestore.FieldValue.serverTimestamp()
            createdAt: firebase.firestore.Timestamp.fromDate(new Date())
        });
   };
    return(
        <div>
            <main>
                <h3>I want to Learn more things. Please suggest.</h3>
                <hr/><br/>
                <h5>Right now I have done all level 0 projects and learnt react hooks.</h5>
                <h5>If it is a good learning opportunity in TMinus then I would like to join.
                </h5>
                <br/>
                <form onSubmit={addSuggestion}>
                    <input 
                        className="input"
                        placeholder="Suggest improvements?"
                        required
                        value={todo}
                        onChange={(e)=>setTodo(e.target.value)}
                    />
                    <button className="suggest" type="submit">Suggest</button>
                </form>
                {todos && todos.map((todo)=> <Todo key={todo.id} {...todo}/>)}
            </main>
        </div>
    )
}
export default Suggest;