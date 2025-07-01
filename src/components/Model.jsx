import { MeshTransmissionMaterial, useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

import React, { useRef, useEffect } from "react";
import { useControls } from "leva";
const Model = (props) => {
  const { nodes, materials } = useGLTF("/Models/mylogo.glb");

  const { viewport } = useThree();
  const mesh = useRef();

  // Leva controls for material properties
  const materialProps = useControls("Material Properties", {
    transmission: { value: 0.1, min: 0, max: 1, step: 0.01 },
    thickness: { value: 0.5, min: 0, max: 3, step: 0.1 },
    roughness: { value: 0.1, min: 0, max: 1, step: 0.01 },
    ior: { value: 1.5, min: 1, max: 3, step: 0.1 },
    chromaticAberration: { value: 0.03, min: 0, max: 1, step: 0.01 },
    backside: { value: true },
  });

  useFrame(() => {
    mesh.current.rotation.z -= 0.01;
  });

  return (
    <group {...props} dispose={null} scale={viewport.width / 4}>
      <mesh
        ref={mesh}
        castShadow
        receiveShadow
        geometry={nodes.Curve.geometry}
        position={[0, 0, 0]}
        scale={[6, 6, 6]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
    </group>
  );
};

export default Model;
