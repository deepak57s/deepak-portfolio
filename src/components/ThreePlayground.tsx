import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreePlayground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return;

    const container = containerRef.current;
    const canvas = canvasRef.current;

    // --- Scene Setup ---
    const scene = new THREE.Scene();
    
    // --- Camera ---
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.z = 7.5;

    // --- Renderer ---
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // --- Lighting ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xc084fc, 2.5, 30); // Purple glow
    pointLight.position.set(0, 0, 4);
    scene.add(pointLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 0.9);
    dirLight1.position.set(5, 5, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x38bdf8, 0.4); // Blue fill
    dirLight2.position.set(-5, -5, 2);
    scene.add(dirLight2);

    // --- Particle Swarm ---
    const particleCount = 450;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleVelocities: number[] = [];

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 18;
      particlePositions[i + 1] = (Math.random() - 0.5) * 18;
      particlePositions[i + 2] = (Math.random() - 0.5) * 12;

      particleVelocities.push((Math.random() - 0.5) * 0.006);
      particleVelocities.push((Math.random() - 0.5) * 0.006);
      particleVelocities.push((Math.random() - 0.5) * 0.006);
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    // Glowy circular particle texture via HTML canvas
    const pCanvas = document.createElement('canvas');
    pCanvas.width = 16;
    pCanvas.height = 16;
    const ctx = pCanvas.getContext('2d');
    if (ctx) {
      const grad = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
      grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
      grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 16, 16);
    }
    const particleTexture = new THREE.CanvasTexture(pCanvas);

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.12,
      map: particleTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      color: 0xa855f7, // glowing purple
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // --- Tech Nodes (Mesh Objects) ---
    const nodes: {
      mesh: THREE.Mesh;
      baseScale: number;
      targetScale: number;
      spinVelocity: number;
      floatOffset: number;
    }[] = [];

    const nodeData = [
      {
        geom: new THREE.TorusKnotGeometry(0.4, 0.12, 100, 16),
        mat: new THREE.MeshStandardMaterial({
          color: 0x38bdf8, // Cyan
          roughness: 0.15,
          metalness: 0.8,
        }),
        pos: new THREE.Vector3(-2.8, 1.2, 0),
      },
      {
        geom: new THREE.IcosahedronGeometry(0.55, 1),
        mat: new THREE.MeshStandardMaterial({
          color: 0x34d399, // Emerald
          wireframe: true,
        }),
        pos: new THREE.Vector3(2.6, 1.5, -0.5),
      },
      {
        geom: new THREE.ConeGeometry(0.45, 0.9, 4),
        mat: new THREE.MeshStandardMaterial({
          color: 0xfb923c, // Orange / Java Amber
          roughness: 0.1,
          metalness: 0.8,
        }),
        pos: new THREE.Vector3(-2.2, -1.5, -0.5),
      },
      {
        geom: new THREE.SphereGeometry(0.5, 32, 32),
        mat: new THREE.MeshStandardMaterial({
          color: 0xc084fc, // Purple
          roughness: 0.2,
          metalness: 0.4,
        }),
        pos: new THREE.Vector3(2.5, -1.2, 0),
      },
    ];

    nodeData.forEach((data, index) => {
      const mesh = new THREE.Mesh(data.geom, data.mat);
      mesh.position.copy(data.pos);
      scene.add(mesh);

      nodes.push({
        mesh,
        baseScale: 1,
        targetScale: 1,
        spinVelocity: 0.005,
        floatOffset: index * Math.PI * 0.5,
      });
    });

    // --- Mouse & Raycasting Interactions ---
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    const targetMouse = new THREE.Vector2();
    let hoveredNode: typeof nodes[0] | null = null;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      targetMouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    };

    const handleClick = () => {
      if (hoveredNode) {
        hoveredNode.spinVelocity = 0.18; // Hyper spin
        pointLight.color.set(hoveredNode.mesh.material instanceof THREE.MeshStandardMaterial ? hoveredNode.mesh.material.color : 0xc084fc);
        pointLight.position.copy(hoveredNode.mesh.position);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    // --- Animation Loop ---
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth lag for mouse coordinates
      mouse.x += (targetMouse.x - mouse.x) * 0.08;
      mouse.y += (targetMouse.y - mouse.y) * 0.08;

      // Parallex rotation on scene
      scene.rotation.y = mouse.x * 0.2;
      scene.rotation.x = -mouse.y * 0.2;

      // Animate background particles
      const positions = particleGeometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount * 3; i += 3) {
        positions[i] += particleVelocities[i / 3];
        positions[i + 1] += particleVelocities[i / 3 + 1];
        positions[i + 2] += particleVelocities[i / 3 + 2];

        // Boundaries check
        if (Math.abs(positions[i]) > 9) particleVelocities[i / 3] *= -1;
        if (Math.abs(positions[i + 1]) > 9) particleVelocities[i / 3 + 1] *= -1;
        if (Math.abs(positions[i + 2]) > 9) particleVelocities[i / 3 + 2] *= -1;
      }
      particleGeometry.attributes.position.needsUpdate = true;

      // Raycaster
      raycaster.setFromCamera(mouse, camera);
      const meshesToTest = nodes.map(n => n.mesh);
      const intersects = raycaster.intersectObjects(meshesToTest);

      if (intersects.length > 0) {
        const intersectedMesh = intersects[0].object;
        const matchingNode = nodes.find(n => n.mesh === intersectedMesh);
        if (matchingNode) {
          if (hoveredNode !== matchingNode) {
            if (hoveredNode) hoveredNode.targetScale = 1;
            hoveredNode = matchingNode;
            hoveredNode.targetScale = 1.35;
          }
        }
      } else {
        if (hoveredNode) {
          hoveredNode.targetScale = 1;
          hoveredNode = null;
        }
      }

      // Animate nodes float + spin
      nodes.forEach((node, index) => {
        const basePos = nodeData[index].pos;
        // Floating up and down
        node.mesh.position.y = basePos.y + Math.sin(elapsedTime * 1.6 + node.floatOffset) * 0.15;
        node.mesh.position.x = basePos.x + Math.cos(elapsedTime * 0.8 + node.floatOffset) * 0.08;

        // Spins
        node.mesh.rotation.y += node.spinVelocity;
        node.mesh.rotation.x += 0.004;

        if (node.spinVelocity > 0.005) {
          node.spinVelocity *= 0.96; // decay click hyper spin
          if (node.spinVelocity < 0.005) node.spinVelocity = 0.005;
        }

        // Lerp scale
        const s = node.mesh.scale.x;
        const diff = (node.targetScale - s) * 0.12;
        node.mesh.scale.set(s + diff, s + diff, s + diff);
      });

      renderer.render(scene, camera);
    };

    animate();

    // --- Resizing ---
    const handleResize = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    resizeObserver.observe(container);

    // --- Cleanup ---
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      
      particles.geometry.dispose();
      (particles.material as THREE.PointsMaterial).dispose();
      particleTexture.dispose();

      nodes.forEach((node) => {
        node.mesh.geometry.dispose();
        if (Array.isArray(node.mesh.material)) {
          node.mesh.material.forEach((m) => m.dispose());
        } else {
          node.mesh.material.dispose();
        }
      });

      renderer.dispose();
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-auto">
      <canvas ref={canvasRef} className="block w-full h-full" />
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 glass px-5 py-2 rounded-full pointer-events-none text-[10px] text-primary-light/60 tracking-[0.2em] uppercase flex items-center gap-2.5">
        <span className="w-1.5 h-1.5 rounded-full bg-accent-purple animate-pulse" />
        3D Playground • Hover & Click Nodes
      </div>
    </div>
  );
};

export default ThreePlayground;
