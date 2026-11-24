import { ref } from 'vue'

const themeMode = ref('light')
const isLight = ref(false)

export function useTheme() {
    const applyVisual = (mode) => {
        if (mode === 'system') {
            isLight.value = window.matchMedia('(prefers-color-scheme: light)').matches
        } else {
            isLight.value = mode === 'light'
        }
        document.documentElement.classList.toggle('light', isLight.value)
    }

    const runTransition = async (mode, event) => {
        if (themeMode.value === mode) return

        const update = () => {
            themeMode.value = mode
            localStorage.setItem('theme', mode)
            applyVisual(mode)
        }

        if (
            !document.startViewTransition ||
            window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
            !event
        ) {
            update()
            return
        }

        const x = event.clientX
        const y = event.clientY
        const endRadius = Math.hypot(
            Math.max(x, window.innerWidth - x),
            Math.max(y, window.innerHeight - y)
        )

        const transition = document.startViewTransition(() => {
            update()
        })

        await transition.ready

        document.documentElement.animate(
            {
                clipPath: [
                    `circle(0px at ${x}px ${y}px)`,
                    `circle(${endRadius}px at ${x}px ${y}px)`,
                ],
            },
            {
                duration: 600,
                easing: 'ease-in-out',
                pseudoElement: '::view-transition-new(root)',
            }
        )
    }

    const setDark = (e) => runTransition('dark', e)
    const setLight = (e) => runTransition('light', e)
    const setSystem = (e) => runTransition('system', e)

    const initTheme = () => {
        const saved = localStorage.getItem('theme') || 'dark'
        themeMode.value = saved
        applyVisual(saved)

        window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', () => {
            if (themeMode.value === 'system') applyVisual('system')
        })
    }

    return {
        themeMode,
        isLight,
        initTheme,
        setDark,
        setLight,
        setSystem,
    }
}
