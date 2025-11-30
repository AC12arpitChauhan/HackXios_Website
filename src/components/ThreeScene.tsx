import { useEffect, useRef } from "react";
import * as THREE from "three";

type ThreeSceneProps = {
  mode?: "knot" | "particles" | "sphere";
  className?: string;
  interactive?: boolean;
};

const ThreeScene = ({ mode = "particles", className = "", interactive = false }: ThreeSceneProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!ref.current) return;

  const container = ref.current;
  // ensure container has a positioning context only if it's currently 'static'
  const computed = window.getComputedStyle(container);
  if (computed.position === "static") {
    container.style.position = "relative";
  }
  const rect = container.getBoundingClientRect();
  const width = rect.width || 400;
  const height = rect.height || 300;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 6);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(renderer.domElement);
  // make sure canvas fills the container
  const canvas = renderer.domElement as HTMLCanvasElement;
  canvas.style.position = "absolute";
  canvas.style.top = "0";
  canvas.style.left = "0";
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  canvas.style.pointerEvents = "none";
  // ensure canvas is visible and doesn't collapse
  canvas.style.display = "block";
  canvas.style.zIndex = "0";

    const ambient = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambient);

    let mesh: THREE.Object3D | null = null;

    if (mode === "knot") {
      const geom = new THREE.TorusKnotGeometry(1.0, 0.22, 128, 24);
      const mat = new THREE.MeshStandardMaterial({ color: 0x8b5cf6, metalness: 0.25, roughness: 0.4, emissive: 0x0b1220, emissiveIntensity: 0.05 });
      mesh = new THREE.Mesh(geom, mat);
      mesh.rotation.x = 0.5;
      scene.add(mesh);
    } else if (mode === "sphere") {
      const geom = new THREE.IcosahedronGeometry(1.4, 3);
      const mat = new THREE.MeshStandardMaterial({ color: 0x06b6d4, wireframe: true, transparent: true, opacity: 0.6 });
      mesh = new THREE.Mesh(geom, mat);
      scene.add(mesh);
    } else {
      // particles
      const count = 400;
      const buffer = new Float32Array(count * 3);
      for (let i = 0; i < count * 3; i++) buffer[i] = (Math.random() - 0.5) * 6;
      const geom = new THREE.BufferGeometry();
      geom.setAttribute("position", new THREE.BufferAttribute(buffer, 3));
      const mat = new THREE.PointsMaterial({ color: 0x6ee7b7, size: 0.04, sizeAttenuation: true, transparent: true, opacity: 0.9 });
      mesh = new THREE.Points(geom, mat);
      scene.add(mesh);
    }

    const light = new THREE.DirectionalLight(0xffffff, 0.4);
    light.position.set(5, 5, 5);
    scene.add(light);

    let frameId: number;
    let targetRotX = 0;
    let targetRotY = 0;
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const animate = () => {
      if (mesh) {
        if (interactive) {
          const b = container.getBoundingClientRect();
          const nx = (mouse.current.y - b.height / 2) / b.height;
          const ny = (mouse.current.x - b.width / 2) / b.width;
          targetRotX = nx * 0.6;
          targetRotY = ny * 0.9;
          mesh.rotation.x = lerp(mesh.rotation.x, targetRotX, 0.08);
          mesh.rotation.y = lerp(mesh.rotation.y, targetRotY, 0.08);
          const m = mesh as THREE.Mesh | THREE.Points;
          const s = lerp((m.scale && m.scale.x) || 1, 1 + Math.abs(ny) * 0.06, 0.06);
          m.scale.setScalar(s);
        } else {
          mesh.rotation.y += 0.003;
          mesh.rotation.x += 0.0015;
        }
      }
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    const onResize = () => {
      const r = container.getBoundingClientRect();
      const w = Math.max(1, Math.floor(r.width));
      const h = Math.max(1, Math.floor(r.height));
      // ensure renderer matches container size (using devicePixelRatio already set)
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      // ensure canvas CSS fills container
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
    };

    // observe resizes to ensure canvas always fills its parent
    const ro = new ResizeObserver(() => onResize());
    ro.observe(container);

    const handleMouse = (e: MouseEvent) => {
      const b = container.getBoundingClientRect();
      mouse.current.x = e.clientX - b.left;
      mouse.current.y = e.clientY - b.top;
    };

    if (interactive) {
      container.addEventListener("mousemove", handleMouse);
      container.addEventListener("touchmove", (ev: TouchEvent) => {
        const t = ev.touches[0];
        if (t) handleMouse(t as unknown as MouseEvent);
      });
    }

  // also handle window resize
  window.addEventListener("resize", onResize);
  // initial resize
  requestAnimationFrame(onResize);
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", onResize);
      ro.disconnect();
      if (interactive) container.removeEventListener("mousemove", handleMouse as EventListener);
      renderer.dispose();
      if (renderer.domElement.parentNode === container) container.removeChild(renderer.domElement);
    };
  }, [mode, interactive]);

  return <div ref={ref} className={className} />;
};

export default ThreeScene;
