<script setup>
import { ref, onMounted, computed } from 'vue';
import gsap from 'gsap';
import { Globe, Gamepad2, Component, Code } from '@lucide/vue';
import designerImg from '/src/assets/Markdesigner.png'
import gamerImg from '/src/assets/Markgamerss.png'
import developerImg from '/src/assets/Marksss.png'
import img1 from '/src/assets/logo - Copy - Copy.png'
import img2 from '/src/assets/628313668_1630552038265675_735309556789731096_n.jpg'
import img3 from '/src/assets/494642475_122133077852783934_881460682553165933_n.jpg'
import { Icon } from '@iconify/vue';
import Footer from '../../components/Footer.vue'

const headlineRef = ref(null)
const paragraphRef = ref(null)
const buttonsRef = ref(null)
const parasec = ref(null)
const parathir = ref(null)
const imges = ref(null)
const habit = ref(null)
const active = ref('Gamer')
const currentImg = computed(() => tabs.find(t => t.label === active.value)?.img)
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

const tabs = [
    { icon: Gamepad2, label: 'Gamer', img: gamerImg },
    { icon: Component, label: 'Designer', img: designerImg },
    { icon: Code, label: 'Developer', img: developerImg },
]

const stats = [
    { value: "2+", label: "Years learning & building" },
    { value: "10+", label: "Projects completed" },
    { value: "7", label: "Tools & technologies" },
    { value: "100%", label: "Dedication to detail" },
];

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
    gsap.set([imges.value, headlineRef.value, paragraphRef.value, parasec.value, parathir.value, buttonsRef.value, habit.value], {
        opacity: 0,
        y: 30
    })

    gsap.to([imges.value, headlineRef.value, paragraphRef.value, parasec.value, parathir.value, buttonsRef.value, habit.value], {
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
    <section class="flex items-center justify-center 2xl:pt-20 pt-10">
        <div
            class="mx-auto max-w-5xl w-full h-auto 2xl:p-4 sm:p-6 p-2 gap-10 2xl:flex flex-row item-center justify-center">
            <div ref="imges" class="relative items-center justify-center gap-10 2xl:mt-0 mt-5 group">
                <Transition mode="out-in" enter-active-class="transition-opacity duration-300"
                    leave-active-class="transition-opacity duration-300" enter-from-class="opacity-0"
                    leave-to-class="opacity-0">
                    <img :key="currentImg" :src="currentImg" :alt="active"
                        class="w-180 2xl:h-94 md:h-70 h-72 block 2xl:object-cover object-contain grayscale-85 hover:grayscale-0 transition-all duration-500 cursor-pointer" />
                </Transition>

                <div
                    class="absolute z-100 opacity-0 scale-95 translate-y-2 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none -left-15 top-0 rounded-2xl rounded-br-none font-Poppins p-4 light:bg-black bg-white light:text-white text-black shadow-xl">
                    <h1 class="">Hello Everyone, It's me boss jervss.</h1>
                    <!-- Buntot ng message bubble (bottom-right) -->
                    <div
                        class="absolute -bottom-2 right-0 w-0 h-0 border-l-[10px] border-l-transparent border-t-[10px] light:border-t-black border-t-white">
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-3.5 2xl:mt-0 mt-5">

                <h1 ref="headlineRef"
                    class="font-black 2xl:text-5xl text-xl font-space-mono light:text-gray-900 text-gray-200">
                    Jervin Villones

                </h1>
                <p ref="paragraphRef"
                    class="font-Poppins font-normal tracking-wide 2xl:w-xl w-full 2xl:text-lg text-sm leading-7 light:text-black/60 text-gray-300">
                    I'm a <span class="font-bold">Front-end Developer</span> crafting seamless,
                    modern,
                    and animated
                    web
                    experiences.

                </p>
                <p ref="parasec"
                    class="font-Poppins font-normal tracking-wide 2xl:w-xl w-full 2xl:text-lg text-sm leading-7 light:text-black/60 text-gray-300">
                    I turn <span class="px-2 light:bg-gray-200 bg-white/20 rounded-full">business problems</span> into
                    clean, fast, and
                    easy-to-use
                    websites.
                </p>
                <p ref="parathir"
                    class="font-Poppins font-normal tracking-wide 2xl:text-lg text-sm leading-7 light:text-black/60 text-gray-300">
                    Always learning, always building. <span class="font-bold">Let's collaborate!</span>

                </p>
                <div ref="buttonsRef" class="grid grid-cols-2 items-center justify-center gap-2 2xl:w-fit w-full">
                    <button
                        class="font-Poppins 2xl:p-4 p-3 2xl:w-fit md:w-fit w-full bg-slate-50 light:bg-black light:text-white rounded-lg text-black text-sm font-medium tracking-widest flex items-center justify-center gap-4">
                        <a href="MarkJervinVilloneResume (2).pdf" download="MarkJervinVilloneResume (2).pdf"
                            target="_blank" rel="noopener noreferrer" class="flex items-center gap-2">Download CV

                        </a>
                    </button>
                    <button
                        class="2xl:p-4 p-3 2xl:w-fit md:w-fit w-full light:bg-white light:text-black bg-[#171717] rounded-lg text-white text-sm font-medium border border-gray-200/10 light:border-gray-200/90 tracking-widest flex items-center justify-center gap-4"><span>Connect
                            Now
                        </span>
                    </button>
                </div>
                <div ref="habit" class="flex items-center justify-start gap-2 2xl:w-fit w-full">
                    <button v-for="t in tabs" :key="t.label" @click="active = t.label" :title="t.label"
                        class="flex items-center justify-center rounded-2xl p-3 font-Poppins text-sm transition-colors duration-200"
                        :class="active === t.label
                            ? 'bg-black text-white'
                            : 'bg-gray-100 text-black/80 hover:bg-gray-200'">
                        <component :is="t.icon" class="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    </section>


    <!-- About -->
    <section ref="headlineRef" id="about" class="bg-black light:bg-white text-white px-2 md:px-6 py-10">
        <div class="max-w-5xl mx-auto w-full">
            <div
                class="mx-auto max-w-5xl w-full py-3 2xl:px-3 px-1 flex items-center justify-between transition-colors duration-500">
                <h1 class="text-sm text-white/30 font-mono light:text-black/60">GET TO KWON ME</h1>
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
                <!-- <div>
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
                </div> -->

                <!-- Right: stat cards -->
                <div class="grid grid-cols-2">
                    <div v-for="stat in stats" :key="stat.label"
                        class="bg-black/90 light:bg-white light:border-black/10 p-6 border-l border-b border-white/10">
                        <p class="text-md font-black font-mono text-gray-200 light:text-black">{{ stat.value }}
                        </p>
                        <p class="text-gray-300/60 font-normal font-Poppins light:text-black/40 text-sm mt-1 ">{{
                            stat.label }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- 
    <section>
        <div class="mx-auto max-w-5xl w-full">
            <img src="/src/assets/screencapture-botechka-vercel-app-2026-11-26-13_48_33.png" alt="" class="h-100 w-100">
        </div>
    </section> -->


    <!-- Project -->
    <section ref="paragraphRef"
        class="flex items-center justify-center w-full transition-colors duration-500 px-2 md:px-6">
        <div class="w-full flex items-center justify-center flex-col mt-4">
            <div
                class="mx-auto max-w-5xl w-full py-3 2xl:px-3 flex items-center justify-between transition-colors duration-500">
                <h1 class="text-sm text-white/30 font-mono light:text-black/60">PROJECT</h1>
                <router-link to="/Projectmore"
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
                            <img :src="pro.img" alt="" class="h-15 w-15 object-cover rounded-xl">
                            <div>
                                <h2 class="font-bold font-mono text-white/70 light:text-black/70">{{ pro.sub }}</h2>
                                <h1 class="text-xs font-Poppins text-white/30 light:text-black/50">{{ pro.title }}</h1>
                            </div>
                        </div>
                        <p class="text-sm font-Poppins leading-7 text-gray-300/60 light:text-black/60 mt-5">{{ pro.par
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

    <section ref="parasec">
        <div class="w-full flex items-center justify-center flex-col mt-10">
            <div
                class="mx-auto max-w-5xl w-full py-3 2xl:px-3 px-1 flex items-center justify-between transition-colors duration-500">
                <h1 class="text-sm text-white/30 font-mono light:text-black/60">WHAT I DO?</h1>
                <router-link to="/Projectmore"
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
                        <h1 class="font-medium text-white/70 light:text-black">{{ service.title }}</h1>
                        <p class="font-Poppins 2xl:text-[16px] text-sm text-gray-300/60 light:text-black/60 mt-1.5">
                            {{ service.description }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section ref="parathir" class=" w-auto h-fit p-2 light:bg-white bg-black">
        <main class="mx-auto max-w-5xl py-3 2xl:px-3 px-1 pt-4 border border-white/5 light:bg-white rounded-lg">
            <div class="text-white/70 light:text-black flex items-center justify-between">
                <h1 class="text-sm text-white/30 font-mono light:text-black/60">TECH STACK</h1>
                <router-link to="/Skills"
                    class="flex items-center justify-center gap-1 text-[12px] font-normal text-white/70 light:text-black/70">VIEW
                    ALL
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                        class="bi bi-arrow-right" viewBox="0 0 16 16 text-white/70">
                        <path fill-rule="evenodd"
                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                    </svg></router-link>
            </div>
            <div class="grid 2xl:grid-cols-7 grid-cols-5 gap-2.5 w-fit text-gray-500 pt-4">
                <div v-for="skills in skillsinfo" :key="skills.id">
                    <div
                        class="relative group flex items-center justify-center gap-3 rounded-2xl text-[13px] text-center text-gray-300 light:text-black">
                        <Icon :icon="skills.icon" class="h-10 w-10 shrink-0 text-gray-500 hover:scale-120 transition"
                            aria-hidden="true" />
                        <div
                            class="absolute p-2 -top-15 translate-y-2 group-hover:translate-y-0 opacity-0 light:bg-black bg-white group-hover:scale-120 group-hover:opacity-100 transition-all duration-100">
                            <h1 class="light:text-white/60 text-black/70">{{ skills.skill }}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </section>

    <Footer class="font-mono" />
</template>
