<script setup>
    import Navbar from '@/components/Navbar.vue';
    import { onMounted } from 'vue';
</script>

<template>
    <Navbar />

    <div class="w-screen h-screen flex flex-row">
        <div class="flex-grow bg-gray-100">
            <div class="flex justify-center items-center h-screen">
                <div class="flex flex-col w-2/4">
                    <div class="border border-black rounded-lg py-5 px-10 shadow bg-white">
                        <div class="flex flex-col justify-center items-center py-2">
                            <h3 class="text-3xl py-2">Evaluasi</h3>
                        </div>

                        <div class="flex flex-col justify-center items-center py-2">
                            <table class="w-3/4 py-2">
                                <tr>
                                    <td class="border border-1 border-black font-bold text-xl w-1/4">Nama</td>
                                    <td class="border border-1 border-black text-xl">: Yoga Tirta</td>
                                </tr>
                                <tr>
                                    <td class="border border-1 border-black font-bold text-xl w-1/4">Kurikulum</td>
                                    <td class="border border-1 border-black text-xl">: National</td>
                                </tr>
                                <tr>
                                    <td class="border border-1 border-black font-bold text-xl w-1/4">Kelas</td>
                                    <td class="border border-1 border-black text-xl">: 1 SMA</td>
                                </tr>
                            </table>
                        </div>

                        <div class="flex flex-col justify-center items-center py-10">
                            <table class="w-full py-2 text-center">
                                <tr class="bg-gray-200">
                                    <td class="border border-1 border-black font-bold text-xl">No</td>
                                    <td class="border border-1 border-black font-bold text-xl">Nama Tryout</td>
                                    <td class="border border-1 border-black font-bold text-xl">Nilai</td>
                                    <td class="border border-1 border-black font-bold text-xl">Status</td>
                                    <td class="border border-1 border-black font-bold text-xl">Keterangan</td>
                                </tr>
                                <tr class="bg-white">
                                    <td class="border border-1 border-black text-xl">1</td>
                                    <td class="border border-1 border-black text-xl">Math Test</td>
                                    <td class="border border-1 border-black text-xl">30</td>
                                    <td class="border border-1 border-black text-xl">C</td>
                                    <td class="border border-1 border-black text-xl"></td>
                                </tr>
                            </table>
                        </div>

                        <div class="flex flex-col justify-center items-center py-2">
                            <table class="w-3/4 py-2">
                                <tr>
                                    <td class="border border-1 border-black font-bold text-xl w-2/4">Total Nilai Tryout</td>
                                    <td class="border border-1 border-black text-xl">: 30</td>
                                </tr>
                                <tr>
                                    <td class="border border-1 border-black font-bold text-xl w-1/4">Rata-rata Nilai Tryout</td>
                                    <td class="border border-1 border-black text-xl">: 30</td>
                                </tr>
                                <tr>
                                    <td class="border border-1 border-black font-bold text-xl w-1/4">Keterangan</td>
                                    <td class="border border-1 border-black text-xl">: </td>
                                </tr>
                            </table>
                        </div>

                        <div class="flex flex-col p-2">
                            <button class="bg-sigmafia-orange rounded-md font-bold text-white py-3 my-5">Print</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>