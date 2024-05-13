import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import TaskList from './TaskList.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/superhero/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <TaskList />
  </React.StrictMode>,
)
