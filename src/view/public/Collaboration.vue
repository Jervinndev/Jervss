<script setup>
import { reactive, ref, h } from 'vue'
import emailjs from '@emailjs/browser'
import Visitors from '../../components/visitors.vue'

const MapPin = () => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [
    h('path', { d: 'M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z' }),
    h('circle', { cx: '12', cy: '10', r: '3' })
])
const Mail = () => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [
    h('rect', { x: '2', y: '4', width: '20', height: '16', rx: '2' }),
    h('path', { d: 'm22 6-10 7L2 6' })
])
const Github = () => h('svg', { viewBox: '0 0 24 24', fill: 'currentColor' }, [
    h('path', { d: 'M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.9 1.3 3.6 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6a4.7 4.7 0 0 1 1.2-3.2 4.3 4.3 0 0 1 .1-3.2s1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2a4.3 4.3 0 0 1 .1 3.2 4.7 4.7 0 0 1 1.2 3.2c0 4.7-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3Z' })
])
const Facebook = () => h('svg', { viewBox: '0 0 24 24', fill: 'currentColor' }, [
    h('path', { d: 'M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.3-1.5 1.6-1.5h1.6V3.6C15.9 3.5 15 3.4 14 3.4c-2.4 0-4 1.4-4 4.1v2.4H7.3V13H10v8h3.5Z' })
])
const ArrowRight = () => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2' }, [
    h('path', { d: 'M5 12h14M13 6l6 6-6 6' })
])

const contactInfo = [
    { label: 'LOCATION', value: 'Binangonan, Rizal', href: '#', icon: MapPin },
    { label: 'EMAIL', value: 'email@gmail.com', href: 'mailto:email@gmail.com', icon: Mail },
    { label: 'GITHUB', value: 'bortikan/github.com', href: 'https://github.com/bortikan', icon: Github },
    { label: 'FACEBOOK', value: 'Jervin Anain Villones', href: '#', icon: Facebook },
]

const form = reactive({ name: '', email: '', subject: '', message: '' })
const submitted = ref(false)
const sending = ref(false)
const errorMsg = ref('')

const SERVICE_ID = 'service_mbkbwzq'
const TEMPLATE_ID = 'template_yofoi6b'
const PUBLIC_KEY = '17z0ZVnsFuf-4s8hC'

async function handleSubmit() {
    errorMsg.value = ''

    if (!form.name || !form.email || !form.message) {
        errorMsg.value = 'Please fill out name, email, and message.'
        return
    }

    sending.value = true

    try {
        await emailjs.send(
            SERVICE_ID,
            TEMPLATE_ID,
            {
                from_name: form.name,
                from_email: form.email,
                subject: form.subject || '(no subject)',
                message: form.message,
            },
            PUBLIC_KEY
        )

        submitted.value = true
        form.name = ''
        form.email = ''
        form.subject = ''
        form.message = ''
        setTimeout(() => (submitted.value = false), 4000)
    } catch (err) {
        console.error('EmailJS error:', err)
        errorMsg.value = 'Failed to send message. Please try again or email me directly.'
    } finally {
        sending.value = false
    }
}
</script>


