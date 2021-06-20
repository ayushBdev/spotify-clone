import * as api from "../../#Api/Api";
import { AUTH } from "../Types/Types";
import { success } from "../../Notifications/Notifications";

export const signin = (formData,router) => async(dispatch) => {
    try{
        const { data } = await api.signIn(formData);
        dispatch({
            type: AUTH,
            payload: data
        });
        success(`Welcome ${data?.result.name}`);
        router.push("/");
    }catch(err){
        console.log(err);
    }
};

export const signup = (formData,router) => async(dispatch) => {
    try{
        const { data } = await api.signUp(formData);
        console.log(data);
        dispatch({
            type: AUTH,
            payload: data
        });
        success(`Welcome ${data?.result.name}`);
        router.push("/");
    }catch(err){
        console.log(err);
    }
};