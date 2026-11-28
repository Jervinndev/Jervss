<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { Menu } from '@lucide/vue';

const emit = defineEmits(['toggle-sidebar']);

const isScrolled = ref(false);

const handleScroll = () => {
    // 1. Gawing '>' para maging true kapag lumagpas sa 20px pababa
    isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
    handleScroll(); // Para ma-check agad kahit nag-refresh sa gitna ng page
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
    <!-- Note: Ang 'sm:hidden' ay tinatago na ito mula 640px pataas, kaya hindi na kailangan ang md:hidden at 2xl:hidden -->
    <section class="flex w-full sm:hidden">
        <!-- 2. Ilipat ang :class sa <header> na naka-fixed -->
        <header class="fixed top-0 left-0 z-100 w-full light:bg-white/90 bg-black/90 backdrop-blur-2xl px-6 py-4"
            :class="isScrolled ? 'border-b light:border-black/10 border-white/10' : 'border-b border-transparent'">
            <div class="flex items-center justify-between">
                <h1 class="text-lg font-bold font-mono light:text-black text-white">JV</h1>
                <Menu @click="emit('toggle-sidebar')" class="light:text-black text-white cursor-pointer" />
            </div>
        </header>
    </section>
</template>
