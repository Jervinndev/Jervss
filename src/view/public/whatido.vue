<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import { Icon } from '@iconify/vue';
import svg1 from '/src/assets/component.svg'
import svg2 from '/src/assets/laptop-minimal.svg'
import svg3 from '/src/assets/droplets.svg'

const servicesRef = ref(null)

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
    gsap.fromTo(servicesRef.value.children, {
        opacity: 0,
        y: 30
    }, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
    })
})

</script>


<template>
    <section ref="parasec">
        <div class="w-full flex items-center justify-center flex-col mt-10">
            <div
                class="mx-auto max-w-5xl w-full py-3 2xl:px-3 px-1 flex items-center justify-between border-b border-white/10 light:border-black/10 transition-colors duration-500">
                <router-link to="/hero"
                    class="flex items-center justify-center gap-1 text-[12px] font-normal font-mono text-white/70 light:text-black/70">BACK
                    TO HOME
                </router-link>
                <span class="text-[12px] font-mono text-white/40 light:text-black/40">04 / SERVICES</span>
            </div>
            <div
                ref="servicesRef"
                class="mx-auto max-w-5xl w-full py-3 2xl:px-3 px-1 flex flex-col items-center justify-between transition-colors duration-500">
                <div
                    class="flex items-start justify-start gap-4 border-b light:border-black/10 border-white/10  p-4 w-full">
                    <h1 class="font-mono text-white light:text-black/60">01</h1>
                    <div>
                        <h1 class="font-medium text-white/70 light:text-black">Wed Design</h1>
                        <p class="font-mono 2xl:text-[16px] text-sm text-white/60 light:text-black/60 mt-1.5">I create
                            clean,
                            responsive website layouts that make your brand easy to recognize and your content easy to
                            explore.</p>
                    </div>
                </div>
                <div
                    class="flex items-start justify-start gap-4 border-b light:border-black/10 border-white/10  p-4 w-full">
                    <h1 class="font-mono text-white light:text-black/60">02</h1>
                    <div>
                        <h1 class="font-medium text-white/70 light:text-black">Grapich Designer</h1>
                        <p class="font-mono 2xl:text-[16px] text-sm text-white/60 light:text-black/60 mt-1.5">I create
                            eye-catching graphics and visual assets that help communicate your message and strengthen
                            your brand.</p>
                    </div>
                </div>
                <div
                    class="flex items-start justify-start gap-4 border-b light:border-black/10 border-white/10  p-4 w-full">
                    <h1 class="font-mono text-white light:text-black/60">03</h1>
                    <div>
                        <h1 class="font-medium text-white/70 light:text-black">Wed Development</h1>
                        <p class="font-mono 2xl:text-[16px] text-sm text-white/60 light:text-black/60 mt-1.5">I build
                            responsive, interactive websites with modern front-end technologies and a focus on
                            usability.</p>
                    </div>
                </div>
                <div
                    class="flex items-start justify-start gap-4 border-b light:border-black/10 border-white/10 p-4 w-full">
                    <h1 class="font-mono text-white light:text-black/60">04</h1>
                    <div>
                        <h1 class="font-medium text-white/70 light:text-black">Custome Software</h1>
                        <p class="font-mono 2xl:text-[16px] text-sm text-white/60 light:text-black/60 mt-1.5">I develop
                            software tailored to your needs, helping simplify tasks and solve specific business
                            problems.</p>
                    </div>
                </div>
                <div
                    class="flex items-start justify-start gap-4 border-b light:border-black/10 border-white/10 p-4 w-full">
                    <h1 class="font-mono text-white light:text-black/60">05</h1>
                    <div>
                        <h1 class="font-medium text-white/70 light:text-black">UI/UX Design</h1>
                        <p class="font-mono 2xl:text-[16px] text-sm text-white/60 light:text-black/60 mt-1.5">I design
                            intuitive interfaces and clear user flows to make digital products simple and enjoyable
                            to use.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>