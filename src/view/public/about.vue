<template>
    <section id="about" class="bg-black light:bg-white text-white px-0 md:px-6 py-10">
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
</template>

<script setup>
import { ref } from 'vue';

const stats = [
    { value: "2+", label: "Years learning & building" },
    { value: "10+", label: "Projects completed" },
    { value: "7", label: "Tools & technologies" },
    { value: "100%", label: "Dedication to detail" },
];

</script>