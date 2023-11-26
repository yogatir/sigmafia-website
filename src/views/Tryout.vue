<script setup>
    import { ref, onMounted } from 'vue';
    import { getTryout } from '@/api/tryout';

    import Navbar from '@/components/Navbar.vue';

    const tryouts = ref([]);

    const startTryout = (tryoutId, timeLimit) => {
        localStorage.setItem("tryout-id", tryoutId);
        localStorage.setItem("timeLimit", timeLimit);
        window.location.href = "/tryout/questions";
    }

    const fetchTryout = async () => {
        try{
            const response = await getTryout();

            tryouts.value = response;
        }catch(err){
        }
    }

    onMounted(() => {
       fetchTryout();
    });
</script>

<template>
    <Navbar />

    <div class="w-screen h-screen">
        <div class="bg-sigmafia-orange bg-no-repeat pt-40 pb-40 w-full h-2/4">
            <div class="flex justify-center">
                <div class="flex flex-col items-center w-1/4">
                    <h3 class="text-white text-5xl font-bold">Tryout</h3>
                    <input type="text" name="search" id="search" class="rounded-xl my-14 px-2 py-3 focus:outline-none focus:ring-0 text-[12px] sm:text-xl sm:w-full" placeholder="Search">
                </div>
            </div>
        </div>
        <div class="w-full pt-16">
            <div class="flex flex-col justify-center items-center mx-auto w-3/4">
                <table class="w-full border-collapse">
                    <tr class="text-sigmafia-orange font-bold rounded-xl">
                        <td class="py-3 px-3 border border-gray-300 bg-gray-200">No</td>
                        <td class="py-3 px-3 border border-gray-300 bg-gray-200">Nama</td>
                        <td class="py-3 px-3 border border-gray-300 bg-gray-200">Mata Pelajaran</td>
                        <td class="py-3 px-3 border border-gray-300 bg-gray-200">Tingkat</td>
                        <td class="py-3 px-3 border border-gray-300 bg-gray-200">Jumlah Soal</td>
                        <td class="py-3 px-3 border border-gray-300 bg-gray-200">Waktu (menit)</td>
                        <td class=""></td>
                    </tr>
                    <tr class="text-gray-400" v-for="(tryout, index) in tryouts" :key="tryout.id">
                        <td class="py-3 px-3 border border-gray-300">{{index+1}}</td>
                        <td class="py-3 px-3 border border-gray-300">{{tryout.tryout_name}}</td>
                        <td class="py-3 px-3 border border-gray-300">{{tryout.subject_name}}</td>
                        <td class="py-3 px-3 border border-gray-300">{{tryout.class_name}}</td>
                        <td class="py-3 px-3 border border-gray-300">{{tryout.number_of_question}}</td>
                        <td class="py-3 px-3 border border-gray-300">{{tryout.time_limit}}</td>
                        <td class="px-3"><button @click="startTryout(tryout.id, tryout.time_limit)" class="border border-sigmafia-orange rounded-md font-bold text-sigmafia-orange px-5 py-1 ml-2">Ikuti Tryout</button></td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>