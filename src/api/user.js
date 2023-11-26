import { httpCommon, removeToken } from './http-common';

export const userSignIn = async (param) => {
    try{
        const res = await httpCommon.post('/user-sign-in', {
            email: param.email,
            password: param.password
        });

        const response = res.data;
        
        localStorage.setItem('bearerToken', response.data.bearer_token);
        if(response.data.user.user_level == 'STUDENT'){
            window.location.href = '/';
        }
    }catch(err){
        alert(err.response.data.message);
    }
};

export const userSignUp = async (param) => {
    try{
        await httpCommon.post('/user-sign-up', {
            name: param.name,
            school: param.school,
            major: param.major,
            gender: param.gender,
            user_level: "STUDENT",
            email: param.email,
            password: param.password
        });

        await userSignIn(param);
    }catch(err){
        alert(err.response.data.message);
    }
};

export const userSignOut = async () => {
    localStorage.removeItem('bearerToken');
    window.location.href = '/';
};

export const userVerify = async () => {
    if(localStorage.getItem('bearerToken') != null){
        window.location.href = '/';
    }
};

export const getUserDetail = async () => {
    try{
        const res = await httpCommon.post('/get-user-detail');
    
        const response = res.data;
        return response.data;
    }catch(err){
        removeToken(err);
        alert(err.response.data.message);
    }
};