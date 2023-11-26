import { httpCommon, removeToken } from './http-common';

export const getSubjectMatter = async () => {
    try{
        const res = await httpCommon.post('/get-subject-matters');
        const response = res.data;

        return response.data;
    }catch(err){
        removeToken(err);
    }
};

export const getSubjectMatterDetail = async (subjectMatterId) => {
    try{
        const res = await httpCommon.post('/get-subject-matter-details', {
            subject_matter_id: subjectMatterId
        });
        const response = res.data;

        return response.data;
    }catch(err){
        removeToken(err);
    }
};