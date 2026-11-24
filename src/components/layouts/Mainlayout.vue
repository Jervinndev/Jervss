<script setup>
import { ref } from 'vue';
import Sidebar from '../../components/Sidebar.vue';
import Header from '../../components/header.vue';

const isSidebarOpen = ref(false)

const toggleSidebar = () => {
    isSidebarOpen.value = !isSidebarOpen.value
}
</script>

<template>
    <Header @toggle-sidebar="toggleSidebar" />
    <section class="flex w-full h-screen light:bg-white/90 bg-black/95">
        <div class="2xl:p-4 p-0 2xl:pr-0">
            <Sidebar :isOpen="isSidebarOpen" @close="isSidebarOpen = false" />
        </div>
        <div class="flex-1 h-full overflow-y-auto p-4">
            <router-view />
        </div>
    </section>
</template>