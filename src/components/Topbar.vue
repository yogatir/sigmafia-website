<script setup>
    import { onMounted, reactive } from 'vue';
    import { getUserDetail, userSignOut } from '@/api/user';

    const state = reactive({
        name: 'Login'
    });

    onMounted(() => {
        if(localStorage.getItem('bearerToken') != null){
            getUserDetail(state);
        }
    });
</script>

<template>
    <div class="flex flex-row bg-white h-16 pl-5 border-b-2 border-sigmafia-dark-blue drop-shadow-lg">
        <img src="../assets/svg/ico/menu-icon.svg" class="py-5 w-7">
        <p class="ml-5 py-4 font-bold text-lg font-sigmafia-dark-blue">Selamat Datang {{state.name}}</p>
        <img src="../assets/svg/ico/logout-icon.svg" class="w-5 ml-auto">
        <a @click="userSignOut()" href="#" class="ml-2 mr-5 py-4 font-bold text-lg font-sigmafia-dark-blue">Logout</a>
    </div>
</template>