<script setup>
import { ref, onMounted, computed } from 'vue';
import gsap from 'gsap';
import { Globe, Gamepad2, Component, Code, Handshake } from '@lucide/vue';
import designerImg from '/src/assets/Markdesigner.png'
import gamerImg from '/src/assets/Markgamerss.png'
import developerImg from '/src/assets/Marksss.png'
import img1 from '/src/assets/logo - Copy - Copy.png'
import img2 from '/src/assets/628313668_1630552038265675_735309556789731096_n.jpg'
import img3 from '/src/assets/494642475_122133077852783934_881460682553165933_n.jpg'
import islanderProject from '/src/assets/Screenshot 2026-05-01 201959.png'
import sarahKeykProject from '/src/assets/Screenshot 2026-05-18 191618.png'
import beginHubProject from '/src/assets/Screenshot 2026-06-10 220301.png'
import botikaProject from '/src/assets/Screenshot 2026-07-05 181319.png'
import botechkaProject from '/src/assets/screencapture-botechka-vercel-app-2026-11-26-13_48_33.png'
import { Icon } from '@iconify/vue';
import Footer from '../../components/Footer.vue'

const parasec = ref(null)
const parathir = ref(null)
const active = ref('Gamer')
const currentImg = computed(() => tabs.find(t => t.label === active.value)?.img)
const proj = ref([])

const highlights = [
    { number: '01', title: 'Thoughtful design', description: 'Clear layouts and considered details make every screen feel easy to use.' },
    { number: '02', title: 'Front-end craft', description: 'Responsive, interactive experiences built with modern front-end tools.' },
    { number: '03', title: 'Always learning', description: 'Each project is a chance to improve, experiment, and build with more care.' },
]

const stats = [
    { value: '2+', label: 'Years learning & building' },
    { value: '10+', label: 'Projects completed' },
    { value: '7', label: 'Tools & technologies' },
    { value: '100%', label: 'Attention to detail' },
]

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
        title: " Static Web App",
        img: img2,
        sub: "Sarah Keyk",
        par: "A digital marketing showcase designed to boost brand visibility and engagement through a visually appealing online.",
        year: "2025",
        view: Globe,
        link: "https://botikangwapo.github.io/SarahKeyk",
        svgs: 'move-up-right.svg'
    },
    {
        id: 3,
        title: "Static Web App",
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
    ],
    [
        { id: 'sarah-keyk', src: sarahKeykProject, alt: 'Sarah Keyk project screenshot' },
        { id: 'botika', src: botikaProject, alt: 'Botikangwapo project screenshot' },
        { id: 'beginhub-2', src: beginHubProject, alt: 'BeginHub project screenshot' },
    ],
    [
        { id: 'botechka', src: botechkaProject, alt: 'BoteChka project screenshot' },
        { id: 'islander-2', src: islanderProject, alt: 'Halamanerong Islander project screenshot' },
        { id: 'sarah-keyk-2', src: sarahKeykProject, alt: 'Sarah Keyk project screenshot' },
        { id: 'botika-2', src: botikaProject, alt: 'Botikangwapo project screenshot' },
    ],
]

const tabs = [
    { icon: Gamepad2, label: 'Gamer', img: gamerImg },
    { icon: Component, label: 'Designer', img: designerImg },
    { icon: Code, label: 'Developer', img: developerImg },
]

// const stats = [
//     { value: "2+", label: "Years learning & building" },
//     { value: "10+", label: "Projects completed" },
//     { value: "7", label: "Tools & technologies" },
//     { value: "100%", label: "Dedication to detail" },
// ];

