<script setup>
import { ref, onMounted, computed } from 'vue';
import gsap from 'gsap';
import { Globe } from '@lucide/vue';
import designerImg from '/src/assets/Markdesigner.png'
import gamerImg from '/src/assets/Markgamerss.png'
import developerImg from '/src/assets/Marksss.png'
import img1 from '/src/assets/logo - Copy - Copy.png'
import img2 from '/src/assets/628313668_1630552038265675_735309556789731096_n.jpg'
import img3 from '/src/assets/494642475_122133077852783934_881460682553165933_n.jpg'

const headlineRef = ref(null)
const paragraphRef = ref(null)
const buttonsRef = ref(null)
const parasec = ref(null)
const parathir = ref(null)
const imges = ref(null)
const habit = ref(null)
const active = ref('gamer')
const currentImg = computed(() => tabs.find(t => t.key === active.value).img)
const proj = ref(null)

const project = ref([
    {
        id: 1,
        title: "Web App",
        img: img1,
        sub: "Beginhub",
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
        sub: "Sarah Keyk",
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

const tabs = [
    { key: 'gamer', label: 'Gamer', img: gamerImg },
    { key: 'designer', label: 'Designer', img: designerImg },
    { key: 'developer', label: 'Developer', img: developerImg },
]

const stats = [
    { value: "2+", label: "Years learning & building" },
    { value: "10+", label: "Projects completed" },
    { value: "7", label: "Tools & technologies" },
    { value: "100%", label: "Dedication to detail" },
];

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
    <section class="flex items-center justify-center 2xl:pt-20 pt-10">
        <div
            class="mx-auto max-w-5xl w-full h-auto overflow-hidden 2xl:p-4 sm:p-6 p-2 gap-10 2xl:flex flex-row item-center justify-center">
            <div ref="imges" class="items-center justify-center gap-10 2xl:mt-0 mt-5">
                <Transition mode="out-in" enter-active-class="transition-opacity duration-300"
                    leave-active-class="transition-opacity duration-300" enter-from-class="opacity-0"
                    leave-to-class="opacity-0">
                    <img :key="currentImg" :src="currentImg" :alt="active"
                        class="w-180 2xl:h-94 md:h-70 h-72 block 2xl:object-cover object-contain hover:grayscale-0 transition-all duration-500" />
                </Transition>
            </div>
            <div class="flex flex-col gap-3.5 2xl:mt-0 mt-5">

                <h1 ref="headlineRef"
                    class="font-black 2xl:text-5xl text-3xl font-space-mono light:text-gray-900 text-gray-200">
                    Jervin Villones

                </h1>
                <p ref="paragraphRef"
                    class="font-Poppins font-normal tracking-wide 2xl:w-xl w-full 2xl:text-lg text-sm leading-7 light:text-black/60 text-white/90">
                    I'm a <span class="font-bold">Front-end Developer</span> crafting seamless,
                    modern,
                    and animated
                    web
                    experiences.

                </p>
                <p ref="parasec"
                    class="font-Poppins font-normal tracking-wide 2xl:w-xl w-full 2xl:text-lg text-sm leading-7 light:text-black/60 text-white/90">
                    I turn <span class="p-2 light:bg-gray-200 bg-white/20 rounded-xs">business problems</span> into
                    clean, fast, and
                    easy-to-use
                    websites. I
                    start with your
                    customers
                    and goals, so every design has a purpose.

                </p>
                <p ref="parathir"
                    class="font-Poppins font-normal tracking-wide 2xl:text-lg text-sm leading-7 light:text-black/60 text-white/90">
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
                    <button v-for="t in tabs" :key="t.key" @click="active = t.key"
                        class="flex items-center justify-center rounded-2xl px-4 py-2 font-Poppins text-sm transition-colors duration-200"
                        :class="active === t.key
                            ? 'bg-black text-white'
                            : 'bg-gray-100 text-black/80 hover:bg-gray-200'">
                        {{ t.label }}
                    </button>
                </div>
            </div>
        </div>
    </section>

    <section id="about" class="bg-black light:bg-white text-white px-2 md:px-6 py-10">
        <div class="max-w-5xl mx-auto w-full">
            <p class=" text-sm text-white/30 font-mono font-bold light:text-slate-950/40 mb-3">GET TO KNOW ME</p>
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
                        class="bg-[#0d0d0d] light:bg-white light:border-black/10 p-6 border-l border-b border-white/10">
                        <p class="text-3xl font-black font-mono text-gray-200 light:text-black">{{ stat.value }}
                        </p>
                        <p class="text-white/30 font-normal font-Poppins light:text-black/40 text-sm mt-1 ">{{
                            stat.label }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="flex items-center justify-center w-full transition-colors duration-500 mt-10 px-2 md:px-6">
        <div class="w-full flex items-center justify-center flex-col mt-4">
            <div
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
            </div>

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
