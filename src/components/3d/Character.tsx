import { useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";

const Character = () => {
    const gltf = useGLTF("./src/components/3d/robot/scene.gltf");

    const head = gltf.scene.getObjectByName("Head_03");

    const mouseX = useRef(0);
    const mouseY = useRef(0);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            mouseX.current =
                (event.clientX / window.innerWidth) * 2 - 1;

            mouseY.current =
                -(event.clientY / window.innerHeight) * 2 + 1;
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    useEffect(() => {
        if (!head) {
            console.error("Head_03 not found");
            return;
        }

        const update = () => {
            const targetRotationY = mouseX.current * 0.5;
            const targetRotationX = mouseY.current * -0.5;

            head.rotation.y = targetRotationY;
            head.rotation.x = targetRotationX;

            requestAnimationFrame(update);
        };

        const animationFrame = requestAnimationFrame(update);

        return () => {
            cancelAnimationFrame(animationFrame);
        };
    }, [head]);

    return (
        <primitive
            object={gltf.scene}
            scale={6}
            position={[0, 0.4, 0]}
        />
    );
};

export default Character;