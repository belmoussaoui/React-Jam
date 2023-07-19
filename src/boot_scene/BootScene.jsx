import { Html, useProgress } from "@react-three/drei";

export default function BootScene({director}) {
	// useFrame((state, delta) => {
	// 	cubeRef.current.rotation.y += delta; 
	// });
	const { progress } = useProgress();
	const bar = document.querySelector("#bar");
	bar.style.width = progress + "%";
	const value = document.querySelector(".value");
	value.textContent = progress;
	if (progress === 100) director("open");
	return <></>
}