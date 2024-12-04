import ContextApi from "../context/context";
import { useContext, useEffect } from "react";
function DefaultTasksState(){
    //const {tasks, setTasks, loading, setLoading, error, setError} = useContext(ContextApi)
    console.log("clicked");
    
    // useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/todos")
    //         .then(response => {
    //         if (!response.ok)
    //             throw new Error('Failed to fetch Tasks-Lists.');
    //         return response.json();
    //         })
    //         .then(data => {
    //         setTasks(data);
    //         setLoading(false);
    //         })
    //         .catch(err => {
    //         setError(err.message);
    //         console.log(err)
    //         setLoading(false);
    //         })
    // }, [])
}
function Functionalities() {
    
    //const {tasks, setTasks, loading, setLoading, error, setError} = useContext(ContextApi)
        
    

    return (
        <div id="addTaskComponent">
            <input type="text" />
            <button>Add Task</button>
            <button onClick={DefaultTasksState}>Load Default Tasks</button>
        </div>
    )
}

export default Functionalities;