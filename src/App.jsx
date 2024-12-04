import './App.css'
import Functionalities from './components/Functionalities'
import TaskList from './components/taskList'
import ContextApi from './context/context';
import { useState } from 'react';



function App() {

  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const props = {tasks, setTasks, loading, setLoading, error, setError};

  return (
    <>
      <ContextApi.Provider value={props}>
        <Functionalities />
        <TaskList />
      </ContextApi.Provider>
    </>
  )
}

export default App
