import React, { useState } from 'react'

const Tasks = () => {

    const [taskText, setTaskText] = useState("");
    const [tasks, setTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);

    const updateTextTask = (e) => {
        setTaskText(e.target.value);
        console.log("Tast Text", taskText);
    }

    const addTask = (e) => {
        e.preventDefault();
        setTasks([...tasks, taskText]);
        setTaskText("");
    }

    const addCompletedTask = (completedTask) => {
        console.log("ID TASK", completedTask);
        setCompletedTasks([...completedTasks, completedTask]);
        setTasks(tasks.filter(task => task !== completedTask));
    }


    const deleteTask = (taskDel) => {
        if (window.confirm("Are u sure?")) {
            setCompletedTasks(completedTasks.filter(task => task !== taskDel));
        }
    }

    console.log("Tasks", tasks);
    console.log("Completed Task", completedTasks);
    return (
        <div>
            <div className="container mt-3">
                <div className="jumbotron">
                    <h1 className="display-3 text-center">Tasks</h1>
                    <hr className="my-2" />
                    <form onSubmit={addTask} >
                        <div className="row">
                            <div className="col-md-5 offset-2">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name=""
                                        className="form-control"
                                        placeholder="Add Task"
                                        value={taskText}
                                        onChange={updateTextTask}
                                    />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary" >Add Task</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="row">
                    <div className="col-md-12 text-center">
                        <h2>Tasks</h2>
                    </div>
                    {
                        tasks.map((task, index) => {
                            return (
                                <div className="col-md-12 mb-3" key={index} >
                                    <div className="card">
                                        <div className="card-body">
                                            {task}
                                            <span 
                                                className="float-right btn btn-success btn-sm"
                                                onClick={addCompletedTask.bind(this, task)}    
                                            >
                                                <i class="fas fa-check"></i>
                                            </span>                                        
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <hr />
                    <div className="col-md-12 text-center mt-4">
                        <h2>Completed Tasks</h2>
                    </div>
                    {
                        completedTasks.map((task, index) => {
                            return (
                                <div className="col-md-12 mb-3" key={index} >
                                    <div className="card">
                                        <div className="card-body">
                                            {task}
                                            <span
                                                className="float-right btn btn-danger btn-sm ml-2"
                                                onClick={deleteTask.bind(this, task)}
                                            >
                                                <i class="fas fa-trash-alt"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </div>
    )
}

export default Tasks
