<template>
    <div
        class="inline-flex items-center gap-2 bg-[#0d0d0d] light:bg-white border border-white/10 light:border-black/10 rounded-full px-4 py-2">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
            class="w-4 h-4 text-white/60 light:text-black/60">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8Z" />
            <circle cx="12" cy="12" r="3" />
        </svg>

        <span class="text-sm font-semibold text-white/80 light:text-black/80 tabular-nums">
            {{ count.toLocaleString() }}
        </span>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { supabase } from '../supabase/supabase.js'

const count = ref(0)
// Binago natin para mas specific ang key
const STORAGE_KEY = 'mj_portfolio_visited'
let channel = null

async function refreshCount() {
    const { count: total, error } = await supabase
        .from('visits')
        .select('*', { count: 'exact', head: true })

    if (!error && total !== null) {
        count.value = total
    }
}

async function trackVisit() {
    // I-check ang localStorage
    const hasVisited = localStorage.getItem(STORAGE_KEY)

    // Kung wala pa sa localStorage, ibig sabihin bago ang user
    if (!hasVisited) {
        const { error } = await supabase
            .from('visits')
            .insert([{ browser_info: navigator.userAgent }])

        if (!error) {
            // I-set ang flag para hindi na ulit mag-insert
            localStorage.setItem(STORAGE_KEY, 'true')
        }
    }
}

onMounted(async () => {
    // Unang execute: check muna bago mag-refresh ng count
    await trackVisit()
    await refreshCount()

    // Real-time listener
    channel = supabase
        .channel('public:visits') // Mas mainam na may pangalan ang channel
        .on('postgres_changes', {
            event: 'INSERT',
            schema: 'public',
            table: 'visits'
        }, () => {
            refreshCount()
        })
        .subscribe()
})

onUnmounted(() => {
    if (channel) {
        supabase.removeChannel(channel)
    }
})
</script>