import React, { Component } from 'react';
import { Alert, Badge, Button, Form, FormControl, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { deleteProject, getProjectList } from '../../../services/ProjectService';
import { PUBLIC_URL } from '../../constants';

class ProjectList extends Component {
    state = { 
        projectlist: [],
        searchProjectlist: [],
        searchText: "",
        isLoading: false,
    };

    componentDidMount() {
        this.projectList();
    };

    projectList  = async(isLoading=null) => {
        if(isLoading!=null && isLoading==false){
            this.setState({ isLoading: false });
        }else{
            this.setState({ isLoading: true });
        }
        
        const getProjectData =  await getProjectList();
        if(getProjectData.success){
            this.setState({
                projectlist:getProjectData.data,
                searchProjectlist:getProjectData.data,
                isLoading: false,
            });
        }else{
            this.setState({
                projectlist:[],
                isLoading: false,
            }); 
        }
    };

    projectDelete = async(id) => {
        const response =  await deleteProject(id);
        if(response.success){
            this.projectList(false);
        }else{
            this.setState({
                projectlist:[],
                isLoading: false,
            }); 
        }
    };

    onSearch = (e) => {
        const searchText = e.target.value;
        this.setState({
            isLoading: true,
        }); 
        if(searchText.length > 0){
            const searchData = this.state.projectlist.filter(function(item){
                const itemData = item.name + " " + item.description;
                const searchData = searchText.trim().toLowerCase();
                return itemData.trim().toLowerCase().indexOf(searchData) !== -1;
            });
            this.setState({
                searchProjectlist:searchData,
                isLoading: false,
                searchText,
            }); 
        }else{
            this.setState({
                searchText,
            });
            this.projectList(false);
        }
    };
     
    
    render() { 
        return ( 
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="header-part mt-3 mb-3">
                            <div className="float-left">
                                <h2>
                                    Project List 
                                    <Badge className="ml-2" variant="primary">{this.state.searchProjectlist.length}</Badge>
                                </h2>
                            </div>
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
                            <div className="float-right">
                                <Link className="btn btn-info text-white" to={`${PUBLIC_URL}projects/create`}>
                                    + Create New
                                </Link>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                        
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
                        {
                            this.state.searchProjectlist.length <= 0 && 
                            (
                                <>
                                <Alert variant="warning">
                                    <div className="card-header">No Project Found!! Please create.</div>
                                </Alert>
                                </>
                            )
                        }

                        {
                        this.state.searchProjectlist.map((project, index) => (
                            <div className="card mb-3" key={index}>
                                <div className="card-header">{ project.name} <Badge variant="primary">{project.tasks_count}</Badge></div>
                                <div className="card-body">
                                    <div>{ project.description}</div>
                                    <div className="mt-3">
                                        <Link className="btn btn-primary mr-2" to={`${PUBLIC_URL}projects/view/${project.id}`}>View & Edit</Link>
                                        <button className="btn btn-danger mr-2" onClick={() => this.projectDelete(project.id)}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        ))
                        }

                    </div>
                </div>
            </div>
         );
    }
}
 
export default ProjectList;

