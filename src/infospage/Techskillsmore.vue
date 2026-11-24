<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';

const categoriesRef = ref(null)
const skillsRefs = ref([])
const section = ref(null)


const frontendSkills = ref([
    { id: 1, skill: 'HTML5' },
    { id: 2, skill: 'CSS3' },
    { id: 3, skill: 'JavaScript' },
    { id: 4, skill: 'Vue.js' },
    { id: 5, skill: 'Tailwind' },
    { id: 6, skill: 'Bootstrap' },
])

const backendSkills = ref([
    { id: 1, skill: 'Node.js' },
    { id: 2, skill: 'Express.js' },
    { id: 7, skill: 'Authentication' },
])

const databaseSkills = ref([
    { id: 1, skill: 'Supabase' },
    { id: 2, skill: 'MySQL' },
    { id: 3, skill: 'PostgreSQL' },
    { id: 5, skill: 'SQL' },
])

onMounted(() => {
    if (categoriesRef.value) {
        gsap.set(categoriesRef.value, {
            opacity: 0,
            y: 30
        })

        gsap.to(categoriesRef.value, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out'
        })
    }

    skillsRefs.value.forEach((el) => {
        gsap.set(el, {
            opacity: 0,
            y: 20
        })

        gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: 0.3,
            stagger: 0.05,
            ease: 'power3.out'
        })
    })

})

onMounted(() => {
    gsap.set(section.value, {
        opacity: 0,
        y: 30
    })

    gsap.to(section.value, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
    })

})

</script>

<template>
    <section ref="section"
        class="w-full flex items-start justify-center p-3 2xl:pt-14 pt-4 pb-5 h-screen transition-colors duration-500 light:bg-gray-50 bg-black/95">
        <div
            class="mx-auto max-w-7xl w-full p-3 bg-[#0d0d0d] light:bg-white border border-white/10 2xl:p-6  transition-colors duration-500 rounded-lg">

            <div class="text-white/70 light:text-black/70 pb-6 transition-colors">
                <router-link to="/" class="flex items-center justify-start gap-3 pb-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                    </svg>
                    Back to Home
                </router-link>
                <h1 class="font-black text-4xl text-white light:text-black">Tech Skills Breakdown</h1>
                <p class="text-white/50 light:text-black/50 font-normal pt-2 transition-colors">Comprehensive overview
                    of my
                    technical expertise</p>
            </div>

            <div class="pb-8">
                <h3 class="text-white/70 light:text-black/70 font-black text-md pb-4 pt-4 transition-colors">Frontend
                    Stack
                </h3>
                <div class="grid 2xl:grid-cols-5 grid-cols-3 gap-2.5 w-fit">
                    <div v-for="skill in frontendSkills" :key="skill.id" :ref="el => skillsRefs.push(el)">
                        <div
                            class="flex items-center justify-start gap-2 border border-white/15 rounded-2xl light:border-gray-200/50 p-1.5 text-[13px] text-center text-gray-300 light:text-black">
                            <Icon :icon="skill.icon" class="text-[16px]" />
                            <p class="text-white/50 light:text-black/50 text-sm font-medium transition-colors">{{
                                skill.skill }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="pb-8">
                <h3 class="text-white/70 light:text-black/70 font-black text-md pb-4 transition-colors">Backend Stack
                </h3>
                <div class="grid 2xl:grid-cols-5 grid-cols-2 gap-2.5 w-fit">
                    <div v-for="skill in backendSkills" :key="skill.id" :ref="el => skillsRefs.push(el)">
                        <div
                            class="flex items-center justify-start gap-2 border border-white/15 rounded-2xl light:border-gray-200/50 p-1.5 text-[13px] text-center text-gray-300 light:text-black">
                            <Icon :icon="skill.icon" class="text-[16px]" />
                            <p class="text-white/50 light:text-black/50 text-sm font-medium transition-colors">{{
                                skill.skill }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h3 class="text-white/70 light:text-black/70 font-black text-md pb-4 transition-colors">Database Stack
                </h3>
                <div class="grid 2xl:grid-cols-5 grid-cols-3 gap-2.5 w-fit">
                    <div v-for="skill in databaseSkills" :key="skill.id" :ref="el => skillsRefs.push(el)">
                        <div
                            class="flex items-center justify-center gap-2 border border-white/15 rounded-2xl light:border-gray-200/50 p-1.5 text-[13px] text-center text-gray-300 light:text-black">
                            <p class="text-white/50 light:text-black/50 text-sm font-medium transition-colors">{{
                                skill.skill }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>