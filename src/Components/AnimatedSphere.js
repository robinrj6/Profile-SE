import React from "react";

import { Sphere, MeshDistortMaterial } from "@react-three/drei";


export default function AnimatedSphere() {
    return <Sphere visible args={[1, 100, 200]} scale={2.5} position={[0,0,0]}>
        <MeshDistortMaterial 
        color="#8352FD"
        attach="material" 
        distort={.3}
        speed={1.5}
        roughness={1}
        
        />
    </Sphere>
}