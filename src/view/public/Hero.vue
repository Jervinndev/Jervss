<script setup>
import { ref, onMounted, computed } from 'vue';
import gsap from 'gsap';
import Project from '../../view/public/Project.vue';
import About from '../../view/public/about.vue';

import designerImg from '/src/assets/Markdesigner.png'
import gamerImg from '/src/assets/Markgamerss.png'
import developerImg from '/src/assets/Marksss.png'

const headlineRef = ref(null)
const paragraphRef = ref(null)
const buttonsRef = ref(null)
const parasec = ref(null)
const parathir = ref(null)
const imges = ref(null)

const tabs = [
    { key: 'gamer', label: 'Gamer', img: gamerImg },
    { key: 'designer', label: 'Designer', img: designerImg },
    { key: 'developer', label: 'Developer', img: developerImg },
]


onMounted(() => {
    gsap.set([imges.value, headlineRef.value, paragraphRef.value, parasec.value, parathir.value, buttonsRef.value], {
        opacity: 0,
        y: 30
    })

    gsap.to([imges.value, headlineRef.value, paragraphRef.value, parasec.value, parathir.value, buttonsRef.value], {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
    })
})

const active = ref('gamer')
const currentImg = computed(() => tabs.find(t => t.key === active.value).img)

</script>

<template>
    <section class="flex items-center justify-center 2xl:pt-20 pt-10">
        <div
            class="mx-auto max-w-5xl w-full h-auto overflow-hidden 2xl:p-4 sm:p-6 p-0 gap-10 2xl:flex flex-row item-center justify-center">
            <div ref="imges" class="items-center justify-center gap-10">
                <Transition mode="out-in" enter-active-class="transition-opacity duration-300"
                    leave-active-class="transition-opacity duration-300" enter-from-class="opacity-0"
                    leave-to-class="opacity-0">
                    <img :key="currentImg" :src="currentImg" :alt="active"
                        class="w-180 2xl:h-94 md:h-70 block 2xl:object-cover object-contain hover:grayscale-0 transition-all duration-500" />
                </Transition>
            </div>
            <div class="flex flex-col gap-3.5 2xl:mt-0 mt-5">

                <h1 ref="headlineRef"
                    class="font-black 2xl:text-5xl text-3xl  font-space-mono light:text-gray-900 text-gray-200">
                    Jervin Villones

                </h1>
                <p ref="paragraphRef"
                    class="font-Poppins font-normal tracking-wide w-xl 2xl:text-lg text-md leading-7 light:text-black/60 text-white/90">
                    I'm a <span class="font-bold">Front-end Developer</span> crafting seamless,
                    modern,
                    and animated
                    web
                    experiences.

                </p>
                <p ref="parasec"
                    class="font-Poppins font-normal tracking-wide w-xl 2xl:text-lg text-md leading-7 light:text-black/60 text-white/90">
                    I turn business problems into clean, fast, and easy-to-use websites. I start with your customers
                    and goals, so every design has a purpose.

                </p>
                <p ref="parathir"
                    class="font-Poppins font-normal tracking-wide 2xl:text-lg text-md leading-7 light:text-black/60 text-white/90">
                    Always learning, always building. <span class="font-bold">Let's collaborate!</span>

                </p>
                <div ref="buttonsRef" class="grid grid-cols-2 items-center justify-center gap-2 2xl:w-fit w-full">
                    <button
                        class="font-Poppins p-4 2xl:w-fit md:w-fit w-full bg-slate-50 light:bg-black light:text-white rounded-lg text-black text-sm font-medium tracking-widest flex items-center justify-center gap-4">
                        <a href="/MarkJervinVilloneResume (2).pdf" download="MarkJervinVilloneResume (2).pdf"
                            target="_blank" rel="noopener noreferrer" class="flex items-center gap-2">Download CV

                        </a>
                    </button>
                    <button
                        class="p-4 2xl:w-fit md:w-fit w-full light:bg-white light:text-black bg-[#171717] rounded-lg text-white text-sm font-medium border border-gray-200/10 light:border-gray-200/90 tracking-widest flex items-center justify-center gap-4"><span>Connect
                            Now
                        </span>
                    </button>
                </div>
                <div class="flex items-center justify-start gap-2 2xl:w-fit w-full">
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
    <About />

    <Project />
</template>
