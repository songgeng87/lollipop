"use client"
import { useEffect } from 'react';
import * as THREE from 'three';

export default function Planet() {
    let lock = false;
    const init = () => {
        if(lock) return;
        lock = true;
        // 场景
        const scene = new THREE.Scene();
        // 相机
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;

        // 渲染器
        const renderer = new THREE.WebGLRenderer({ antialias: true })
        renderer.setClearColor(new THREE.Color(0x320A8C), 1)
        // renderer.setSize(window.innerWidth * 0.5, window.innerHeight * 0.5);
        renderer.setSize(450, 320);
        document.getElementById('canvas')?.appendChild(renderer.domElement);

        function createMap() {
            // 创建球体几何图形
            const geometry = new THREE.SphereGeometry(1.8, 64, 64);
            // 使用纹理加载器并创建网络材质对象
            const texture = new THREE.TextureLoader().load('/images/earth.jpg');
            // 立即使用纹理进行材质创建
            const material = new THREE.MeshBasicMaterial({ map: texture });
            // 创建网格对象
            const sphere = new THREE.Mesh(geometry, material)
            sphere.rotateOnWorldAxis(new THREE.Vector3(1, 0, -1), Math.PI / 3)
            // 添加到场景中
            scene.add(sphere)

            function creareRing(color: number, radius: number[]) {
                const geometry = new THREE.RingGeometry(radius[0], radius[1], 64, 0.5);
                const material = new THREE.MeshBasicMaterial({
                    color,
                    side: THREE.DoubleSide,
                    transparent: true,
                    opacity: 0.6
                })
                const ring = new THREE.Mesh(geometry, material);
                ring.rotation.x = - Math.PI / 3;
                ring.rotation.y = Math.PI / 4;
                scene.add(ring);
            }

            // 创建各种颜色星环
            creareRing(0x00FF00, [2, 2.1]);
            creareRing(0xFF0000, [2.1, 2.2]);
            creareRing(0x00FF00, [2.2, 2.3]);
            creareRing(0x0000FF, [2.3, 2.4]);
            creareRing(0xFF0000, [2.4, 2.5]);
            creareRing(0x00FF00, [2.5, 2.6]);
            creareRing(0x00FF00, [2.8, 2.9]);
            creareRing(0x00FF00, [2.9, 3]);
            creareRing(0x00FF00, [3, 3.1]);

            const animate = () => {
                sphere.rotation.y += 0.01;
                renderer.render(scene, camera);
            }

            renderer.setAnimationLoop(animate)
        }

        createMap();
    }

    useEffect(() => {
        init();
    }, [])

    return <div id="canvas"></div>
}