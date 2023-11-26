<script setup>
    import { getUserDetail, userSignOut } from '@/api/user';
    import { useRouter } from 'vue-router';

    const router = useRouter();

    const goToRegisterPage = () => {
        router.push('/register');
    }

    import Navbar from '@/components/Navbar.vue';
</script>

<template>
    <Navbar />

    <div class="h-screen w-full">
        <div class="bg-sigmafia-home-banner h-full w-full">
            <div class="flex flex-col justify-center items-center w-full pt-32">
                <img src="@/assets/svg/sigmafia-home-logo.svg" class="">
                <p class="font-mochiy pt-10 text-2xl text-center">ONCE YOU STOP LEARNING,<br>YOU START DYING</p>
                <p class="font-mochiy pt-10 text-lg ml-72">~ Albert Einstein ~</p>
                <a @click="goToRegisterPage" class="absolute mb-16 bottom-0 bg-sigmafia-orange rounded-md font-bold text-white px-5 py-1 text-xl cursor-pointer">Daftar Les</a>
            </div>
        </div>
    </div>

    <div class="h-screen w-full bg-gray-100">
        <div class="flex flex-col justify-center items-center w-full pt-44">
            <h3 class="text-4xl pb-12 font-bold text-sigmafia-dark-blue underline decoration-sigmafia-orange">Awesome Feature</h3>
            
            <section class="container max-w-full pt-24 flex flex-row justify-center overflow-x-auto">
                <div class="mx-5 bg-white shadow rounded-xl p-8 w-80 flex flex-col items-center">
                    <img src="@/assets/svg/sigmafia-private.svg" class="">
                    <h4 class="text-2xl pt-5">Private</h4>
                    <p class="pt-5 text-justify">Pembelajaran tatap muka (offline) dimana guru datang ke rumah murid, ataupun sebaliknya. Suasana belajar di rumah guru yang nyaman dan kondusif membuat belajar lebih fokus dan menyenangkan.</p>
                </div>
                <div class="mx-5 bg-white shadow rounded-xl p-8 w-80 flex flex-col items-center">
                    <img src="@/assets/svg/sigmafia-online-private.svg" class="">
                    <h4 class="text-2xl pt-5">Online Private</h4>
                    <p class="pt-5 text-justify">Pembelajaran dilakukan secara daring (online) menggunakan aplikasi skype yang mudah dan relevan untuk digunakan. Tahapan pembelajaran tetap sama seperti pembelajaran offline.</p>
                </div>
                <div class="mx-5 bg-white shadow rounded-xl p-8 w-80 flex flex-col items-center">
                    <img src="@/assets/svg/sigmafia-video-learning.svg" class="">
                    <h4 class="text-2xl pt-5">Video Learning</h4>
                    <p class="pt-5 text-justify">Dengan adanya video pembelajaran semakin memudahkan siswa untuk memahami mengenai materi atau bab yang belum dipahami.</p>
                </div>
                <div class="mx-5 bg-white shadow rounded-xl p-8 w-80 flex flex-col justify-center items-center">
                    <img src="@/assets/svg/sigmafia-bank-soal.svg" class="">
                    <h4 class="text-2xl pt-5">Bank Soal</h4>
                    <p class="pt-5 text-justify">Kumpulan soal-soal terlengkap dari berbagai tingkat pendidikan mulai dari SD hingga SMA dan bahkan tingkat olimpiade dari berbagai tingkat dengan variasi soal yang bervariasi.</p>
                </div>
                <div class="mx-5 bg-white shadow rounded-xl p-8 w-80 flex flex-col justify-center items-center">
                    <img src="@/assets/svg/sigmafia-materi.svg" class="">
                    <h4 class="text-2xl pt-5">Materi</h4>
                    <p class="pt-5 text-justify">Kumpulan materi berupa ringkasan terlengkap dapat diakses disini. Mulai dari materi matematika, fisika dan kimia untuk SMA dan SMP . kemudian Matematika untuk tingkat SD.</p>
                </div>
            </section>
        </div>
    </div>

    <div class="h-screen w-full bg-sigmafia-dark-blue">
        <div class="flex flex-col justify-center items-center w-full pt-44">
            <div class="flex flex-row">
                <img src="@/assets/svg/sigmafia-why-splash.svg" class="ml-auto px-10">
                <div class="w-2/4 mr-auto px-10 flex flex-col">
                    <h3 class="text-5xl pt-10 font-bold text-white">Why choose Sigmafia for your private study ? </h3>
                    <p class="text-white pt-10 text-lg text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet sed bibendum gravida quis amet. Ut sollicitudin ultricies imperdiet pharetra condimentum. Id lacus pulvinar justo et venenatis nisi, lacus sed. Viverra diam nunc sed habitant interdum nibh tellus.
                    </p>
                </div>
            </div>
            <div class="flex flex-row pt-10 mx-44">
                <div class="flex flex-col px-10">
                    <h5 class="text-2xl pt-10 font-bold text-white">Ullamcorper nunc.</h5>
                    <p class="text-white pt-10 text-lg text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris posuere adipiscing egestas amet, facilisis. Suscipit nisl lorem facilisis est. Ipsum donec eu odio placerat. 
                    </p>
                </div>
                <div class="flex flex-col px-10">
                    <h5 class="text-2xl pt-10 font-bold text-white">Vitae nisi eu.</h5>
                    <p class="text-white pt-10 text-lg text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique amet nec in mus. Neque ante nisl turpis a sit natoque volutpat dictum nam. Amet maecenas ultrices orci vel vel. Sit iaculis blandit.    
                    </p>
                </div>
                <div class="flex flex-col px-10">
                    <h5 class="text-2xl pt-10 font-bold text-white">Tortor quam.</h5>
                    <p class="text-white pt-10 text-lg text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus nunc elementum nunc, lectus. Viverra diam ac pharetra leo, libero, ut faucibus et. Vestibulum, mauris quam nibh lobortis magnis. Tempus.    
                    </p>
                </div>
            </div>
        </div>
    </div>

    <div class="h-screen w-full bg-gray-100">
        <div class="flex flex-col justify-center items-center w-full pt-44">
            <h3 class="text-4xl pb-12 font-bold text-sigmafia-dark-blue underline decoration-sigmafia-orange">Our Expert Tutor</h3>
            <div class="mx-5 bg-white w-2/4 shadow rounded-xl p-8 flex flex-row items-center">
                <img src="@/assets/svg/diah-prema.svg" class="p-10">
                <div class="flex flex-col items-center mb-auto px-10 pt-10">
                    <h4 class="text-2xl font-semibold pt-5 text-sigmafia-dark-blue">Putu Diah Prema Vahini, S.Pd., M.Pd.</h4>
                    <h5 class="text-xl pt-5 text-gray-500">Main Tutor</h5>
                    <p class="pt-10 text-md text-center text-gray-500">
                        Motto : Push Yourself Because No One Else Is Going To Do It For You.
                    </P>
                    <p class="pt-10 text-md text-center text-gray-500">
                        Tutor berpengalaman mengajar private dari tahun 2015 di bidang Matematika, Fisika dan Kimia non billingual dan bilingual.
                    </P>
                </div>
            </div>
        </div>
    </div>

    <div class="h-screen w-full bg-gray-200">
        <div class="flex flex-col justify-center items-center w-full pt-44">
            <h3 class="text-4xl pb-12 font-bold text-sigmafia-dark-blue underline decoration-sigmafia-orange">Alumnus</h3>
            <div class="mx-5 bg-white w-3/4 shadow rounded-xl p-8 items-center">
                <table class="w-full">
                    <tr class="bg-gray-200 text-sigmafia-orange font-bold rounded-xl">
                        <td class="py-3">No</td>
                        <td class="py-3">Nama</td>
                        <td class="py-3">Universitas</td>
                        <td class="py-3">Jurusan</td>
                    </tr>
                    <tr class="text-gray-400 border-b">
                        <td class="py-3">1</td>
                        <td class="py-3">Ayu Sintya Dewi</td>
                        <td class="py-3">Universitas Udayana</td>
                        <td class="py-3">Farmasi</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>