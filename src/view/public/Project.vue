<script setup>
import { ref, onMounted } from 'vue';
import { Globe } from '@lucide/vue';
import gsap from 'gsap';
import img1 from '/src/assets/logo - Copy - Copy.png'
import img2 from '/src/assets/628313668_1630552038265675_735309556789731096_n.jpg'
import img3 from '/src/assets/494642475_122133077852783934_881460682553165933_n.jpg'

const proj = ref(null)

const project = ref([
    {
        id: 1,
        title: "Web App",
        img: img1,
        sub: "Herb And Angel",
        par: "Online certification platform for beginners students and to showcase your knwolegde and soft skills.",
        year: "2025",
        view: Globe,
        link: "https://beginhub.vercel.app",
        svgs: 'move-up-right.svg'
    },
    {
        id: 2,
        title: "Web App",
        img: img2,
        sub: "SarahKeyk",
        par: "A digital marketing showcase designed to boost brand visibility and engagement through a visually appealing online.",
        year: "2025",
        view: Globe,
        link: "https://botikangwapo.github.io/SarahKeyk",
        svgs: 'move-up-right.svg'
    },
    {
        id: 3,
        title: "Web App",
        img: img3,
        sub: "Halamanerong Islander",
        par: "An immersive digital platform designed to highlight artisanal plant collections, optimized for brand growth.",
        year: "2025",
        view: Globe,
        link: "#",
        svgs: 'move-up-right.svg'
    }
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
    <section class="flex items-center justify-center w-full transition-colors duration-500 mt-10">
        <div class="w-full flex items-center justify-center flex-col mt-4">
            <!-- <div
                class="mx-auto max-w-5xl w-full py-3 2xl:px-3 px-1 flex items-center justify-between transition-colors duration-500">
                <h1 class="text-sm text-white/70 font-mono font-bold light:text-black/40">PROJECT</h1>
                <router-link to="/Projectmore"
                    class="flex items-center justify-center gap-1 text-[12px] font-normal font-mono text-white/70 light:text-black/70">
                    VIEW ALL
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor"
                        class="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                    </svg>
                </router-link>
            </div> -->

            <div
                class="mx-auto max-w-5xl w-full grid 2xl:grid-cols-3 md:grid-cols-3 grid-cols-1 pt-2 2xl:gap-4 gap-3.5">
                <div ref="proj" v-for="pro in project" :key="pro.id">
                    <div
                        class="p-6 grid grid-cols-1 gap-2.5 text-slate-100 light:text-gray-800 bg-[#0d0d0d] border border-white/10 light:bg-white light:border-black/10 transition-colors duration-500 rounded-2xl h-full shadow-2xl shadow-black/20 light:shadow-gray-300 hover:shadow-black/40 hover:light:shadow-gray-400 hover:-translate-y-2 transition-all duration-500">
                        <div class="flex items-start justify-start gap-4">
                            <img :src="pro.img" alt="" class="h-15 w-15 object-cover rounded-xl">
                            <div>
                                <h2 class="font-bold font-mono text-white/70 light:text-black/70">{{ pro.sub }}</h2>
                                <h1 class="text-xs font-Poppins text-white/30 light:text-black/50">{{ pro.title }}</h1>
                            </div>
                        </div>
                        <p class="text-sm font-space-mono leading-7 text-white/50 light:text-black/60 mt-5">{{ pro.par
                            }}</p>
                        <hr class="border-gray-200/10 light:border-gray-200/90">

                        <div
                            class="flex items-center justify-between gap-4 light:border-gray-200/50 transition-colors duration-500">
                            <a :href="pro.link" target="_blank"
                                class="text-xs light:hover:text-white/80 hover:text-black/80 transition-colors flex items-center gap-1 bg-black text-black light:bg-white light:text-white p-2 rounded-2xl border border-gray-200/10 light:border-gray-200/90">
                                <component :is="pro.view" class="w-5 h-5 light:text-black text-white" />
                            </a>
                            <p class="text-xs font-space-mono text-white/30 light:text-slate-950/40">{{ pro.year }} </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>