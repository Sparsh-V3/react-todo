import DefaultTasks from "./defaultTasks";
import Demo from "./Demo";

function TaskList() {

    return (
        <>
            <div id="taskLists" style={{border: '2px solid red'}}>
               <DefaultTasks />
            </div>
        </>
    );
}

export default TaskList;