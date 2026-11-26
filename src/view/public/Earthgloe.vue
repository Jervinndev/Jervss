<template>
    <section class="mx-auto max-w-5xl px-4 py-12">
        <div
            class="flex flex-col w-full items-center justify-center rounded-2xl border border-gray-200/20 bg-white/5 backdrop-blur-sm">

            <!-- 3D Globe Container -->
            <div ref="containerRef"
                class="h-full w-full cursor-grab active:cursor-grabbing flex items-center justify-center">
            </div>

            <!-- Location Status Badge -->
            <div
                class="mt-4 inline-flex items-center gap-2 rounded-full border border-gray-300/30 bg-gray-100/80 dark:bg-neutral-900/80 px-4 py-1.5 text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
                <span class="relative flex h-2.5 w-2.5">
                    <span
                        class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
                </span>
                <span>{{ status }}</span>
            </div>

        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const containerRef = ref(null);
const status = ref('Hinahanap ang location mo...');

let scene, camera, renderer, controls, earthMesh, pinGroup, animationId;

function latLngToVector3(lat, lng, radius) {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lng + 180) * (Math.PI / 180);
    const x = -(radius * Math.sin(phi) * Math.cos(theta));
    const z = radius * Math.sin(phi) * Math.sin(theta);
    const y = radius * Math.cos(phi);
    return new THREE.Vector3(x, y, z);
}

function createPinMarker(lat, lng, radius) {
    const group = new THREE.Group();
    const pos = latLngToVector3(lat, lng, radius);
    group.position.copy(pos);

    group.lookAt(new THREE.Vector3(0, 0, 0));
    group.rotateX(Math.PI);

    const headGeo = new THREE.SphereGeometry(0.06, 16, 16);
    const headMat = new THREE.MeshBasicMaterial({ color: 0xff2a2a });
    const head = new THREE.Mesh(headGeo, headMat);
    head.position.z = 0.15;

    const stickGeo = new THREE.CylinderGeometry(0.012, 0.005, 0.15, 8);
    const stickMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const stick = new THREE.Mesh(stickGeo, stickMat);
    stick.rotation.x = Math.PI / 2;
    stick.position.z = 0.075;

    const ringGeo = new THREE.RingGeometry(0.04, 0.08, 32);
    const ringMat = new THREE.MeshBasicMaterial({
        color: 0xff3b30,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.8
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.position.z = 0.01;

    group.add(head, stick, ring);
    return group;
}

const handleResize = () => {
    if (!containerRef.value || !renderer || !camera) return;
    const width = containerRef.value.clientWidth;
    const height = containerRef.value.clientHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
};

onMounted(() => {
    const width = containerRef.value.clientWidth || 420;
    const height = containerRef.value.clientHeight || 420;
    const radius = 1.5;

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 4.2;

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.value.appendChild(renderer.domElement);

    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = true;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1.2;

    const textureLoader = new THREE.TextureLoader();
    const earthTexture = textureLoader.load('/src/assets/image.png');

    const earthGeo = new THREE.SphereGeometry(radius, 64, 64);
    const earthMat = new THREE.MeshPhongMaterial({
        map: earthTexture,
        shininess: 15,
    });
    earthMesh = new THREE.Mesh(earthGeo, earthMat);
    scene.add(earthMesh);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLight.position.set(5, 3, 5);
    scene.add(dirLight);

    // Default pin sa Pilipinas
    pinGroup = createPinMarker(14.5995, 120.9842, radius);
    earthMesh.add(pinGroup);

    earthMesh.rotation.y = -2.1;
    earthMesh.rotation.x = 0.2;

    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                const { latitude, longitude } = pos.coords;
                status.value = `Nandito ka: ${latitude.toFixed(2)}, ${longitude.toFixed(2)}`;

                earthMesh.remove(pinGroup);
                pinGroup = createPinMarker(latitude, longitude, radius);
                earthMesh.add(pinGroup);
            },
            () => {
                status.value = 'Naka-pin sa Philippines (GPS naka-off)';
            }
        );
    }

    window.addEventListener('resize', handleResize);

    const animate = () => {
        animationId = requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
    };
    animate();
});

onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
    cancelAnimationFrame(animationId);
    if (renderer) renderer.dispose();
});
</script>
