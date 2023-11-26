import { httpCommon, removeToken } from './http-common';

export const getClass = async (state) => {
    await httpCommon.post('/class/all').then((res) => {
        const response = res.data;

        return state.classes = response.data;
    }, (err) => {
        removeToken(err);
        return state.classes = [];
    });
};