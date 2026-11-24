import { createRouter, createWebHistory } from "vue-router";
import Mainlayout from "../components/layouts/Mainlayout.vue";

// pages
import About from '../view/public/about.vue';
import Collaboration from '../view/public/Collaboration.vue';
import Projects from '../view/public/Project.vue';
import Hero from '../view/public/Hero.vue';
import Education from '../view/public/Education.vue';
import Skills from '../view/public/techskills.vue';
import What from '../view/public/whatido.vue';


const routes = [
    {
        path: "/",
        name: "main",
        component: Mainlayout,
        redirect: "/hero",
        children: [
            {
                path: "/hero",
                name: "hero",
                component: Hero,
            },
            {
                path: "/whatido",
                name: "whatido",
                component: What,
            },
            {
                path: "/skills",
                name: "skills",
                component: Skills,
            },
            {
                path: "/education",
                name: "education",
                component: Education,
            },
            {
                path: "/projects",
                name: "projects",
                component: Projects,
            },
            {
                path: "/about",
                name: "about",
                component: About,
            },
            {
                path: "/collaboration",
                name: "collaboration",
                component: Collaboration,
            },
        ]
    },

];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 }
    }
});


export default router;