const services = [
    {
        id: 1,
        title: "Wed Design",
        description: "I create clean, responsive website layouts that make your brand easy to recognize and your content easy to explore."
    },
    {
        id: 2,
        title: "Grapich Designer",
        description: "I create eye-catching graphics and visual assets that help communicate your message and strengthen your brand."
    },
    {
        id: 3,
        title: "Wed Development",
        description: "I build responsive, interactive websites with modern front-end technologies and a focus on usability."
    },
    {
        id: 4,
        title: "Custome Software",
        description: "I develop software tailored to your needs, helping simplify tasks and solve specific business problems."
    },
    {
        id: 5,
        title: "UI/UX Design",
        description: "I design intuitive interfaces and clear user flows to make digital products simple and enjoyable to use."
    }
];

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

onMounted(() => {
    const sectionTargets = [parasec.value, parathir.value].filter(Boolean)

    gsap.set(sectionTargets, {
        opacity: 0,
        y: 30
    })

    gsap.to(sectionTargets, {
        opacity: 1,
        y: 0,
        duration: 0.3,
        stagger: 0.2,
        ease: 'power3.out'
    })
})

</script>

<template>
    <!-- Hero -->
    <section class="w-full px-1 mt-10 transition-colors duration-500">
        <main class="mx-auto max-w-5xl w-full">
            <div class="flex items-center justify-between border-b border-white/10 light:border-black/10 py-3">
                <span class="text-[12px] font-mono text-white/40 light:text-black/40">01 / HOME</span>
            </div>

            <div class="grid md:grid-cols-[1.2fr_0.8fr] gap-8 md:gap-10 items-center py-8 md:py-10">
                <div class="2xl:order-1 order-2">
                    <p class="text-xs font-mono tracking-widest text-white/40 light:text-black/40">GET TO KNOW ME</p>
                    <h1
                        class="mt-4 font-black font-space-mono text-3xl sm:text-4xl md:text-5xl leading-tight text-white light:text-black">
                        Building digital experiences with purpose.
                    </h1>
                    <p
                        class="mt-5 max-w-2xl font-Poppins text-sm md:text-base leading-7 text-white/55 light:text-black/60">
                        I’m Mark Jervin Villones, a front-end developer from Binangonan, Rizal. I turn ideas into clean,
                        responsive websites that are easy to explore and enjoyable to use.
                    </p>
                    <p
                        class="mt-3 max-w-2xl font-Poppins text-sm md:text-base leading-7 text-white/55 light:text-black/60">
                        I care about thoughtful UI/UX, maintainable code, and the small details that bring an interface
                        together. I’m always learning, building, and looking for ways to make my next project better.
                    </p>
                    <div class="mt-6 flex flex-wrap gap-2">
                        <span v-for="skill in ['Front-end development', 'UI/UX', 'Visual design']" :key="skill"
                            class="rounded-full border border-white/10 light:border-black/10 px-3 py-1.5 text-xs font-mono text-white/55 light:text-black/55">
                            {{ skill }}
                        </span>
                    </div>
                </div>

                <div class="relative mx-auto w-full max-w-sm order-1">
                    <div class="absolute -inset-2 rounded-xl border border-white/10 light:border-black/10"></div>
                    <div
                        class="relative overflow-hidden rounded-lg border border-white/10 light:border-black/10 bg-[#0d0d0d] light:bg-white">
                        <img :src="developerImg" alt="Mark Jervin Villones, front-end developer"
                            class="aspect-[4/4.2] w-full object-cover grayscale hover:grayscale-0 transition duration-500" />
                        <div
                            class="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/90 to-transparent px-4 pb-4 pt-12">
                            <div>
                                <p class="font-mono text-sm text-white">Mark Jervin Villones</p>
                                <p class="mt-1 text-xs font-Poppins text-white/60">Front-end Developer</p>
                            </div>
                            <span class="text-[11px] font-mono text-white/55">RIZAL, PH</span>
                        </div>
                    </div>
                </div>
            </div>

            <section aria-labelledby="approach-title" class="border-t border-white/10 light:border-black/10 py-7">
                <div class="mb-4 flex items-end justify-between gap-4">
                    <div>
                        <p class="text-xs font-mono text-white/40 light:text-black/40">WHAT I BRING</p>
                        <h2 id="approach-title"
                            class="mt-1 font-Poppins text-lg font-medium text-white/80 light:text-black/80">
                            My approach
                        </h2>
                    </div>
                    <router-link to="/whatido"
                        class="shrink-0 text-[11px] font-mono text-white/50 hover:text-white light:text-black/50 light:hover:text-black transition-colors">
                        EXPLORE SERVICES ↗
                    </router-link>
                </div>
                <div class="grid md:grid-cols-3 gap-3">
                    <article v-for="item in highlights" :key="item.number"
                        class="rounded-lg border border-white/10 light:border-black/10 bg-[#0d0d0d] light:bg-white p-4 md:p-5">
                        <p class="font-mono text-xs text-white/35 light:text-black/35">{{ item.number }}</p>
                        <h3 class="mt-4 font-Poppins text-sm font-medium text-white/80 light:text-black/80">{{
                            item.title }}</h3>
                        <p class="mt-2 font-Poppins text-xs leading-6 text-white/45 light:text-black/55">{{
                            item.description }}</p>
                    </article>
                </div>
            </section>

            <section aria-label="Portfolio highlights"
                class="grid grid-cols-2 md:grid-cols-4 border-t border-white/10 light:border-black/10 mb-8">
                <div v-for="(stat, index) in stats" :key="stat.label"
                    class="py-4 px-3 md:px-4 border-b md:border-b-0 border-white/10 light:border-black/10"
                    :class="index < stats.length - 1 ? 'md:border-r' : ''">
                    <p class="font-mono text-xl font-bold text-white/80 light:text-black/80">{{ stat.value }}</p>
                    <p class="mt-1 font-Poppins text-[11px] leading-5 text-white/40 light:text-black/50">{{ stat.label
                        }}</p>
                </div>
            </section>
        </main>
    </section>


    <!-- About -->
    <!-- <section ref="headlineRef" id="about" class="bg-black light:bg-white text-white px-2 md:px-6 py-10">
        <div class="max-w-5xl mx-auto w-full">
            <div
                class="mx-auto max-w-5xl w-full py-3 2xl:px-3 px-1 flex items-center justify-between transition-colors duration-500">
                <h1 class="text-sm text-white/50 font-mono light:text-black/60">GET TO KWON ME</h1>
                <router-link to="/about"
                    class="flex items-center justify-center gap-1 text-[12px] font-normal font-mono text-white/70 light:text-black/70">
                    VIEW ALL
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor"
                        class="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                    </svg>
                </router-link>
            </div>
            <div class="grid gap-14 items-start">
                <div>
                    <h2
                        class="font-black uppercase leading-[0.95] text-gray-200 light:text-black text-3xl 2xl:text-5xl tracking-tight mb-4">
                        About Me
                    </h2>

                    <p
                        class="text-white/50 2xl:text-lg text-sm light:text-black/60 tracking-wide font-normal leading-7 mb-4">
                        I'm Mark Jervin Anain Villones, a front-end developer based in
                        Binangonan, Rizal. I build clean, responsive, and animated
                        interfaces turning ideas into interactive experiences that feel
                        good to use.
                    </p>
                    <p
                        class="text-white/50 2xl:text-lg text-sm light:text-black/60 tracking-wide font-normal leading-7 mb-4">
                        My focus is on writing maintainable code, thoughtful UI/UX, and
                        bringing designs to life with smooth motion and attention to
                        detail. Still learning, always building.
                    </p>
                </div>

                 Right: stat cards
                <div class="grid grid-cols-2">
                    <div v-for="stat in stats" :key="stat.label"
                        class="bg-black/90 light:bg-white light:border-black/10 p-6 border-l border-b border-white/10">
                        <p class="text-md font-black font-mono text-gray-200 light:text-black">{{ stat.value }}
                        </p>
                        <p class="text-white/60 font-normal font-Poppins light:text-black/40 text-sm mt-1 ">{{
                            stat.label }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section> -->

    <!-- Project -->
    <section class="flex items-center justify-center w-full transition-colors duration-500 px-2 md:px-6">
        <div class="w-full flex items-center justify-center flex-col mt-4">
            <div
                class="mx-auto max-w-5xl w-full py-3 2xl:px-3 flex items-center justify-between transition-colors duration-500">
                <h1 class="text-sm text-white/50 font-mono light:text-black/60">03 / PROJECT</h1>
                <router-link to="/projects"
                    class="flex items-center justify-center gap-1 text-[12px] font-normal font-mono text-white/70 light:text-black/70">
                    VIEW ALL
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor"
                        class="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                    </svg>
                </router-link>
            </div>
            <div
                class="mx-auto max-w-5xl w-full grid 2xl:grid-cols-3 md:grid-cols-3 grid-cols-1 pt-2 2xl:gap-4 gap-3.5">
                <div ref="proj" v-for="pro in project" :key="pro.id">
                    <div
                        class="p-6 grid grid-cols-1 gap-2.5 text-slate-100 light:text-gray-800 bg-black/90 border border-white/10 light:bg-white light:border-black/10 transition-colors duration-500 rounded-2xl h-full shadow-2xl shadow-black/60 light:shadow-gray-300/30 hover:-translate-y-2 transition-all duration-500">
                        <div class="flex items-start justify-start gap-4">
                            <img :src="pro.img" alt="" class="h-13 w-14 object-cover rounded-xl">
                            <div>
                                <h2 class="font-bold font-mono text-white/90 light:text-black/70">{{ pro.sub }}</h2>
                                <h1 class="text-xs font-Poppins text-white/50 light:text-black/50">{{ pro.title }}</h1>
                            </div>
                        </div>
                        <p class="text-sm font-Poppins leading-7 text-white/60 light:text-black/60 mt-5">{{ pro.par
                        }}</p>
                        <hr class="border-gray-200/10 light:border-gray-200/90">

                        <div
                            class="flex items-center justify-between gap-4 light:border-gray-200/50 transition-colors duration-500">
                            <a :href="pro.link" target="_blank"
                                class="text-xs light:hover:text-white/80 hover:text-black/80 transition-colors flex items-center gap-1 bg-black text-black light:bg-white light:text-white p-2 rounded-2xl border border-gray-200/10 light:border-gray-200/90">
                                <component :is="pro.view" class="w-5 h-5 light:text-black text-white" />
                            </a>
                            <p class="text-xs font-space-mono text-white/50 light:text-slate-950/40">{{ pro.year }} </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="w-full px-2 md:px-6">
        <div class="mx-auto max-w-5xl w-full border-t border-white/10 light:border-black/10 mt-7 pt-6">
            <div class="mb-4 flex items-end justify-between gap-4">
                <div>
                    <p class="text-xs font-mono text-white/40 light:text-black/40">PROJECT ARCHIVE</p>
                    <h2 class="mt-1 font-Poppins text-lg font-medium text-white/80 light:text-black/80">Selected screens
                    </h2>
                </div>
                <router-link to="/projects"
                    class="text-[11px] font-mono text-white/50 hover:text-white light:text-black/50 light:hover:text-black transition-colors">
                    VIEW ALL PROJECTS ↗
                </router-link>
            </div>
            <div class="grid grid-cols-3 md:grid-cols-3 gap-2 sm:gap-3">
                <div v-for="(column, columnIndex) in projectGallery" :key="columnIndex"
                    class="flex flex-col gap-2 sm:gap-3">
                    <img v-for="image in column" :key="image.id" :src="image.src" :alt="image.alt"
                        class="w-full aspect-[4/3] object-cover grayscale hover:grayscale-0 transition duration-500 rounded-lg border border-white/10 light:border-black/10">
                </div>
            </div>
        </div>
    </section>

    <section ref="parasec">
        <div class="w-full flex items-center justify-center flex-col mt-10">
            <div
                class="mx-auto max-w-5xl w-full py-3 2xl:px-3 px-1 flex items-center justify-between transition-colors duration-500">
                <h1 class="text-sm text-white/50 font-mono light:text-black/60">04 / SERVICES</h1>
                <router-link to="/whatido"
                    class="flex items-center justify-center gap-1 text-[12px] font-normal font-mono text-white/70 light:text-black/70">
                    VIEW ALL
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor"
                        class="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                    </svg>
                </router-link>
            </div>
            <div
                class="mx-auto max-w-5xl w-full py-3 2xl:px-3 px-1 flex flex-col items-center justify-between transition-colors duration-500">
                <div v-for="service in services" :key="service.id"
                    class="flex items-start justify-start gap-4 border-b light:border-black/10 border-white/10 p-4 w-full">
                    <h1 class="font-mono text-white light:text-black/60">{{ String(service.id).padStart(2, '0') }}</h1>
                    <div>
                        <h1 class="font-medium text-white/90 light:text-black">{{ service.title }}</h1>
                        <p class="font-Poppins 2xl:text-[16px] text-sm text-white/60 light:text-black/60 mt-1.5">
                            {{ service.description }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section ref="parathir" class=" w-auto h-fit p-2 light:bg-white">
        <main class="mx-auto max-w-5xl py-3 2xl:px-3 px-1 pt-4 border border-white/5 light:bg-white rounded-lg">
            <div class="text-white/70 light:text-black flex items-center justify-between">
                <h1 class="text-sm text-white/50 font-mono light:text-black/60">05 / SKILLS</h1>
                <router-link to="/Skills"
                    class="flex items-center justify-center gap-1 text-[12px] font-normal text-white/70 light:text-black/70">VIEW
                    ALL
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                        class="bi bi-arrow-right text-white/70" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                    </svg></router-link>
            </div>
            <div class="mt-8">
                <h1 class="font-Poppins light:text-black/50 text-white/70">Front End</h1>
                <div class="grid 2xl:grid-cols-7 grid-cols-5 gap-2.5 w-fit text-gray-500 mt-2">
                    <div v-for="front in frontend" :key="front.id">
                        <div
                            class="relative group flex items-center justify-center gap-3 rounded-2xl text-[13px] text-center text-gray-300 light:text-black">
                            <Icon :icon="front.icon"
                                class="h-10 w-10 shrink-0 light:text-black/50 text-white/50 hover:scale-120 transition"
                                aria-hidden="true" />
                            <div
                                class="absolute p-2 -top-15 translate-y-2 group-hover:translate-y-0 opacity-0 light:bg-black bg-white group-hover:scale-120 group-hover:opacity-100 transition-all duration-100">
                                <h1 class="light:text-white text-black/70">{{ front.skill }}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-6">
                <h1 class="font-Poppins light:text-black/50 text-white/70">Back End</h1>
                <div class="grid 2xl:grid-cols-7 grid-cols-5 gap-2.5 w-fit text-gray-500 mt-2">
                    <div v-for="Back in Backend" :key="Back.id">
                        <div
                            class="relative group flex items-center justify-center gap-3 rounded-2xl text-[13px] text-center text-gray-300 light:text-black">
                            <Icon :icon="Back.icon"
                                class="h-10 w-10 shrink-0 light:text-black/50 text-white/50 hover:scale-120 transition"
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
                <h1 class="font-Poppins light:text-black/50 text-white/70">Database</h1>
                <div class="grid 2xl:grid-cols-7 grid-cols-5 gap-2.5 w-fit text-gray-500 mt-2">
                    <div v-for="data in Databases" :key="data.id">
                        <div
                            class="relative group flex items-center justify-center gap-3 rounded-2xl text-[13px] text-center text-gray-300 light:text-black">
                            <Icon :icon="data.icon"
                                class="h-10 w-10 shrink-0 light:text-black/50 text-white/50 hover:scale-120 transition"
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

    <Footer class="font-mono" />
</template>
