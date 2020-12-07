import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';
import { deleteTask, updateTask } from '../../../services/TaskService';

class TaskList extends Component {
    toggleChangeStatus = async(item) =>{
        if(item.status === 0){
            item.status = 1;
        }else{
            item.status = 0;
        }
        const getProjectData =  await updateTask(item.id,item);
        if(getProjectData.success){
            this.props.onCompleteEditTask();
        }else{
            this.setState({
                project:{},
                taskList:[],
                isLoading: false,
            }); 
        }
    };

    taskDelete = async(id) =>{
        const response =  await deleteTask(id);
        if(response.success){
            this.props.onCompleteEditTask();
        }else{
            this.setState({
                project:{},
                taskList:[],
                isLoading: false,
            }); 
        }
    };



    render() { 
        return ( 
            <>
                {
                    this.props.taskList.map((task, index) => (
                        <div className="card mt-3 mb-3" key={index}>
                            <div className="card-body">
                                <div className="float-left">
                                    <p>  
                                        { task.status === 1 && (
                                            <del className="text-success">
                                                <strong>{task.name}</strong>
                                            </del>
                                        )}
                                        { task.status === 0 && (
                                            <span>
                                                <strong>{task.name}</strong>
                                            </span>
                                        )}
                                    </p>
                                    <div>{ task.description}</div>
                                </div>
                                <div className="float-right">
                                    {task.status == 0 && (<>
                                        <button className="btn btn-outline-success btn-sm mr-2"
                                        onClick={() => this.toggleChangeStatus(task)}
                                        >
                                            <span>✓ Mark As Completed</span>
                                        </button>
                                    </>)}
                                    {task.status == 1 && (<>
                                        <button className="btn btn-outline-info btn-sm mr-2"
                                        onClick={() => this.toggleChangeStatus(task)}
                                        >
                                            <span>Mark As Pending</span>
                                        </button>
                                    </>)}
                                    <button className="btn btn-danger btn-sm"
                                        onClick={() => this.taskDelete(task.id)}
                                        >
                                            <span>Delete</span>
                                        </button>
                                </div>
                            </div>
                        </div>
                    ))
                }

                { this.props.taskList.length <= 0 && (
                    <>
                    <Alert variant="warning">
                        <div className="card-header">No task found!! Please create.</div>
                    </Alert>
                    </>
                )} 
                        
            
            </>
        );
    }
}
 
export default TaskList;