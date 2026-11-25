<script setup>
import { ref } from 'vue';
import { Menu, X } from '@lucide/vue';

const emit = defineEmits(['toggle-sidebar'])
</script>

<template>
    <section class="2xl:hidden flex w-full md:hidden sm:hidden  ">
        <header class="fixed z-100 w-full light:bg-white/90 bg-black bg-blend-color backdrop-blur-2xl px-6 py-4">
            <div class="flex items-center justify-between">
                <h1 class="text-lg font-bold font-mono light:text-black text-white">JV</h1>
                <Menu @click="emit('toggle-sidebar')" class="light:text-black text-white" />
                <!-- <X v-else @click="emit('toggle-sidebar')" class="light:text-black text-white" /> -->
            </div>
        </header>
    </section>
</template>