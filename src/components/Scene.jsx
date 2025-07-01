import { Canvas } from "@react-three/fiber";
import React, { useState, useEffect, useRef } from "react";
import Model from "./Model";
import { Environment } from "@react-three/drei";
import { useTheme } from "../Theme-context";

const Scene = () => {
  const { theme } = useTheme();
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const pointLightRef = useRef();
  const handleMouseMove = (event) => {
    const { innerWidth, innerHeight } = window;
    const x = (event.clientX / innerWidth) * 2 - 1;
    const y = (event.clientY / innerHeight) * 2 + 1;
    setMousePosition({ x, y });
    if (pointLightRef.current) {
      pointLightRef.current.position.set(x * 20, y * 20, 2);
    }
  };
  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 }); // Reset position when cursor leaves viewport
    if (pointLightRef.current) {
      pointLightRef.current.position.set(0, 0, 2); // Reset PointLight position
    }
  };
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);
  return (
    <Canvas shadows gl={{ antialias: false }}>
      <ambientLight intensity={2} />
      <directionalLight
        color={"#FEBA17"}
        intensity={theme === "dark" ? 2 : 8}
        position={theme === "dark" ? [0, 6, 4] : [0, -2, -3]}
      />
      <directionalLight
        color={"#471396"}
        intensity={theme === "dark" ? 5 : 8}
        position={theme === "dark" ? [0, -2, 3] : [0, 2, 3]}
      />
      <pointLight
        ref={pointLightRef}
        intensity={10}
        color={"#fffff"}
        position={[0, 0, 2]}
      />

      <Environment files={"/qwantani_puresky_1k.hdr"} />
      <Model position={mousePosition} />
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
