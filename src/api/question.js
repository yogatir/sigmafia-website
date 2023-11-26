import { httpCommon, removeToken } from './http-common';

export const getQuestion = async (state, tryoutId) => {
    await httpCommon.post('/question/all', {tryout_id: tryoutId}).then((res) => {
        const response = res.data;

        return state.questions = response.data;
    }, (err) => {
        removeToken(err);
        return state.questions = [];
    });
};

export const addQuestion = async (state) => {
    await httpCommon.post('/question/add', {
        "tryout_id": state.tryoutId,
        "value": state.value,
        "question": state.question,
        "answer_a": state.answerA,
        "answer_b": state.answerB,
        "answer_c": state.answerC,
        "answer_d": state.answerD,
        "answer_e": state.answerE,
        "correct_answer": state.correctAnswer
    }).then((res) => {
        window.location.href = '/admin/tryout';
    }, (err) => {
        removeToken(err);
        return state.tryout = [];
    });
};

// export const findTryout = async (state, id) => {
//     await axios.post('http://localhost:5000/tryout/find-data',{id:id}).then((response) => {
//             console.log(response);
//             state.tryout = response.data.data;
//         }, () => {
//             state.tryout = [];
//         }
//     )
// };

// export const callRemoveTryout = async (id) => {
//     await axios.post('http://localhost:5000/tryout/remove-data',{id:id}).then(() => {
//             location.reload();
//         }, (err) => {
//             alert(err.response.data.error);
//         }
//     )
// };

// export const callAddTryout = async (param) => {
//     await axios.post('http://localhost:5000/tryout/create-data',param).then(() => {
//             window.location.href = '/admin/tryout';
//         }, (err) => {
//             alert(err.response.data.error);
//         }
//     )
// };

// export const callEditTryout = async (param) => {
//     await axios.post('http://localhost:5000/tryout/update-data',param).then(() => {
//             window.location.href = '/admin/tryout';
//         }, (err) => {
//             alert(err.response.data.error);
//         }
//     )
// };