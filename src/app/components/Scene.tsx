'use client'
import React, { useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { EffectComposer, Bloom, ChromaticAberration } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { ContactShadows, CubeCamera, Environment, Lightformer, PerspectiveCamera } from "@react-three/drei";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";
import "../globals.css";
import Car from "./Model";

gsap.registerPlugin(ScrollTrigger);

export default function Scene() {
  const { camera } = useThree();
  const lookAtTarget = new THREE.Vector3(0, 0, 0);

  // Camera animation setup
  useEffect(() => {
    camera.position.set(0, 1, 7);
    camera.lookAt(lookAtTarget);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".scroll-page",
        start: "top bottom",
        end: "bottom bottom",
        scrub: 2,
      },
    });

    // Camera movement animation
    tl.to(camera.position, { x: 0, y: 1, z: 7, duration: 1 }, 0)
      .to(camera.position, { x: -2.7, y: 1.5, z: 3.5, duration: 1 }, 1)
      .to(camera.position, { x: 4, y: 0.7, z: 2, duration: 1 }, 2)
      .to(camera.position, { x: 3.5, y: 0.5, z: -4.2, duration: 1 }, 3)
      .to(camera.position, { x: 4, y: 0.7, z: 2, duration: 1 }, 4)
      .to(camera.position, { x: 1, y: 1.8, z: 4, duration: 1 }, 5)
      .to(camera.position, { x: -0.5, y: 0.7, z: 4.7, duration: 1 }, 6);

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [camera]);

  // Keep camera focused on target
  useFrame(() => camera.lookAt(lookAtTarget));

  return (
    <>
      <PerspectiveCamera makeDefault fov={50} />

      {/* Decorative rings */}
      <mesh scale={1.7} position={[-1.5, -0.51, 1.8]} rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}>
        <ringGeometry args={[0.9, 1, 4, 1]} />
        <meshStandardMaterial color="#b9b9b9" roughness={1.75} />
      </mesh>
      <mesh scale={3} position={[2, -0.52, -1]} rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}>
        <ringGeometry args={[0.9, 1, 3, 1]} />
        <meshStandardMaterial color="#b9b9b9" roughness={1.75} />
      </mesh>

      {/* Environment and car */}
      <CubeCamera resolution={512} frames={Infinity}>
        {(texture) => (
          <>
            <Environment resolution={512}>
              {/* Lighting elements */}
              {[...Array(7)].map((_, i) => (
                <Lightformer key={i} intensity={2} rotation-x={Math.PI / 2} 
                  position={[0, 4, -9 + i*3]} scale={[10, 1, 1]} />
              ))}
              <Lightformer intensity={6} rotation-y={Math.PI / 2} 
                position={[-50, 2, 0]} scale={[100, 2, 1]} />
              <Lightformer intensity={6} rotation-y={-Math.PI / 2} 
                position={[50, 2, 0]} scale={[100, 2, 1]} />
              
              {/* Colored lights */}
              {[
                { color: "white", intensity: 10, pos: [10, 5, 10] },
                { color: "white", intensity: 10, pos: [10, 10, 10] },
                { color: "white", intensity: 15, pos: [20, -20, 10] },
                { color: "white", intensity: 15, pos: [20, -15, 10] }
              ].map((light, i) => (
                <Lightformer key={i} color={light.color} intensity={light.intensity} 
                  scale={[10, 1, 1]} position={light.pos} 
                  onUpdate={(self) => self.lookAt(0, 0, 0)} />
              ))}
            </Environment>

            <Car castShadow receiveShadow 
              rotation={[0, -0.7, 0]} 
              position={[0, -0.53, 0]} 
              envMap={texture} 
            />
          </>
        )}
      </CubeCamera>

      <hemisphereLight intensity={10} />
      <ContactShadows resolution={1024} frames={2} 
        position={[0, -0.5, 0]} scale={25} blur={0.5} 
        opacity={1} far={20} />

      {/* Visual effects */}
      <EffectComposer>
        <Bloom blendFunction={BlendFunction.ADD} intensity={0.1} 
          width={300} height={300} kernelSize={5} 
          luminanceThreshold={0.1} luminanceSmoothing={0.03} />
        <ChromaticAberration blendFunction={BlendFunction.NORMAL} 
          offset={[0.0004, 0.001]} />
      </EffectComposer>
    </>
  );
}