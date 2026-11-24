import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { REDUCED } from '../hooks';

/** Animated orbital scene: starfield, Earth with atmosphere, and a small satellite. */
export default function Background3D() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const canvas = ref.current;
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 500);
    camera.position.z = 16;

    const makeStarShell = (count: number, color: number, size: number, rMin: number, rSpan: number) => {
      const pos = new Float32Array(count * 3);
      for (let i = 0; i < pos.length; i += 3) {
        const r = rMin + Math.random() * rSpan;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        pos[i] = r * Math.sin(phi) * Math.cos(theta);
        pos[i + 1] = r * Math.sin(phi) * Math.sin(theta);
        pos[i + 2] = r * Math.cos(phi);
      }
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      return new THREE.Points(
        geo,
        new THREE.PointsMaterial({
          color,
          size,
          transparent: true,
          opacity: 0.85,
          sizeAttenuation: true,
          depthWrite: false,
        })
      );
    };

    const stars = makeStarShell(1700, 0xdfe9ff, 0.6, 130, 170);
    const goldStars = makeStarShell(60, 0xe3b341, 1.1, 120, 120);
    scene.add(stars, goldStars);

    const sunLight = new THREE.DirectionalLight(0xfff3d6, 1.7);
    sunLight.position.set(-20, 10, 12);
    scene.add(sunLight, new THREE.AmbientLight(0x2a3d4f, 0.8));

    // Earth, bottom-right, horizon curving into view
    const earth = new THREE.Group();
    earth.add(
      new THREE.Mesh(
        new THREE.SphereGeometry(11, 56, 56),
        new THREE.MeshPhongMaterial({ color: 0x1d4e89, emissive: 0x050f1d, shininess: 16 })
      ),
      new THREE.Mesh(
        new THREE.SphereGeometry(11.05, 30, 22),
        new THREE.MeshBasicMaterial({ color: 0x58b883, wireframe: true, transparent: true, opacity: 0.07 })
      ),
      new THREE.Mesh(
        new THREE.SphereGeometry(11.8, 56, 56),
        new THREE.MeshBasicMaterial({ color: 0x4f9fe8, transparent: true, opacity: 0.13, side: THREE.BackSide })
      )
    );
    earth.position.set(9.5, -14.5, -10);
    scene.add(earth);

    // Small satellite orbiting the planet
    const sat = new THREE.Group();
    const satBody = new THREE.Mesh(
      new THREE.CylinderGeometry(0.34, 0.34, 1.3, 16),
      new THREE.MeshPhongMaterial({ color: 0xcfd6dd, shininess: 70 })
    );
    satBody.rotation.z = Math.PI / 2;
    const panelMat = new THREE.MeshPhongMaterial({
      color: 0x14406e,
      emissive: 0x0a2240,
      shininess: 90,
      side: THREE.DoubleSide,
    });
    const panel1 = new THREE.Mesh(new THREE.BoxGeometry(2.0, 0.02, 0.8), panelMat);
    panel1.position.x = 1.65;
    const panel2 = panel1.clone();
    panel2.position.x = -1.65;
    const dish = new THREE.Mesh(
      new THREE.ConeGeometry(0.3, 0.42, 14, 1, true),
      new THREE.MeshPhongMaterial({ color: 0xe3b341, shininess: 40, side: THREE.DoubleSide })
    );
    dish.position.y = 0.55;
    sat.add(satBody, panel1, panel2, dish);
    sat.position.set(0, 0, 14.6);
    const orbit = new THREE.Group();
    orbit.add(sat);
    orbit.position.copy(earth.position);
    orbit.rotation.x = 0.32;
    scene.add(orbit);

    const resize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    resize();
    window.addEventListener('resize', resize);

    const mouse = { x: 0, y: 0 };
    const onMove = (e: PointerEvent) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    if (!REDUCED) window.addEventListener('pointermove', onMove, { passive: true });

    let raf = 0;
    const clock = new THREE.Clock();
    const animate = () => {
      const t = clock.getElapsedTime();
      stars.rotation.y = t * 0.0045;
      goldStars.rotation.y = -t * 0.003;
      earth.rotation.y = t * 0.02;
      orbit.rotation.y = t * 0.1;
      sat.rotation.y = t * 0.4;
      sat.rotation.x = Math.sin(t * 0.3) * 0.2;
      camera.position.x += (mouse.x * 1.4 - camera.position.x) * 0.03;
      camera.position.y += (-mouse.y * 0.9 - camera.position.y) * 0.03;
      camera.lookAt(scene.position);
      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };

    if (REDUCED) {
      renderer.render(scene, camera); // single static frame
    } else {
      raf = requestAnimationFrame(animate);
    }

    const onVis = () => {
      if (REDUCED) return;
      if (document.hidden) cancelAnimationFrame(raf);
      else raf = requestAnimationFrame(animate);
    };
    document.addEventListener('visibilitychange', onVis);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('visibilitychange', onVis);
      scene.traverse((o) => {
        const mesh = o as THREE.Mesh;
        if (mesh.geometry) mesh.geometry.dispose();
        const mat = mesh.material as THREE.Material | THREE.Material[] | undefined;
        if (Array.isArray(mat)) mat.forEach((m) => m.dispose());
        else if (mat) mat.dispose();
      });
      renderer.dispose();
    };
  }, []);

  return <canvas id="bg3d" ref={ref} aria-hidden="true"></canvas>;
}
