import Axios from "axios";

export const getProjectList = async() => {
    return await Axios.get("http://localhost/laravel/mytask/api/projects").then((res) => {
        return res.data;
    });
}

export const getProjectByID = async(id) => {
    return await Axios.get(`http://localhost/laravel/mytask/api/projects/${id}`).then((res) => {
        return res.data;
    });
}

export const storetProject = async(data) => {
    data.user_id= 1;
    return await Axios.post("http://localhost/laravel/mytask/api/projects",data).then((res) => {
        return res.data;
    });
}

export const updateProject = async(id,data) => {
    data.user_id= 1;
    return await Axios.put(`http://localhost/laravel/mytask/api/projects/${id}`,data).then((res) => {
        return res.data;
    });
}

export const deleteProject = async(id) => {
    return await Axios.delete(`http://localhost/laravel/mytask/api/projects/${id}`).then((res) => {
        return res.data;
    });
}