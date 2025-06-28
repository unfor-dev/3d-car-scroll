'use client'
import React from 'react'
import Scene from "./Scene";
import { Canvas } from "@react-three/fiber";
import { Loader } from '@react-three/drei';
const SceneWrap = () => {
    return (
        
        <Canvas shadows >
            <fogExp2 attach="fog" color="black" density={0.1} />
            <Scene />
        </Canvas>
    )
}

export default SceneWrap