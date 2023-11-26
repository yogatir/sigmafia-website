<script setup>
    import { ref, onMounted } from 'vue';
    import { getTryoutQuestion, submitTryout } from '@/api/tryout';
    import { getUserDetail } from '@/api/user';

    // import Navbar from '@/components/Navbar.vue';

    const user = ref({});
    const questions = ref([]);
    const answers = ref([]);
    const tryoutId = localStorage.getItem('tryout-id');
    const timeLimit = localStorage.getItem('timeLimit');

    function answer(answer, id){
        console.log(answers.value);
        const collectionAnswer = document.getElementsByClassName('button-answer-'+id);
        for (let i = 0; i < collectionAnswer.length; i++) {
            collectionAnswer[i].classList.remove('bg-green-400');
            collectionAnswer[i].classList.add('bg-gray-100');
        }

        const buttonAnswer = document.getElementById('button-answer-'+answer+'-'+id);
        buttonAnswer.classList.remove('bg-gray-100');
        buttonAnswer.classList.add('bg-green-400');

        const objIndex = answers.value.findIndex((obj => obj.id == id));
        if(objIndex >= 0){
            answers.value[objIndex] = {
                id: id,
                answer: answer.toUpperCase()
            }
        }else{
            answers.value.push({id: id, answer: answer});
        }
    }

    function showQuestion(id){
        const collectionQuestion = document.getElementsByClassName('card-question');
        for (let i = 0; i < collectionQuestion.length; i++) {
            collectionQuestion[i].classList.remove('block');
            collectionQuestion[i].classList.add('hidden');
        }

        const record = document.getElementById("record-"+id);
        record.classList.remove("hidden");
        record.classList.add("block");
    }

    function startTimer(duration) {
        var timer = duration, minutes, seconds;
        setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            document.querySelector('#time-limit').textContent = minutes + ":" + seconds;

            if (--timer < 0) {
                submitTryout(questions, answers);
            }
        }, 1000);
    }

    const userDetail = async () => {
        const response = await getUserDetail();

        user.value = response;
    }

    const tryoutQuestion = async (tryoutId) => {
        const response = await getTryoutQuestion(tryoutId);

        questions.value = response.tryout_questions;
    }

    onMounted(() => {
        if(localStorage.getItem('bearerToken') !== null){
            userDetail();
        }

        tryoutQuestion(tryoutId).then(() => {
            let record = document.getElementById("record-1");
    
            record.classList.remove("hidden");
            record.classList.add("block");
            startTimer(60 * parseInt(timeLimit));
        });
    });
</script>

<template>
    <div class="bg-gray-100 w-screen h-screen">
        <div class="bg-sigmafia-orange text-white font-bold py-5 px-10 flex justify-between shadow">
            <div>{{user.name}}</div>
            <div id="time-limit"></div>
            <a href="/tryout" class="font-bold text-lg font-sigmafia-dark-blue">Back</a>
        </div>

        <form @submit.prevent="submitTryout(questions, answers)">
            <div class="flex justify-between mx-14 pt-10">
                <template v-for="(record, index) in questions" :key="record">
                    <div :id="'record-'+record.id" class="card-question hidden bg-white rounded-lg shadow mr-14 p-5 font-semibold w-3/4">
                        <div v-html="record.question" class="text-lg"></div>
                        <div class="flex flex-col pt-5">
                            <div @click="answer('first', record.id)" :id="'button-answer-first-'+record.id" :class="'button-answer-'+record.id+' bg-gray-100 shadow py-3 px-4 rounded-lg w-full my-2 flex flex-row'">
                                <div>A.&nbsp;</div>
                                <div v-html="record.first_option"></div>
                            </div>
                            <div @click="answer('second', record.id)" :id="'button-answer-second-'+record.id" :class="'button-answer-'+record.id+' bg-gray-100 shadow py-3 px-4 rounded-lg w-full my-2 flex flex-row'">
                                <div>B.&nbsp;</div>
                                <div v-html="record.second_option"></div>
                            </div>
                            <div @click="answer('third', record.id)" :id="'button-answer-third-'+record.id" :class="'button-answer-'+record.id+' bg-gray-100 shadow py-3 px-4 rounded-lg w-full my-2 flex flex-row'">
                                <div>C.&nbsp;</div>
                                <div v-html="record.third_option"></div>
                            </div>
                            <div @click="answer('fourth', record.id)" :id="'button-answer-fourth-'+record.id" :class="'button-answer-'+record.id+' bg-gray-100 shadow py-3 px-4 rounded-lg w-full my-2 flex flex-row'" v-if="record.fourth_option">
                                <div>D.&nbsp;</div>
                                <div v-html="record.fourth_option"></div>
                            </div>
                            <div @click="answer('fifth', record.id)" :id="'button-answer-fifth-'+record.id" :class="'button-answer-'+record.id+' bg-gray-100 shadow py-3 px-4 rounded-lg w-full my-2 flex flex-row'" v-if="record.fifth_option">
                                <div>E.&nbsp;</div>
                                <div v-html="record.fifth_option"></div>
                            </div>
                        </div>
                    </div>
                </template>
                
                <div class="bg-white rounded-lg shadow w-1/4">
                    <div class="grid grid-cols-7 gap-4 p-5">
                        <template v-for="(record, index) in questions" :key="record">
                            <div @click="showQuestion(record.id)" class="border border-black py-1 px-3 flex items-center justify-center font-bold cursor-pointer">
                                <span class="text-center">{{index + 1}}</span>
                            </div>
                        </template>
                    </div>
                    <div class="flex justify-center mt-48">
                    </div>
                    <button input="submit" class="bg-green-400 py-2 px-6 text-center text-white text-lg font-bold mx-10">Finish</button>
                </div>
            </div>
        </form>
    </div>
</template>