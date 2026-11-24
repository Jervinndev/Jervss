<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';

const skillsinfo = ref([
    { id: 1, skill: 'Html' },
    { id: 2, skill: 'Css' },
    { id: 3, skill: 'Js' },
    { id: 4, skill: 'Tailwind' },
    { id: 5, skill: 'Bootstrap' },
    { id: 6, skill: 'Vue.js' },
    { id: 7, skill: 'Figma' },
])
</script>

<template>
    <section class=" w-auto h-fit p-3 light:bg-white bg-black">
        <main class="mx-auto max-w-7xl p-2 pt-4 border border-white/5 light:bg-white rounded-lg">
            <div class="text-white/70 light:text-black font-black flex items-center justify-between">
                <h1 class="text-sm">TECH STACK</h1>
                <router-link to="/Techmore"
                    class="flex items-center justify-center gap-1 text-[12px] font-normal text-white/70 light:text-black/70">VIEW
                    ALL
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                        class="bi bi-arrow-right" viewBox="0 0 16 16 text-white/70">
                        <path fill-rule="evenodd"
                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                    </svg></router-link>
            </div>
            <div class="grid 2xl:grid-cols-5 grid-cols-3 gap-2.5 w-fit text-gray-500 pt-4">
                <div v-for="skills in skillsinfo" :key="skills.id">
                    <div
                        class="flex items-center justify-center gap-2 border border-white/15 rounded-2xl light:border-black/10 p-1.5 text-[13px] text-center text-gray-300 light:text-black">
                        <h1 class="
                        light:text-black/60 text-white/50">{{ skills.skill }}</h1>
                    </div>
                </div>
            </div>
        </main>
    </section>
</template>