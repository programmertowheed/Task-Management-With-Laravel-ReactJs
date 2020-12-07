import Axios from "axios";
import { isNull } from "lodash";

export const checkIfAuthenticated = () => {
    const getloginData = localStorage.getItem("loginData");
    if(getloginData != null){
        const data = JSON.parse(getloginData);
        if(data.success && data.access_token !== null){
            return data.user;
        }
        return false;
    }
    return false;
}


export const loginUser = async(data) => {
    return await Axios.post("http://localhost/laravel/mytask/api/auth/login",data).then((res) => {
        return res.data;
    });
}

export const registerUser = async(data) => {
    return await Axios.post("http://localhost/laravel/mytask/api/auth/register",data).then((res) => {
        return res.data;
    });
}

