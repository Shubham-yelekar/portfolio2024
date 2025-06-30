import { MeshTransmissionMaterial, useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useControls } from "leva";
import React from "react";

const Model = (props) => {
  const { nodes, materials } = useGLTF("/Models/mylogo.glb");

  const { viewport } = useThree();

  const materialProps = useControls({
    thickness: { value: 0.3, min: 0, max: 3, steps: 0.05 },
    roughness: { value: 0, min: 0, max: 1, steps: 0.1 },
    transmission: { value: 1, min: 0, max: 1, step: 0.1 },
    ior: { value: 1.2, min: 0, max: 3, step: 0.1 },
    chromaticAberration: { value: 0.02, min: 0, max: 1 },
    backside: { value: true },
  });
  return (
    <group {...props} dispose={null} scale={viewport.width / 4}>
      <mesh
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
