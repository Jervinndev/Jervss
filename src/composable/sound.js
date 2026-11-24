import { ref } from 'vue'

let lastHoveredEl = null
const isMuted = ref(localStorage.getItem('sound-muted') === 'true')

let hoverAudio = null
if (typeof window !== 'undefined') {
    hoverAudio = new Audio('./src/composable/freesound_community-anime-46068.mp3')
    hoverAudio.volume = 0.25
}

export function useSound() {
    const playHover = () => {
        if (isMuted.value || !hoverAudio) return

        const sound = hoverAudio.cloneNode()
        sound.volume = hoverAudio.volume
        sound.play().catch(() => { })
    }

    const toggleMute = () => {
        isMuted.value = !isMuted.value
        localStorage.setItem('sound-muted', isMuted.value)
    }

    return {
        isMuted,
        playHover,
        toggleMute,
    }
}

if (typeof window !== 'undefined') {
    const { playHover } = useSound()

    document.addEventListener(
        'pointerover',
        (e) => {
            const target = e.target.closest('button, a, [role="button"], .cursor-pointer, [data-sound]')

            if (!target || target === lastHoveredEl) {
                if (!target) lastHoveredEl = null
                return
            }

            if (target.disabled || target.hasAttribute('data-no-sound')) return

            lastHoveredEl = target
            playHover()
        },
        { passive: true }
    )
}
