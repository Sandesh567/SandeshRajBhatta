import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <Canvas
    camera={{
      fov: 55,
      near: 0.3,
      far: 4000,
      position: [-1, 1.5, 4],
    }}
  >
    <Experience />
  </Canvas>
);