<template>
    <section id="contact" class=" text-white px-2 md:px-10 py-10 mt-5">
        <div class=" max-w-7xl mx-auto">
            <!-- Eyebrow + Heading -->
            <p class="text-white/30 font-mono light:text-black/30 tracking-[0.3em] text-xs font-semibold mb-2">
                LET'S TALK
            </p>
            <h2 class="text-3xl font-mono light:text-black md:text-5xl font-black tracking-tight mb-2">
                CONTACT
            </h2>

            <div class="grid grid-cols-1 gap-4">

                <!-- LEFT: Info -->
                <div class="flex flex-col justify-between gap-4">
                    <div>
                        <p
                            class="text-white/50 light:text-black/60 leading-relaxed max-w-md font-Poppins 2xl:text-[16px] text-sm">
                            Got a project in mind, a question, or just want to say hi?
                            My inbox is always open. I'll get back to you as soon as I can.
                        </p>
                    </div>
                    <!-- 
                    <div class="flex flex-col gap-4">
                        <a v-for="item in contactInfo" :key="item.label" :href="item.href"
                            class="flex items-center gap-4 bg-[#0d0d0d] light:bg-white border border-white/10 light:border-black/10 rounded-xl px-5 py-4 hover:border-white/30 transition-colors">
                            <span
                                class="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black shrink-0">
                                <component :is="item.icon" class="w-4 h-4" />
                            </span>
                            <span>
                                <span class="block text-xs text-white/40 light:text-black/40">{{ item.label }}</span>
                                <span class="block text-sm font-medium text-white/70 light:text-black/70">{{ item.value
                                    }}</span>
                            </span>
                        </a>
                    </div> -->

                    <!-- Availability -->
                    <div
                        class="bg-[#0d0d0d] light:bg-white border border-white/10 light:border-black/10 rounded-xl px-5 py-4 flex items-center justify-between gap-3">
                        <div class="flex items-center gap-2">
                            <div class="w-2.5 h-2.5 rounded-full bg-green-500 flex items-center justify-center">
                                <div class="w-2.5 h-2.5 rounded-full p-1 bg-green-500 animate-ping"></div>
                            </div>
                            <span class="text-sm text-white/50 light:text-black/50">Available for freelance work</span>
                        </div>
                        <Visitors />
                    </div>
                </div>

                <!-- RIGHT: Form -->
                <div class="bg-[#0d0d0d] light:bg-white border border-white/10 light:border-black/10 rounded-xl p-6">
                    <h3 class="text-lg font-bold mb-6  light:text-black/70">Send a message</h3>

                    <form @submit.prevent="handleSubmit" class="flex flex-col gap-5">
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div>
                                <label class="block text-xs text-white/50 light:text-black/50 mb-2">NAME</label>
                                <input v-model="form.name" type="text" placeholder="Juan Dela Cruz"
                                    class="w-full bg-black light:text-black/80 light:bg-gray-50 border border-white/10 light:border-black/10 rounded-lg px-4 py-3 text-sm outline-none focus:border-white/40 light:focus:border-black/40  transition-colors placeholder:text-white/30 light:placeholder:text-black/30" />
                            </div>
                            <div>
                                <label class="block text-xs text-white/50  light:text-black/50 mb-2">EMAIL</label>
                                <input v-model="form.email" type="email" placeholder="you@email.com"
                                    class="w-full bg-black light:text-black/80 light:bg-gray-50 border border-white/10 light:border-black/10 rounded-lg px-4 py-3 text-sm outline-none focus:border-white/40 light:focus:border-black/40  transition-colors placeholder:text-white/30 light:placeholder:text-black/30" />
                            </div>
                        </div>

                        <div>
                            <label class="block text-xs text-white/50  light:text-black/50 mb-2">SUBJECT</label>
                            <input v-model="form.subject" type="text" placeholder="Project inquiry"
                                class="w-full bg-black light:text-black/80 light:bg-gray-50 border border-white/10 light:border-black/10 rounded-lg px-4 py-3 text-sm outline-none focus:border-white/40 light:focus:border-black/40  transition-colors placeholder:text-white/30 light:placeholder:text-black/30" />
                        </div>

                        <div>
                            <label class="block text-xs text-white/50  light:text-black/50 mb-2">MESSAGE</label>
                            <textarea v-model="form.message" rows="5" placeholder="Tell me about your project..."
                                class="w-full bg-black light:text-black/80 light:bg-gray-50 border border-white/10 light:border-black/10 rounded-lg px-4 py-3 text-sm outline-none focus:border-white/40 light:focus:border-black/40  transition-colors placeholder:text-white/30 light:placeholder:text-black/30" />
                        </div>

                        <button type="submit" :disabled="sending"
                            class="mt-2 inline-flex items-center justify-center gap-2 bg-white light:bg-black light:text-white text-black font-semibold text-sm tracking-wide px-6 py-3.5 hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                            {{ sending ? 'SENDING...' : 'SEND MESSAGE' }}
                            <ArrowRight v-if="!sending" class="w-4 h-4" />
                        </button>

                        <p v-if="submitted" class="text-green-400 text-sm text-center">
                            Message sent! I'll get back to you soon.
                        </p>
                        <p v-if="errorMsg" class="text-red-400 text-sm text-center">
                            {{ errorMsg }}
                        </p>
                    </form>
                </div>

            </div>
        </div>
    </section>
</template>
