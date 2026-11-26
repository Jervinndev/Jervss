<script setup>
import { reactive, ref, h } from 'vue'
import emailjs from '@emailjs/browser'
import Visitors from '../../components/visitors.vue'

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
            <p class="text-white/30 font-mono light:text-black/30 tracking-[0.3em] text-xs font-semibold mb-2">LET'S TALK</p>
            <h2 class="text-3xl font-mono light:text-black md:text-5xl font-black tracking-tight mb-2">CONTACT</h2>
            <div class="grid grid-cols-1 gap-4">
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
                    <div
                        class="bg-black light:bg-white border border-white/10 light:border-black/10 rounded-xl px-5 py-4 flex items-center justify-between gap-3">
                        <div class="flex items-center gap-2">
                            <div class="w-2.5 h-2.5 rounded-full bg-green-500 flex items-center justify-center">
                                <div class="w-2.5 h-2.5 rounded-full p-1 bg-green-500 animate-ping"></div>
                            </div>
                            <span class="text-sm font-Poppins text-white/50 light:text-black/50">Available for freelance
                                work</span>
                        </div>
                        <Visitors />
                    </div>
                </div>
                <div class="bg-black light:bg-white border border-white/10 light:border-black/10 rounded-xl p-6">
                    <h3 class="text-lg font-bold mb-6 font-archivo-black light:text-black/70">Send a message</h3>

                    <form @submit.prevent="handleSubmit" class="flex flex-col gap-5">
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div>
                                <label
                                    class="block text-xs text-white/50 font-mono light:text-black/50 mb-2">NAME</label>
                                <input v-model="form.name" type="text" placeholder="Juan Dela Cruz"
                                    class="w-full bg-black light:text-black/80 light:bg-gray-50 border border-white/10 light:border-black/10 rounded-lg px-4 py-3 text-sm outline-none focus:border-white/40 light:focus:border-black/40  transition-colors placeholder:text-white/30 light:placeholder:text-black/30" />
                            </div>
                            <div>
                                <label
                                    class="block text-xs text-white/50 font-mono light:text-black/50 mb-2">EMAIL</label>
                                <input v-model="form.email" type="email" placeholder="you@email.com"
                                    class="w-full bg-black light:text-black/80 light:bg-gray-50 border border-white/10 light:border-black/10 rounded-lg px-4 py-3 text-sm outline-none focus:border-white/40 light:focus:border-black/40  transition-colors placeholder:text-white/30 light:placeholder:text-black/30" />
                            </div>
                        </div>

                        <div>
                            <label
                                class="block text-xs text-white/50 font-mono light:text-black/50 mb-2">SUBJECT</label>
                            <input v-model="form.subject" type="text" placeholder="Project inquiry"
                                class="w-full bg-black light:text-black/80 light:bg-gray-50 border border-white/10 light:border-black/10 rounded-lg px-4 py-3 text-sm outline-none focus:border-white/40 light:focus:border-black/40  transition-colors placeholder:text-white/30 light:placeholder:text-black/30" />
                        </div>

                        <div>
                            <label
                                class="block text-xs text-white/50 font-mono light:text-black/50 mb-2">MESSAGE</label>
                            <textarea v-model="form.message" rows="5" placeholder="Tell me about your project..."
                                class="w-full bg-black light:text-black/80 light:bg-gray-50 border border-white/10 light:border-black/10 rounded-lg px-4 py-3 text-sm outline-none focus:border-white/40 light:focus:border-black/40  transition-colors placeholder:text-white/30 light:placeholder:text-black/30" />
                        </div>

                        <button type="submit" :disabled="sending"
                            class="mt-2 inline-flex items-center justify-center gap-2 bg-white light:bg-black light:text-white text-black font-semibold text-sm tracking-wide px-6 py-3.5 hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed rounded-xl">
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
