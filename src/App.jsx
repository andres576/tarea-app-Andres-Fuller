import React, { useState } from 'react'
import'./styles.css';
import TaskList from './TaskList';



function App() {
const [tasks, setTasks] = useState([]);// en principio es un array vacio
const[newTask, setNewTask] = useState('');

const handleInputChange = (event) => {
setNewTask(event.target.value);
};

const handleAddTask = () => {
if(newTask.trim() !== '') {
setTasks([...tasks, newTask]);
setNewTask('');
  }
}

const handleDeleteTask = (index) => {
const updatedTasks = [...tasks];//haceme una copia de todas las tareas y guardalas aca.
updatedTasks.splice(index, 1);//splice va a ubicar el elemento segun index y borrara un elemento.
setTasks(updatedTasks);
}

return (
    <>
    <div>
    <h1 className='lista'>Lista de Tareas</h1>
    <p className='p'>Agrega tus Tareas Aqui y Acomoda tu dia,es completamente gratis y facil de usar!!</p>
    <input
    type='text'
    placeholder='Agregar tarea'
    value={newTask}
    onChange={handleInputChange}
    className='input'
    />
  <botton onClick={handleAddTask} type="button" class="btn btn-secondary" >Agregar tarea</botton>
  <ul>
  {tasks.map((task, index) => (
  <li key={index} className='li'>
  {task}
  <botton onClick={() => handleDeleteTask(index)} className='Eliminar' type="button" class="btn btn-secondary" >Eliminar</botton>
</li>
))}
</ul>
</div> 
    </>
  )
}

export default App
