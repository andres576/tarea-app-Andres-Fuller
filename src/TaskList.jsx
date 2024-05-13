// src/components/TaskList.jsx
import React, { useState } from 'react';
import'./styles.css';
const TaskList = () => {
const [tasks, setTasks] = useState([]);


// Simulación de carga de datos desde una API con useEffect
React.useEffect(() => {
fetch('https://jsonplaceholder.typicode.com/todos')
.then((response) => response.json())
.then((data) => setTasks(data))
.catch((error) => console.error('Error fetching tasks:', error));
}, []); // La dependencia vacía asegura que se ejecute solo una vez al montar el componente

return (
<div className="container mt-5 cont">
<h2 className='lista'>Lista de Tareas</h2>
<ul className='ul'>
{tasks.map((task) => (
<li className='btn btn-outline-dark' key={task.id}>{task.title}</li>
))}
</ul>
</div>
);};

export default TaskList;