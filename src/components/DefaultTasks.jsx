import { useContext } from "react";
import ContextApi from "../context/context";

function DefaultTasks() {
    const value = useContext(ContextApi);
    if (value.loading) return <p>Loading tasks...</p>;
    if (value.error) return <p>Error: {value.error}</p>;

    return (
        <>
            <ul>
                {value.tasks.map((task) => {
                    return (
                        <li key={task.id}>
                            {task.title} - {task.completed ? "Completed" : "Incomplete"}
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default DefaultTasks;