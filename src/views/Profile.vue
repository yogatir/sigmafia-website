<script setup>
    import Navbar from '@/components/Navbar.vue';
    import { useRouter } from 'vue-router';
    import { getUserDetail } from '@/api/user';
    import { onMounted, ref } from 'vue';
    
    const user = ref({});
    const options = [
        { value: 'MALE', label: 'Male' },
        { value: 'FEMALE', label: 'Female' }
    ];
    
    const router = useRouter();
    
    const goToEvaluationPage = () => {
        router.push('/evaluation');
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
    <Navbar />

    <div class="w-screen h-screen flex flex-row">
        <div class="flex-grow bg-gray-100">
            <div class="flex justify-center items-center h-screen">
                <div class="flex flex-row ml-auto w-3/4">
                    <div class="flex flex-col mr-10">
                        <!-- <div class="bg-sigmafia-orange border border-black rounded-lg p-5 shadow mb-10">
                            <div class="flex justify-center items-center">
                                <div class="h-24"></div>
                                <img src="@/assets/svg/diah-prema.svg" class="rounded-full h-52 w-52">
                            </div>
                        </div> -->
                        
                        <div class="border border-black rounded-lg p-5 shadow bg-white">
                            <div class="flex flex-col justify-center items-center p-2 pb-5">
                                <h3 class="text-3xl py-2">Active Plan</h3>
                            </div>

                            <div class="flex flex-col p-2">
                                <input class="border border-black py-2 px-2 rounded-md text-xl" disabled placeholder="NO_ACTIVE_PLAN" />
                            </div>

                            <div class="flex flex-col p-2">
                                <a @click="goToEvaluationPage" class="bg-sigmafia-orange rounded-md font-bold text-white py-3 my-5 text-center">Evaluasi</a>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-col w-2/4">
                        <div class="border border-black rounded-lg py-5 px-10 shadow bg-white">
                            <div class="flex flex-col justify-center items-center p-2">
                                <h3 class="text-3xl py-2">Edit Profile</h3>
                            </div>

                            <div class="flex flex-col p-2">
                                <p class="text-xl font-semibold pb-2">Nama</p>
                                <input class="border border-black py-2 px-2 rounded-md text-xl" :value="user.name" />
                            </div>
                            <div class="flex flex-col p-2">
                                <p class="text-xl font-semibold pb-2">Email</p>
                                <input class="border border-black py-2 px-2 rounded-md text-xl" :value="user.email" />
                            </div>
                            <div class="flex flex-col p-2">
                                <p class="text-xl font-semibold pb-2">Jenis Kelamin</p>
                                <select class="border border-black py-2 px-2 rounded-md w-1/4 text-xl">
                                    <option v-for="option in options" :key="option.value" :value="option.value" :selected="option.value === user.gender">
                                        {{ option.label }}
                                    </option>
                                </select>
                            </div>
                            <div class="flex flex-row">
                                <div class="flex flex-col p-2 mr-3 w-full">
                                    <p class="text-xl font-semibold pb-2">Sekolah</p>
                                    <input class="border border-black py-2 px-2 rounded-md text-xl" :value="user.school" />
                                </div>
                                <div class="flex flex-col p-2 ml-3 w-full">
                                    <p class="text-xl font-semibold pb-2">Jurusan</p>
                                    <input class="border border-black py-2 px-2 rounded-md text-xl" :value="user.major" />
                                </div>
                            </div>

                            <div class="flex flex-col p-2">
                                <button class="bg-sigmafia-orange rounded-md font-bold text-white py-3 my-5">Simpan</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>