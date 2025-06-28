'use client'
import React, { Suspense, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { EffectComposer, Bloom, ChromaticAberration } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { ContactShadows, CubeCamera, Environment, Lightformer, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";
import "../globals.css";

import Car from "./Model";

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);
 
export default function Scene() {
  const { camera } = useThree();

  // Vector that the camera will look at
  const lookAtTarget = new THREE.Vector3(0, 0, 0);

  useEffect(() => {
    // Set initial camera position and orientation
    camera.position.set(0, 1, 7);
    camera.lookAt(lookAtTarget);

    // Create GSAP timeline for scroll-based animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".scroll-page", // DOM element to trigger scroll
        start: "top bottom",
        end: "bottom bottom",
        scrub: 2, // Synchronize animation with scroll
      },
    });

    // First transition: move camera left and slightly forward
    tl.to(camera.position, {
      x: 0,
      y: 1,
      z: 7,
      duration: 1,
      ease: "power1.inOut",
    }, 0)
    .to(camera.position, {
      x: -2.7,
      y: 1.5,
      z: 3.5,
      duration: 1,
      ease: "power1.inOut",
    }, 1)

    // Second transition: move camera to the right side
    .to(camera.position, {
      x: 4,
      y: 0.7,
      z: 2,
      duration: 1,
      ease: "power1.inOut",
    }, 2)

    // // Return the look target back to the center
    .to(camera.position, {
      x: 3.5,
      y: 0.5,
      z: -4.2,
      duration: 1,
      ease: "power1.inOut",
    }, 3)
    .to(camera.position, {
      x: 4,
      y: 0.7,
      z: 2,
      duration: 1,
      ease: "power1.inOut",
    }, 4)
    .to(camera.position, {
      x: 1,
      y: 1.8,
      z: 4,
      duration: 1,
      ease: "power1.inOut",
    }, 5)
    .to(camera.position, {
      x: -0.5,
      y: 0.7,
      z: 4.7,
      duration: 1,
      ease: "power1.inOut",
    }, 6)

    // Cleanup timeline and scroll trigger on component unmount
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [camera]);

  // Continuously update camera lookAt target on each frame
  useFrame(() => {
    camera.lookAt(lookAtTarget);
  });

  return (
    <>
      {/* Default camera for the scene */}
      <PerspectiveCamera makeDefault fov={50} />

      {/* Scene background color */}
      {/* <color args={["#15151a"]} attach="background" /> */}

      <mesh scale={1.7} position={[-1.5, -0.51, 1.8]} rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}>
        <ringGeometry args={[0.9, 1, 4, 1]} />
        <meshStandardMaterial color="#b9b9b9" roughness={1.75} />
      </mesh>
      <mesh scale={3} position={[2, -0.52, -1]} rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}>
        <ringGeometry args={[0.9, 1, 3, 1]} />
        <meshStandardMaterial color="#b9b9b9" roughness={1.75} />
      </mesh>

      {/* Environment reflection using CubeCamera */}
      <CubeCamera resolution={512} frames={Infinity}>
        {(texture) => (
          <>
            <Environment resolution={512}>
              {/* Ceiling */}
              <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -9]} scale={[10, 1, 1]} />
              <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -6]} scale={[10, 1, 1]} />
              <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -3]} scale={[10, 1, 1]} />
              <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 0]} scale={[10, 1, 1]} />
              <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 3]} scale={[10, 1, 1]} />
              <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 6]} scale={[10, 1, 1]} />
              <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 9]} scale={[10, 1, 1]} />
              {/* Sides */}
              <Lightformer intensity={6} rotation-y={Math.PI / 2} position={[-50, 2, 0]} scale={[100, 2, 1]} />
              <Lightformer intensity={6} rotation-y={-Math.PI / 2} position={[50, 2, 0]} scale={[100, 2, 1]} />
              {/* Key */}
              <Lightformer color="white" intensity={10} scale={[10, 1, 1]}  position={[10, 5, 10]} onUpdate={(self) => self.lookAt(0, 0, 0)} />
              <Lightformer color="blue" intensity={10} scale={[10, 1, 1]}  position={[10, 10, 10]} onUpdate={(self) => self.lookAt(0, 0, 0)} />
              <Lightformer color="yellow" intensity={15} scale={[10, 1, 1]}  position={[20, -20, 10]} onUpdate={(self) => self.lookAt(0, 0, 0)} />
              <Lightformer color="green" intensity={15} scale={[10, 1, 1]}  position={[20, -15, 10]} onUpdate={(self) => self.lookAt(0, 0, 0)} />
            </Environment>

            <Car 
              castShadow 
              receiveShadow 
              rotation={[0, -0.7, 0]} 
              position={[0, -0.53, 0]} 
              envMap={texture} 
            />
            {/* <OrbitControls /> */}
          </>
        )}
      </CubeCamera>

      {/* Hemisphere light for soft ambient illumination */}
      <hemisphereLight intensity={10} />

      <ContactShadows resolution={1024} frames={2} position={[0, -0.5, 0]} scale={25} blur={0.5} opacity={1} far={20} />

      {/* Postprocessing effects */}
      <EffectComposer>
        <Bloom
          blendFunction={BlendFunction.ADD}
          intensity={0.1}
          width={300}
          height={300}
          kernelSize={5}
          luminanceThreshold={0.1}
          luminanceSmoothing={0.03}
        />
        <ChromaticAberration
          blendFunction={BlendFunction.NORMAL}
          offset={[0.0004, 0.001]}
        />
      </EffectComposer>
    </>
  );
}