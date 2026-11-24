<script setup>
import { ref } from 'vue';
import img1 from '/src/assets/307123781_466656242172756_4601884538598477164_n.jpg'
import img2 from '/src/assets/438305239_920154059908628_3853073436611594463_n.jpg'
import img3 from '/src/assets/515436782_1146882127460603_1661407609528652170_n.jpg'

const educ = ref([
    { id: 1, img: img1, school: 'University of Rizal system', loc: 'Calumpang Binangonan', year: '2024-2026' },
    { id: 2, img: img2, school: 'Binangonan Catholic College', loc: 'Janosa Binangonan Rizal', year: '2024-2026' },
    { id: 3, img: img3, school: 'Kaytome Gulod Elementary School', loc: 'Kaytome Binangonan Rizal', year: '2024-2026' }
])
</script>

<template>
    <section class="flex items-center justify-center light:bg-white bg-black">
        <div class="mx-auto max-w-7xl w-full 2xl:p-0 p-4 mt-4">
            <div class="font-black pb-4 p-2 text-md">
                <h1 class="text-white/70 light:text-black text-sm">EDUCATION</h1>
            </div>
            <div class="mx-auto max-w-7xl w-full">
                <div class="grid 2xl:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-3.5">
                    <div v-for="education in educ" :key="educ.id"
                        class="flex items-center p-3 gap-4 bg-[#0d0d0d] border border-white/10 light:bg-white rounded-lg light:border-black/10">
                        <img class="w-9 h-9 rounded-4xl" :src="education.img" alt="">
                        <div class="text-sm tracking-tight flex flex-col gap-1 light:text-black">
                            <h1 class="font-bold text-white/70 light:text-black/70">{{ education.school }}</h1>
                            <p class="light:text-black/50 text-white/30">{{ education.loc }}</p>
                            <span class="text-white/30 light:text-black/50">{{ education.year }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>