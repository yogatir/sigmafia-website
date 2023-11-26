import { httpCommon, removeToken } from './http-common';

export const getCurriculum = async (state) => {
    await httpCommon.post('/curriculum/all').then((res) => {
        const response = res.data;

        return state.curriculums = response.data;
    }, (err) => {
        removeToken(err);
        return state.curriculums = [];
    });
};