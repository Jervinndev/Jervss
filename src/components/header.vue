<script setup>
import { ref } from 'vue';
import { Menu } from '@lucide/vue';

const emit = defineEmits(['toggle-sidebar'])
</script>

<template>
    <section class="2xl:hidden flex w-full">
        <header class="fixed z-100 w-full light:bg-white/90 bg-black bg-blend-color backdrop-blur-2xl p-6">
            <div class="flex items-center justify-between">
                <h1 class="text-xl font-bold font-mono light:text-black text-white">MJ</h1>
                <Menu @click="emit('toggle-sidebar')" class="light:text-black text-white" />
            </div>
        </header>
    </section>
</template>