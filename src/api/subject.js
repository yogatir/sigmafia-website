import { httpCommon, removeToken } from './http-common';

export const getSubject = async (state) => {
    await httpCommon.post('/subject/all').then((res) => {
        const response = res.data;

        return state.subjects = response.data;
    }, (err) => {
        removeToken(err);
        return state.subjects = [];
    });
};