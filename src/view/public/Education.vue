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
    <section class="w-full px-1 mt-10 flex items-center justify-center light:bg-white bg-black">
        <div class="mx-auto max-w-5xl w-full">
            <div class="flex items-center justify-between border-b border-white/10 light:border-black/10 py-3">
                <router-link to="/hero"
                    class="text-[12px] font-mono text-white/60 hover:text-white light:text-black/60 light:hover:text-black transition-colors">
                    BACK TO HOME
                </router-link>
                <span class="text-[12px] font-mono text-white/40 light:text-black/40">06 / EDUCATION</span>
            </div>
            <h1 class="text-white/70 light:text-black text-sm font-mono pt-5 pb-3">EDUCATION</h1>
            <div class="mx-auto w-full">
                <div class="grid 2xl:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-3.5">
                    <div v-for="education in educ" :key="education.id"
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