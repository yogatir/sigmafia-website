<script setup>
    import { ref, onMounted } from 'vue';
    import { getSubjectMatter } from '@/api/matter';

    import Navbar from '@/components/Navbar.vue';

    const subjectMatters = ref([]);

    function readMatter(subjectMatterId){
        localStorage.setItem("matter-id", subjectMatterId);
        window.location.href = "/matter/matter-detail";
    }

    const fetchSubjectMatter = async () => {
        try{
            const response = await getSubjectMatter();

            subjectMatters.value = response;
        }catch(err){
        }
    }

    onMounted(() => {
       fetchSubjectMatter();
    });
</script>

<template>
    <Navbar />

    <div class="w-screen h-screen">
        <div class="bg-sigmafia-orange bg-no-repeat pt-40 pb-40 w-full h-2/4">
            <div class="flex justify-center">
                <div class="flex flex-col items-center w-1/4">
                    <h3 class="text-white text-5xl font-bold">Matter</h3>
                    <input type="text" name="search" id="search" class="rounded-xl my-14 px-2 py-3 focus:outline-none focus:ring-0 text-[12px] sm:text-xl sm:w-full" placeholder="Search">
                </div>
            </div>
        </div>
        <div class="w-full pt-16">
            <div class="flex flex-col justify-center items-center mx-auto w-2/4">
                <table class="w-full border-collapse">
                    <tr class="text-gray-400 border-b-2 border-gray-400" v-for="(subjectMatter, index) in subjectMatters" :key="subjectMatter.id">
                        <td class="py-5 px-3">{{index+1}}</td>
                        <td class="py-5 px-3">{{subjectMatter.name}}</td>
                        <td class="py-5 px-3">{{subjectMatter.description}}</td>
                        <td class="px-3 w-40"><button @click="readMatter(subjectMatter.id)" class="border border-sigmafia-orange rounded-md font-bold text-sigmafia-orange px-5 py-1">Materi</button></td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>