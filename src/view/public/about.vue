<script setup>
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
</script>

<template>
    <section class="w-full px-1 mt-10 transition-colors duration-500">
        <main class="mx-auto max-w-5xl w-full">
            <div class="flex items-center justify-between border-b border-white/10 light:border-black/10 py-3">
                <router-link to="/hero"
                    class="text-[12px] font-normal font-mono text-white/60 hover:text-white light:text-black/60 light:hover:text-black transition-colors">
                    BACK TO HOME
                </router-link>
                <span class="text-[12px] font-mono text-white/40 light:text-black/40">02 / ABOUT</span>
            </div>

            <div class="grid md:grid-cols-[1.4fr_0.6fr] gap-8 md:gap-12 items-start py-8 md:py-10">
                <div class="max-w-3xl">
                    <p class="text-xs font-mono tracking-widest text-white/40 light:text-black/40">GET TO KNOW ME</p>
                    <h1 class="mt-4 font-black font-space-mono text-3xl sm:text-4xl md:text-5xl leading-tight text-white light:text-black">
                        Building digital experiences with purpose.
                    </h1>
                    <p class="mt-5 max-w-2xl font-Poppins text-sm md:text-base leading-7 text-white/55 light:text-black/60">
                        I’m Mark Jervin Villones, a front-end developer from Binangonan, Rizal. I turn ideas into clean,
                        responsive websites that are easy to explore and enjoyable to use.
                    </p>
                    <p class="mt-3 max-w-2xl font-Poppins text-sm md:text-base leading-7 text-white/55 light:text-black/60">
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
                <div class="md:border-l md:border-white/10 md:light:border-black/10 md:pl-6 flex flex-col gap-5">
                    <div>
                        <p class="font-mono text-[11px] tracking-wider text-white/35 light:text-black/40">BASED IN</p>
                        <p class="mt-2 font-Poppins text-sm text-white/75 light:text-black/75">Binangonan, Rizal</p>
                    </div>
                    <div>
                        <p class="font-mono text-[11px] tracking-wider text-white/35 light:text-black/40">CURRENT FOCUS</p>
                        <p class="mt-2 font-Poppins text-sm leading-6 text-white/55 light:text-black/60">
                            Front-end development, useful interfaces, and learning through hands-on projects.
                        </p>
                    </div>
                    <div>
                        <p class="font-mono text-[11px] tracking-wider text-white/35 light:text-black/40">WORKING STYLE</p>
                        <p class="mt-2 font-Poppins text-sm leading-6 text-white/55 light:text-black/60">
                            Curious, detail-oriented, and always open to improving the work.
                        </p>
                    </div>
                </div>
            </div>

            <section aria-labelledby="approach-title" class="border-t border-white/10 light:border-black/10 py-7">
                <div class="mb-4 flex items-end justify-between gap-4">
                    <div>
                        <p class="text-xs font-mono text-white/40 light:text-black/40">WHAT I BRING</p>
                        <h2 id="approach-title" class="mt-1 font-Poppins text-lg font-medium text-white/80 light:text-black/80">
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
                        <h3 class="mt-4 font-Poppins text-sm font-medium text-white/80 light:text-black/80">{{ item.title }}</h3>
                        <p class="mt-2 font-Poppins text-xs leading-6 text-white/45 light:text-black/55">{{ item.description }}</p>
                    </article>
                </div>
            </section>

            <section aria-label="Portfolio highlights" class="grid grid-cols-2 md:grid-cols-4 border-t border-white/10 light:border-black/10 mb-8">
                <div v-for="(stat, index) in stats" :key="stat.label"
                    class="py-4 px-3 md:px-4 border-b md:border-b-0 border-white/10 light:border-black/10"
                    :class="index < stats.length - 1 ? 'md:border-r' : ''">
                    <p class="font-mono text-xl font-bold text-white/80 light:text-black/80">{{ stat.value }}</p>
                    <p class="mt-1 font-Poppins text-[11px] leading-5 text-white/40 light:text-black/50">{{ stat.label }}</p>
                </div>
            </section>
        </main>
    </section>
</template>