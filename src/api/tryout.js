import { httpCommon, removeToken } from './http-common';

export const getTryout = async () => {
    try{
        const res = await httpCommon.post('/get-tryouts');
        const response = res.data;

        return response.data;
    }catch(err){
        removeToken(err);
    }
};

export const getTryoutQuestion = async (tryoutId) => {
    try{
        const res = await httpCommon.post('/get-tryout-questions', {
            tryout_id: tryoutId
        });
        const response = res.data;

        return response.data;
    }catch(err){
        // removeToken(err);
    }
};

export const submitTryout = async (questions, answers) => {
    var correct = 0;
    var wrong = 0;
    var total = 0;

    questions.forEach((question, index) => {
        let objIndex = answers.findIndex((obj => obj.id == question.id));
        if(objIndex >= 0){
            if(answers[objIndex].answer.toUpperCase() == question.correct_option){
                correct++;
            }else{
                wrong++;
            }
        }else{
            wrong++;
        }
    });

    total = correct / questions.length * 100;

    localStorage.setItem("correct", correct);
    localStorage.setItem("wrong", wrong);
    localStorage.setItem("total", total);

    window.location.href="/tryout/results";
};

// export const addTryout = async (state) => {
//     await httpCommon.post('/tryout/add', {
//         "name": state.tryoutName,
//         "class_id": state.class,
//         "curriculum_id": state.curriculum,
//         "subject_id": state.subject,
//         "type": state.tryoutType,
//         "time_limit": state.timeLimit
//     }).then((res) => {
//         window.location.href = '/admin/tryout';
//     }, (err) => {
//         removeToken(err);
//         return state.tryout = [];
//     });
// };

// export const removeTryout = async (id) => {
//     await httpCommon.post('/tryout/remove', {
//         "id": id
//     }).then((res) => {
//         location.reload();
//     }, (err) => {
//         removeToken(err);
//         return state.tryout = [];
//     });
// };