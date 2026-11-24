<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';

const proj = ref(null)

const projects = ref([
    {
        id: 1,
        title: "Web App",
        sub: "BTKCARS",
        par: "Static automotive showcase platform featuring a curated vehicle catalog, high-quality image galleries, and a minimalist design for a seamless browsing ex",
        year: "2025",
        view: "View project",
        link: "https://botikangwapo.github.io/BTKCARS/"
    },
    {
        id: 2,
        title: "E-Commerce",
        sub: "Shopping Platform",
        par: "Full-stack e-commerce solution with product catalog, shopping cart, and payment integration.",
        year: "2024",
        view: "View project",
        link: "#"
    }
    // {
    //     id: 3,
    //     title: "Social Media",
    //     sub: "Community Network",
    //     par: "Social platform featuring user profiles, messaging, feeds, and real-time notifications.",
    //     year: "2024",
    //     view: "View project",
    //     link: "#"
    // },
    // {
    //     id: 4,
    //     title: "Task Manager",
    //     sub: "Productivity Tool",
    //     par: "Collaborative task management application with team features and deadline tracking.",
    //     year: "2024",
    //     view: "View project",
    //     link: "#"
    // },
    // {
    //     id: 5,
    //     title: "Weather App",
    //     sub: "Climate Forecast",
    //     par: "Weather forecasting application with real-time data, maps, and weather alerts.",
    //     year: "2023",
    //     view: "View project",
    //     link: "#"
    // },
])

onMounted(() => {
    gsap.set(proj.value, {
        opacity: 0,
        y: 30
    })

    gsap.to(proj.value, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
    })
})
</script>

<template>
    <section ref="proj"
        class="flex items-start justify-center w-full 2xl:pt-6 pt-1 pb-10 overflow-hidden h-screen bg-black/95 backdrop-blur-3xl light:bg-gray-50/90 transition-colors duration-500">
        <div class="2xl:p-3 p-5 w-full flex items-center justify-center flex-col">
            <div class="mx-auto max-w-7xl w-full pb-8">
                <router-link to="/"
                    class="flex items-center justify-start gap-3 pb-10 text-white light:text-Agray-900 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                    </svg>
                    Back to Home
                </router-link>
                <h1 class="text-slate-100 light:text-gray-900 font-black text-4xl pb-2 transition-colors">All Projects
                </h1>
                <p class="text-white/60 light:text-black/60 text-sm transition-colors">
                    Explore my complete portfolio of web applications and digital solutions
                </p>
            </div>

            <div
                class="mx-auto max-w-7xl w-full grid 2xl:grid-cols-3 md:grid-cols-3 grid-cols-1 pt-2 2xl:gap-4 gap-2.5">
                <div ref="proj" v-for="pro in projects" :key="pro.id">
                    <div
                        class="p-3 grid grid-cols-1 gap-3 text-slate-100 light:text-gray-800 bg-[#0d0d0d] border border-white/10 light:bg-transparent light:border-white/10 transition-colors duration-500 rounded-lg h-60">
                        <h1 class="text-sm text-white/30 light:text-black/40 ">{{ pro.title }}</h1>
                        <!-- <img :src="pro.img" alt="" class="h-40 w-full object-cover grayscale-100 hover:grayscale-0"> -->
                        <h2 class="font-bold text-white/70 light:text-black/70">{{ pro.sub }}</h2>
                        <p class="text-sm leading-7 text-white/50 light:text-gray-500 opacity-90">{{ pro.par }}</p>

                        <div
                            class="flex items-center justify-between gap-4 pt-4 border-t border-gray-200/5 light:border-gray-200/50 transition-colors duration-500">
                            <a :href="pro.link" target="_blank"
                                class="text-xs light:hover:text-black transition-colors flex items-center gap-1 bg-white text-black light:bg-black light:text-white px-3 py-1 rounded-md">
                                {{ pro.view }}
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="lucide lucide-move-up-right-icon lucide-move-up-right">
                                    <path d="M13 5H19V11" />
                                    <path d="M19 5L5 19" />
                                </svg>
                            </a>
                            <p class="text-xs text-white/30 light:text-black/30">{{ pro.year }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>