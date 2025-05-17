import { Environment, useGLTF, OrbitControls } from "@react-three/drei";

export default function Experience() {
  const computer = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );
  return (
    <>
      <Environment preset="city" />

      <color args={["#695b5b"]} attach="background" />
      <OrbitControls makeDefault />

      <primitive object={computer.scene} />
    </>
  );
}
