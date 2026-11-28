<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import { Icon } from '@iconify/vue';
import { MoveLeft } from '@lucide/vue';

const skillsinfo = ref([
    { id: 1, skill: 'Html', icon: 'icomoon-free:html-five' },
    { id: 2, skill: 'Css', icon: 'flowbite:css-solid' },
    { id: 3, skill: 'Js', icon: 'cib:js' },
    { id: 4, skill: 'Tailwind', icon: 'file-icons:tailwind' },
    { id: 5, skill: 'Bootstrap', icon: 'bi:bootstrap-fill' },
    { id: 6, skill: 'Vue.js', icon: 'akar-icons:vue-fill' },
    { id: 7, skill: 'Figma', icon: 'basil:figma-outline' },
])

const frontend = ref([
    { id: 1, skill: 'Html', icon: 'icomoon-free:html-five' },
    { id: 2, skill: 'Css', icon: 'flowbite:css-solid' },
    { id: 3, skill: 'Js', icon: 'cib:js' },
    { id: 4, skill: 'Tailwind', icon: 'file-icons:tailwind' },
    { id: 5, skill: 'Bootstrap', icon: 'bi:bootstrap-fill' },
    { id: 6, skill: 'Vue.js', icon: 'akar-icons:vue-fill' },
])

const Backend = ref([
    { id: 1, skill: 'None.js', icon: 'akar-icons:node-fill' }
])

const Databases = ref([
    { id: 1, skill: 'Supabase', icon: 'bxl:supabase' },
    { id: 2, skill: 'Mysql', icon: 'cib:mysql' },
])
</script>

<template>
    <section class="w-full h-fit px-1 mt-10 light:bg-white bg-black">
        <main class="mx-auto max-w-5xl py-3 2xl:px-3 px-1 pt-4 border border-white/5 light:bg-white rounded-lg">
            <div
                class="text-white/70 light:text-black flex items-center justify-between border-b border-white/10 light:border-black/10 pb-3">
                <router-link to="/hero"
                    class="flex items-center justify-center gap-1 text-[12px] font-normal font-mono text-white/70 light:text-black/70">
                    BACK TO HOME
                </router-link>
                <span class="text-[12px] font-mono text-white/40 light:text-black/40">05 / SKILLS</span>
            </div>
            <div class="mt-8">
                <h1 class="font-Poppins light:text-black/50 text-white/50">Front End</h1>
                <div class="grid 2xl:grid-cols-7 grid-cols-5 gap-2.5 w-fit text-gray-500 mt-2">
                    <div v-for="front in frontend" :key="front.id">
                        <div
                            class="relative group flex items-center justify-center gap-3 rounded-2xl text-[13px] text-center text-gray-300 light:text-black">
                            <Icon :icon="front.icon" class="h-10 w-10 shrink-0 text-gray-500 hover:scale-120 transition"
                                aria-hidden="true" />
                            <div
                                class="absolute p-2 -top-15 translate-y-2 group-hover:translate-y-0 opacity-0 light:bg-black bg-white group-hover:scale-120 group-hover:opacity-100 transition-all duration-100">
                                <h1 class="light:text-white/60 text-black/70">{{ front.skill }}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-6">
                <h1 class="font-Poppins light:text-black/50 text-white/50">Back End</h1>
                <div class="grid 2xl:grid-cols-7 grid-cols-5 gap-2.5 w-fit text-gray-500 mt-2">
                    <div v-for="Back in Backend" :key="Back.id">
                        <div
                            class="relative group flex items-center justify-center gap-3 rounded-2xl text-[13px] text-center text-gray-300 light:text-black">
                            <Icon :icon="Back.icon" class="h-10 w-10 shrink-0 text-gray-500 hover:scale-120 transition"
                                aria-hidden="true" />
                            <div
                                class="absolute p-2 -top-15 translate-y-2 group-hover:translate-y-0 opacity-0 light:bg-black bg-white group-hover:scale-120 group-hover:opacity-100 transition-all duration-100">
                                <h1 class="light:text-white/60 text-black/70">{{ Back.skill }}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-6">
                <h1 class="font-Poppins light:text-black/50 text-white/50">Database</h1>
                <div class="grid 2xl:grid-cols-7 grid-cols-5 gap-2.5 w-fit text-gray-500 mt-2">
                    <div v-for="data in Databases" :key="data.id">
                        <div
                            class="relative group flex items-center justify-center gap-3 rounded-2xl text-[13px] text-center text-gray-300 light:text-black">
                            <Icon :icon="data.icon" class="h-10 w-10 shrink-0 text-gray-500 hover:scale-120 transition"
                                aria-hidden="true" />
                            <div
                                class="absolute p-2 -top-15 translate-y-2 group-hover:translate-y-0 opacity-0 light:bg-black bg-white group-hover:scale-120 group-hover:opacity-100 transition-all duration-100">
                                <h1 class="light:text-white/60 text-black/70">{{ data.skill }}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </section>
</template>