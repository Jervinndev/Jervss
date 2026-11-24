<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import { Icon } from '@iconify/vue';
import svg1 from '/src/assets/component.svg'
import svg2 from '/src/assets/laptop-minimal.svg'
import svg3 from '/src/assets/droplets.svg'

const des = ref(null)
const dev = ref(null)
const uiux = ref(null)

const tech = ref([
    {
        id: 1, title: "Design", svg: svg1, skills: "Graphic Designer"
    },
    {
        id: 2, title: "Dev", svg: svg2, skills: "Frontend Dev"
    },
    {
        id: 3, title: "UI/UX", svg: svg3, skills: "UI/UX Desinger"
    }
])
onMounted(() => {
    gsap.set(des.value, {
        opacity: 0,
        y: 30
    })

    gsap.to(des.value, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
    })
})

</script>


<template>
    <section
        class="w-full flex items-center justify-center text-start 2xl:p-3 p-3 overflow-hidden pt-5 bg-black light:bg-gray-50/70">
        <main class="mx-auto max-w-7xl w-full border border-white/5 light:bg-transparent rounded-lg">
            <div class="text-white/70 pl-3 pt-3 light:text-black">
                <h1 class="text-sm font-black">
                    WHAT I DO?
                </h1>
            </div>
            <div
                class="grid 2xl:grid-cols-3 md:grid-cols-3 grid-cols-1 2xl:gap-4 gap-3 3.5 mx-auto max-w-7xl wlight:bg-white-full p-3 pt-4">
                <div v-for="techs in tech" :key="tech.id"
                    class="flex items-center gap-3 light:border-black/10 bg-[#0d0d0d] light:bg-white border border-white/10 p-3 rounded-lg">
                    <div class="bg-white w-fit p-2.5 rounded-2xl">
                        <img :src="techs.svg" alt="" class="w-6 h-6" />
                    </div>
                    <div ref="des" class=" light:border-gray-200/50 light:bg-[#fefefe]">
                        <p class="font-bold text-md light:text-black/70 text-white/70">{{ techs.skills }}</p>
                        <h1 class="text-sm font-light text-white/30 light:text-black/50">{{ techs.title }}</h1>
                    </div>
                </div>
            </div>
        </main>
    </section>
</template>