<script setup>
    import { reactive, onMounted } from 'vue';
    import { getUserDetail, userSignOut } from '@/api/user';

    const state = reactive({
        name: '',
        correct: localStorage.getItem('correct'),
        wrong: localStorage.getItem('wrong'),
        total: localStorage.getItem('total')
    });

    onMounted(() => {
        if(localStorage.getItem('bearerToken') != null){
            getUserDetail(state);
        }
    });
</script>

<template>
    <div class="bg-gray-100 w-screen h-screen">
        <div class="bg-sigmafia-orange text-white font-bold py-5 px-10 flex justify-between shadow">
            <div>{{state.name}}</div>
            <div></div>
            <a href="/tryout" class="font-bold text-lg font-sigmafia-dark-blue">Kembali</a>
        </div>

        <div class="grid grid-cols-3 gap-4 mx-14 pt-10">
            <div class="bg-green-400 p-10 text-center text-white text-5xl font-bold">Benar<br><br>{{state.correct}}</div>
            <div class="bg-red-400 p-10 text-center text-white text-5xl font-bold">Salah<br><br>{{state.wrong}}</div>
            <div class="bg-gray-400 p-10 text-center text-white text-5xl font-bold">Nilai<br><br>{{state.total}}</div>
        </div>
    </div>
</template>