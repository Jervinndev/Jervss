<script setup>
import { ref, onMounted } from 'vue';
import { Globe } from '@lucide/vue';
import gsap from 'gsap';
import img1 from '/src/assets/logo - Copy - Copy.png'
import img2 from '/src/assets/628313668_1630552038265675_735309556789731096_n.jpg'
import img3 from '/src/assets/494642475_122133077852783934_881460682553165933_n.jpg'
import islanderProject from '/src/assets/Screenshot 2026-05-01 201959.png'
import sarahKeykProject from '/src/assets/Screenshot 2026-05-18 191618.png'
import beginHubProject from '/src/assets/Screenshot 2026-06-10 220301.png'
import botikaProject from '/src/assets/Screenshot 2026-07-05 181319.png'
import botechkaProject from '/src/assets/screencapture-botechka-vercel-app-2026-11-26-13_48_33.png'

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

const projectGallery = [
    [
        { id: 'beginhub', src: beginHubProject, alt: 'BeginHub project screenshot' },
        { id: 'islander', src: islanderProject, alt: 'Halamanerong Islander project screenshot' },
        { id: 'botika', src: botikaProject, alt: 'Botikangwapo project screenshot' },
    ],
    [
        { id: 'sarah-keyk', src: sarahKeykProject, alt: 'Sarah Keyk project screenshot' },
        { id: 'botechka', src: botechkaProject, alt: 'BoteChka project screenshot' },
        { id: 'beginhub-2', src: beginHubProject, alt: 'BeginHub project screenshot' },
    ],
    [
        { id: 'botika-2', src: botikaProject, alt: 'Botikangwapo project screenshot' },
        { id: 'islander-2', src: islanderProject, alt: 'Halamanerong Islander project screenshot' },
        { id: 'sarah-keyk-2', src: sarahKeykProject, alt: 'Sarah Keyk project screenshot' },
    ],
]


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
    <section class="w-full px-1 mt-10 transition-colors duration-500">
        <div class="mx-auto max-w-5xl w-full">
            <div class="flex items-center justify-between border-b border-white/10 light:border-black/10 py-3">
                <router-link to="/hero"
                    class="text-[12px] font-mono text-white/60 hover:text-white light:text-black/60 light:hover:text-black transition-colors">
                    BACK TO HOME
                </router-link>
                <span class="text-[12px] font-mono text-white/40 light:text-black/40">03 / PROJECT</span>
            </div>

            <div class="grid md:grid-cols-3 grid-cols-1 pt-5 gap-3.5 md:gap-4">
                <div ref="proj" v-for="pro in project" :key="pro.id">
                    <div
                        class="p-5 md:p-6 grid grid-cols-1 gap-2.5 text-slate-100 light:text-gray-800 bg-[#0d0d0d] border border-white/10 light:bg-white light:border-black/10 transition-colors duration-500 rounded-xl h-full shadow-2xl shadow-black/20 light:shadow-gray-300 hover:shadow-black/40 hover:light:shadow-gray-400 hover:-translate-y-1 transition-all duration-300">
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

            <section aria-labelledby="gallery-title" class="mt-8 border-t border-white/10 light:border-black/10 pt-6 pb-8">
                <div class="mb-4 flex items-end justify-between gap-4">
                    <div>
                        <p class="text-xs font-mono text-white/40 light:text-black/40">PROJECT ARCHIVE</p>
                        <h2 id="gallery-title" class="mt-1 font-Poppins text-lg font-medium text-white/80 light:text-black/80">
                            Selected screens
                        </h2>
                    </div>
                    <span class="text-[11px] font-mono text-white/35 light:text-black/40">A CLOSER LOOK</span>
                </div>
                <div class="grid grid-cols-2 md:grid-cols-3 gap-2.5 md:gap-3">
                    <div v-for="(column, columnIndex) in projectGallery" :key="columnIndex" class="flex flex-col gap-2.5 md:gap-3">
                        <img v-for="image in column" :key="image.id" :src="image.src" :alt="image.alt"
                            class="w-full aspect-[4/3] object-cover grayscale hover:grayscale-0 transition duration-500 rounded-lg border border-white/10 light:border-black/10">
                    </div>
                </div>
            </section>
        </div>
    </section>
</template>