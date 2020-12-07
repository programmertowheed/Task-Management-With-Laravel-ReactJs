import Axios from "axios";

export const getTaskList = async() => {
    return await Axios.get("http://localhost/laravel/mytask/api/tasks").then((res) => {
        return res.data;
    });
}

export const getTaskByID = async(id) => {
    return await Axios.get(`http://localhost/laravel/mytask/api/tasks/${id}`).then((res) => {
        return res.data;
    });
}

export const storetTask = async(data) => {
    data.project_id = parseInt(data.project_id);
    return await Axios.post("http://localhost/laravel/mytask/api/tasks",data).then((res) => {
        return res.data;
    });
}

export const updateTask = async(id,data) => {
    return await Axios.put(`http://localhost/laravel/mytask/api/tasks/${id}`,data).then((res) => {
        return res.data;
    });
}

export const deleteTask = async(id) => {
    return await Axios.delete(`http://localhost/laravel/mytask/api/tasks/${id}`).then((res) => {
        return res.data;
    });
}