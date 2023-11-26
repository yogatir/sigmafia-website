<script setup>
    import { ref, onMounted } from 'vue';
    import { getSubjectMatterDetail } from '@/api/matter';

    import Navbar from '@/components/Navbar.vue';

    const subjectMatterDetail = ref([]);
    const subjectMatterId = localStorage.getItem('matter-id');

    const fetchSubjectMatterDetail = async () => {
        try{
            const response = await getSubjectMatterDetail(subjectMatterId);

            subjectMatterDetail.value = response;
            console.log(response);
        }catch(err){
        }
    }

    const showMatterDetail = async (id) => {
        const collectionShowMatterDetail = document.getElementsByClassName('card-matter-detail');
        for (let i = 0; i < collectionShowMatterDetail.length; i++) {
            collectionShowMatterDetail[i].classList.remove('block');
            collectionShowMatterDetail[i].classList.add('hidden');
        }

        const record = document.getElementById("record-"+id);
        record.classList.remove("hidden");
        record.classList.add("block");
    }

    onMounted(() => {
       fetchSubjectMatterDetail().then(() => {
           let record = document.getElementById("record-0");
   
           record.classList.remove("hidden");
           record.classList.add("block");
       });
    });
</script>

<template>
    <div class="w-screen h-screen flex flex-row bg-gray-800">
        <div class="w-1/6 bg-sigmafia-dark-blue p-4 sticky top-0">
            <img src="../assets/svg/sigmafia-text-white.svg" class="px-12 mt-2">
            <div class="flex flex-col pt-5" v-for="(subjectMatterDetailFile, index) in subjectMatterDetail.subject_matter_files" :key="subjectMatterDetailFile.id">
                <a @click="showMatterDetail(index)" class="flex flex-row cursor-pointer">
                    <template v-if="subjectMatterDetailFile.category == 'DOCUMENT'">
                        <img src="../assets/svg/ico/document-pdf.svg" class="py-4 ml-1 pl-12 h-16">
                    </template>
                    <template v-else>
                        <img src="../assets/svg/ico/play-circle.svg" class="py-4 pl-12">
                    </template>
                    <h5 class="text-white pl-5 py-4 text-lg">{{ subjectMatterDetailFile.name }}</h5>
                </a>
            </div>
        </div>

        <div class="flex-grow">
            <div class="flex justify-center items-center h-screen">
                <div v-for="(subjectMatterDetailFile, index) in subjectMatterDetail.subject_matter_files" :key="subjectMatterDetailFile.id">
                    <div class="flex flex-col mx-auto hidden card-matter-detail" :id="'record-'+index">
                        <div class="mt-10">
                            <h2 class="text-white text-3xl font-bold">{{ subjectMatterDetailFile.name }}</h2>
                        </div>
                        <div class="mt-10">
                            <iframe :src="'https://drive.google.com/file/d/'+subjectMatterDetailFile.google_file_id+'/preview'" width="820" height="480" allow="autoplay"></iframe>
                        </div>
                        <template v-if="subjectMatterDetailFile.category == 'DOCUMENT'">
                            <h3 class="text-2xl mt-10 ml-2 text-white font-semibold">Download</h3>
                            <a class="flex flex-row" :href="'https://drive.google.com/uc?export=download&id='+subjectMatterDetailFile.google_file_id">
                                <img src="../assets/svg/ico/document-pdf.svg" class="py-4 px-4">
                                <h5 class="text-white py-6 pl-3 text-lg">{{ subjectMatterDetailFile.name }}.pdf</h5>
                            </a>
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>