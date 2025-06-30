import { Canvas } from "@react-three/fiber";
import React from "react";
import Model from "./Model";
import { Environment } from "@react-three/drei";

const Scene = () => {
  return (
    <Canvas>
      <directionalLight intensity={3} position={[0, 3, 2]} />
      <Environment preset="forest" />
      <Model />
    </Canvas>
  );
};

// apartment: "lebombo_1k.hdr";
// city: "potsdamer_platz_1k.hdr";
// dawn: "kiara_1_dawn_1k.hdr";
// forest: "forest_slope_1k.hdr";
// lobby: "st_fagans_interior_1k.hdr";
// night: "dikhololo_night_1k.hdr";
// park: "rooitou_park_1k.hdr";
// studio: "studio_small_03_1k.hdr";
// sunset: "venice_sunset_1k.hdr";
// warehouse: "empty_warehouse_01_1k.hdr";

export default Scene;
