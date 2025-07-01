import { MeshTransmissionMaterial, useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

import React, { useRef, useEffect, useState } from "react";
import { useControls } from "leva";
import { useTheme } from "../Theme-context";

const Model = (props) => {
  const { nodes, materials } = useGLTF("/Models/mylogo.glb");
  const { theme, mouse } = useTheme();
  const { viewport } = useThree();
  const mesh = useRef();
  const defaultRotation = { x: Math.PI / 2, y: 0, z: 0 };

  // Leva controls for material properties
  // const materialProps = useControls("Material Properties", {
  //   transmission: { value: 0.1, min: 0, max: 1, step: 0.01 },
  //   thickness: { value: 0.5, min: 0, max: 3, step: 0.1 },
  //   roughness: { value: 0.1, min: 0, max: 1, step: 0.01 },
  //   ior: { value: 1.5, min: 1, max: 3, step: 0.1 },
  //   chromaticAberration: { value: 0.03, min: 0, max: 1, step: 0.01 },
  //   backside: { value: true },
  // });
  console.log(props.position);

  const darkModeProps = {
    transmission: 0.99,
    thickness: 0.02,
    roughness: 0.08,
    ior: 0.8,
    chromaticAberration: 0.2,
    backside: true,
  };

  const lightModeProps = {
    transmission: 0.7,
    thickness: 0.02,
    roughness: 0.04,
    ior: 0.8,
    chromaticAberration: 0.2,
    backside: true,
  };
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y +=
        (props.position.x * Math.PI * 0.02 - mesh.current.rotation.y) * 0.1; // Rotate left and right (Y-axis)
      mesh.current.rotation.x +=
        (props.position.y * Math.PI * 0.02 - mesh.current.rotation.x) * 0.075 +
        0.1; // Rotate up and down (X-axis)
      // If mouse is outside viewport or stationary, return to default rotation
      if (props.position.x === 0 && props.position.y === 0) {
        mesh.current.rotation.x +=
          (defaultRotation.x - mesh.current.rotation.x) * 0.01 + 0.01;
        mesh.current.rotation.y +=
          (defaultRotation.y - mesh.current.rotation.y) * 0.01;
      }
    }
  });

  return (
    <group
      // position={[props.position.x, props.position.y, 0]}

      dispose={null}
      scale={viewport.width / 3.6}
    >
      <mesh
        ref={mesh}
        castShadow
        receiveShadow
        geometry={nodes.Curve.geometry}
        position={[0, 0, -1]}
        scale={[10, 10, 10]}
        rotation={[defaultRotation.x, defaultRotation.y, defaultRotation.z]}
      >
        <MeshTransmissionMaterial
          {...(theme == "dark" ? darkModeProps : lightModeProps)}
        />
      </mesh>
    </group>
  );
};

export default Model;
