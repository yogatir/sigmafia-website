<script setup>
import { onMounted, reactive } from 'vue';
import { userVerify, userSignUp } from '@/api/user';

const state = reactive({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    school: '',
    major: '',
    gender: ''
});

function register() {
    var param = {
        "name": state.name,
        "school": state.school,
        "major": state.major,
        "gender": state.gender,
        "email": state.email,
        "password": state.password
    };

    if(state.password === state.confirmPassword){
        userSignUp(param);
    }else{
        alert('Confirm Password is Not Match!');
    }

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

                <form @submit.prevent="register" class="pt-3">
                    <div class="flex flex-row py-5">
                        <input type="text" name="name" v-model="state.name" class="rounded-xl font-mochiy px-2 py-3 focus:outline-none focus:ring-0 text-[12px] sm:text-sm mx-3" placeholder="Name">
                        <input type="text" name="school" v-model="state.school" class="rounded-xl font-mochiy px-2 py-3 focus:outline-none focus:ring-0 text-[12px] sm:text-sm mx-3" placeholder="School">
                    </div>
                    <div class=" flex flex-row py-5">
                        <input type="text" name="major" v-model="state.major" class="rounded-xl font-mochiy px-2 py-3 focus:outline-none focus:ring-0 text-[12px] sm:text-sm mx-3" placeholder="Major">
                        <select name="gender" v-model="state.gender" class="rounded-xl font-mochiy px-2 py-3 focus:outline-none focus:ring-0 text-[12px] sm:text-sm mx-3 w-full">
                            <option value="MALE" selected>MALE</option>
                            <option value="FEMALE">FEMALE</option>
                        </select>
                    </div>
                    <div class="flex flex-row py-5">
                        <input type="text" name="email" v-model="state.email" class="rounded-xl font-mochiy px-2 py-3 focus:outline-none focus:ring-0 text-[12px] sm:text-sm w-full mx-3" placeholder="Email">
                    </div>
                    <div class="flex flex-row py-5">
                        <input type="password" name="password" v-model="state.password" class="rounded-xl font-mochiy px-2 py-3 focus:outline-none focus:ring-0 text-[12px] sm:text-sm mx-3" placeholder="Password">
                        <input type="password" name="confirm-password" v-model="state.confirmPassword" class="rounded-xl font-mochiy px-2 py-3 focus:outline-none focus:ring-0 text-[12px] sm:text-sm mx-3" placeholder="Confirm Password">
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