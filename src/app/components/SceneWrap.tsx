'use client'
import React from 'react'
import Scene from "./Scene";
import { Canvas } from "@react-three/fiber";
import { Loader } from '@react-three/drei';
const SceneWrap = () => {
    return (
        
        <Canvas shadows >
            <Scene />
        </Canvas>
    )
}

export default SceneWrap