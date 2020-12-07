
import React, { Component } from 'react';
import { Badge, Button, Form, FormControl, Spinner } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { getProjectByID } from '../../../services/ProjectService';
import { PUBLIC_URL } from '../../constants';
import CreateTask from '../task/CreateTask';
import TaskList from '../task/TaskList';
import ProjectEdit from './ProjectEdit';

class ProjectView extends Component {
    state = { 
        project: {},
        taskList: [],
        name: '',
        description: '',
        isLoading: false,
        toggaleAddTask: false,
        toggaleEditProject: false,
        searchTasklist: [],
        searchText: "",
    };

    componentDidMount() {
        const { history } = this.props;
        if(this.props.match.params.id){
            this.projectDetails();
        }else{
            window.location.href = PUBLIC_URL+"projects";
        }

    }

    projectDetails  = async(status=null) => {
        const id = this.props.match.params.id;
        if(status!=null && status==false){
            this.setState({ isLoading: false });
        }else{
            this.setState({ isLoading: true });
        }
        const getProjectData =  await getProjectByID(id);
        if(getProjectData.success){
            this.setState({
                project:getProjectData.data,
                taskList:getProjectData.data.tasks,
                searchTasklist:getProjectData.data.tasks,
                isLoading: false,
            });
        }else{
            this.setState({
                project:{},
                taskList:[],
                isLoading: false,
            }); 
        }
    };

    toggleAddTask  = () => {
        if(this.state.toggaleEditProject){
            this.toggaleEditProject();
        }
        this.setState({
            toggaleAddTask: !this.state.toggaleAddTask,
        });
        
    };

    toggaleEditProject  = () => {
        if(this.state.toggaleAddTask){
            this.toggleAddTask();
        }
        this.setState({
            toggaleEditProject: !this.state.toggaleEditProject,
        });
        
    };

    onCompleteTaskCreate = (Task) => {
        this.toggleAddTask();
        const Tasks = this.state.taskList;
        Tasks.unshift(Task);
        this.setState({
            taskList:Tasks,
        });

    }

    onCompleteEditProject = (Project) => {
        this.toggaleEditProject();
        this.setState({
            project:Project,
        });

    }

    onCompleteEditTask = () => {
        this.projectDetails(false);
    }

    onSearch = (e) => {
        const searchText = e.target.value;
        this.setState({
            isLoading: true,
        }); 
        if(searchText.length > 0){
            const searchData = this.state.taskList.filter(function(item){
                const itemData = item.name + " " + item.description;
                const searchData = searchText.trim().toLowerCase();
                return itemData.trim().toLowerCase().indexOf(searchData) !== -1;
            });
            this.setState({
                searchTasklist:searchData,
                isLoading: false,
                searchText,
            }); 
            this.toggleAddTask();
        }else{
            this.setState({
                searchText,
                isLoading: false,
            });
            this.projectDetails(false);
        }
    };
     
    
    render() { 
        return ( 
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="header-part mt-3">
                            <div className="float-left">
                            {!this.state.toggaleEditProject && (<>
                                <h2>
                                    {this.state.project.name} 
                                    <Badge className="ml-2" variant="primary">{this.state.searchTasklist.length}</Badge>
                                </h2>
                                <div>{this.state.project.description} </div>
                            </>)}
                            {this.state.toggaleEditProject && (<>
                                <ProjectEdit project={this.state.project} onCompleteEditProject={this.onCompleteEditProject}/>
                            </>)}
                                
                            </div>
                            {
                                !this.state.toggaleEditProject && (<>
                                    <div className="float-left ml-3">
                                        <Form inline>
                                            <FormControl type="search" 
                                            placeholder="Enter your query..." 
                                            className="mr-sm-2" 
                                            value={this.state.searchText}
                                            onChange={(e) => this.onSearch(e)}
                                            />
                                        </Form>
                                    </div>
                                </>)
                            }
                            
                            <div className="float-right">
                                
                                {this.state.project.status == 1 && (<>
                                    <button className="btn btn-outline-success mr-2" disabled>
                                        <span>✓ Completed</span>
                                    </button>
                                </>)}
                                {this.state.project.status == 0 && (<>
                                    <button className="btn btn-outline-info mr-2" disabled>
                                        <span>Pending...</span>
                                    </button>
                                </>)}
                                
                                <Button className="btn btn-success mr-2" onClick={() => this.toggaleEditProject()}>
                                {this.state.toggaleEditProject && (<span>Cancel Editing...</span>)}
                                {!this.state.toggaleEditProject && (<span>Edit Project</span>)}
                                </Button>
                                <Button className="btn btn-info" onClick={() => this.toggleAddTask()}>
                                {this.state.toggaleAddTask && (<span>Cancel Adding...</span>)}
                                {!this.state.toggaleAddTask && (<span>+ Add task</span>)}
                                </Button>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                        

                        { this.state.toggaleAddTask && 
                            <CreateTask 
                                project_id={this.props.match.params.id} 
                                onCompleteTaskCreate={this.onCompleteTaskCreate}

                            />
                        }
                        
                        {
                            this.state.isLoading && 
                            (
                                <div className="text-center">
                                    <Spinner animation="border" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </Spinner>
                                </div>
                            )
                        }
                        <TaskList taskList={this.state.searchTasklist} onCompleteEditTask={() => this.onCompleteEditTask()}/>

                    </div>
                </div>
            </div>
         );
    }
}
 
export default withRouter(ProjectView);

