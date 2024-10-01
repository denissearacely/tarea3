import TodoList from "./TodoList";
import { Container } from '@mantine/core';
import { useState } from 'react';
import TodoForm from "./TodoForm";

function TodoApp(){
const [tareas, settareas] =useState([]);
    const agregar =(tarea)=>{
        settareas((prevtareas)=>{
            const newtareas ={id: prevtareas.length, name: tarea, completed: false};
            return [...prevtareas, newtareas];
        });
    };
    const  eliminar = (id) =>{
        settareas((prevtareas)=> prevtareas.filter((tarea)=>tarea.id !== id));
    };
    const taweno = (id) =>{
        settareas((prevtareas)=> prevtareas.map ((tarea)=> tarea.id === id ? { ...tarea, completed: !tarea.completed } : tarea) );
    };
    return(<Container> 
        <TodoForm agregar={agregar} />
        <TodoList tareas={tareas} eliminar={eliminar} taweno={taweno}/>
    </Container>);


};
export default TodoApp;