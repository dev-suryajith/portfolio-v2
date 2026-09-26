import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Character from "./Character";


const CharacterScene = () => {


    return (
        <Canvas camera={{ position: [0, 1, 5], fov: 35 }}>
            <ambientLight intensity={1} />

            <directionalLight
                position={[2, 4, 3]}
                intensity={2}
            />

            <Character />

            <OrbitControls
                enableZoom={false}
                enablePan={false}
                enableRotate={false}
            />
        </Canvas>
    );
};

export default CharacterScene;