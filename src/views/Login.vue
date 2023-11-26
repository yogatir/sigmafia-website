<script setup>
import { onMounted, reactive } from 'vue';
import { userVerify, userSignIn } from '@/api/user';

const state = reactive({
    email: '',
    password: ''
});

function login() {
    var param = {
        "email": state.email,
        "password": state.password
    };

    userSignIn(param);
}

onMounted(() => {
    userVerify();
})
</script>

<template>
    <div class="h-screen w-screen relative bg-gray-rectangle">
        
        <div class="flex justify-center items-center h-screen">
            <div class="bg-sigmafia-gray px-10 py-16 bg-opacity-90 rounded-xl z-10">
                <img src="@/assets/svg/logo-sigmafia-bulet.svg" class="w-20 sm:w-auto mx-auto">

                <form @submit.prevent="login" class="pt-3">
                    <div class="py-5">
                        <input type="text" name="email" v-model="state.email" class="rounded-xl font-mochiy px-2 py-3 focus:outline-none focus:ring-0 text-[12px] sm:text-sm" placeholder="Email">
                    </div>
                    <div class="py-5">
                        <input type="password" name="password" v-model="state.password" class="rounded-xl font-mochiy px-2 py-3 focus:outline-none focus:ring-0 text-[12px] sm:text-sm" placeholder="Password">
                    </div>
                    <div class="flex justify-end py-5">
                        <input type="submit" value="Submit" class="bg-sigmafia-orange font-mochiy text-white rounded-xl px-5 py-3 text-[12px] sm:text-sm">
                    </div>
                </form>
            </div>
        </div>

        <div class="absolute inset-x-0 bottom-0">
            <img src="@/assets/svg/sigmafia-orange-wave.svg" class="w-full h-full">
        </div>
    </div>
</template>