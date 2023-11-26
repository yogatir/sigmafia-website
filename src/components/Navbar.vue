<script setup>
    import { onMounted, ref } from 'vue';
    import { useRouter } from 'vue-router';
    import { initDropdowns } from 'flowbite';
    import { getUserDetail, userSignOut } from '@/api/user';

    const router = useRouter();
    const user = ref({});
    const hasToken = ref(localStorage.getItem('bearerToken') !== null);
    
    const goToLoginPage = () => {
        router.push('/login');
    }

    const goToMatterPage = () => {
        router.push('/matter');
    }

    const goToTryoutPage = () => {
        router.push('/tryout');
    }

    const goToProfilePage = () => {
        router.push('/profile');
    }

    const userDetail = async () => {
        const response = await getUserDetail();

        user.value = response;
    }

    onMounted(() => {
        initDropdowns();
        if(localStorage.getItem('bearerToken') !== null){
            userDetail();
        }
    });
</script>

<template>
    <nav class="fixed flex justify-center items-center w-full mt-5 z-20">
        <div class="flex justify-between bg-white mx-10 rounded-xl py-3 w-full shadow">
            <img src="../assets/svg/sigmafia-logo-navbar.svg" class="w-36 pl-10">
            <div class="flex pr-10">
                <a href="/" class="px-2 my-1 font-bold text-gray-800">Home</a>
                <!-- <a class="px-2 my-1 font-bold text-gray-800">Program</a> -->
                <!-- <a class="px-2 my-1 font-bold text-gray-800">Blog</a> -->
                <!-- <a class="px-2 my-1 font-bold text-gray-800">About</a> -->
                <button data-dropdown-toggle="study" class="px-2 font-bold text-gray-800">Study</button>
                <div class="hidden flex flex-col bg-gray-100 shadow px-5 py-3" id="study">
                    <a @click="goToMatterPage" class="text-sm font-bold text-gray-800 py-1 cursor-pointer">Matter</a>
                    <a @click="goToTryoutPage" class="text-sm font-bold text-gray-800 py-1 cursor-pointer">Tryout</a>
                </div>
                <!-- <a @click="userSignOut" class="px-2 my-1 font-bold text-gray-800">Contact</a> -->
                <template v-if="!hasToken" class="pt-1">
                    <button @click="goToLoginPage" class="bg-sigmafia-orange rounded-md font-bold text-white px-5 ml-2">Login</button>
                </template>
                <template v-else>
                    <button id="loginButton" data-dropdown-toggle="user" class="bg-sigmafia-orange rounded-md font-bold text-white px-5 ml-2">{{ user.name }}</button>
                    <div class="hidden flex flex-col bg-gray-100 shadow px-5 py-3" id="user">
                        <a @click="goToProfilePage" class="text-sm font-bold text-gray-800 py-1">Profile</a>
                        <a @click="userSignOut()" href="#" class="text-sm font-bold text-gray-800 py-1">Logout</a>
                    </div>
                </template>
            </div>
        </div>
    </nav>
</template>