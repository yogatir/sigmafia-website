import axios from 'axios';

export const httpCommon = axios.create({
    baseURL: `https://api.sigmafia.com`,
    headers: {
        'Content-Type': 'application/json',
    },
    transformRequest: [function (data, headers) {
        headers['Authorization'] = localStorage.getItem('bearerToken')

        return JSON.stringify(data);
    }]
});

export const removeToken = (err) => {
    if(err.response.data.message == "Your token is expired."){
        localStorage.removeItem('bearerToken');
        window.location.reload();
    }
};