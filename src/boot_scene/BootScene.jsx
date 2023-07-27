import { Html, useProgress } from "@react-three/drei";
import useScene from "../stores/useScene";

export default function BootScene() {
	const setScene = useScene((state) => state.setScene);
	// useFrame((state, delta) => {
	// 	cubeRef.current.rotation.y += delta; 
	// });
	let goToMain = () => {
		setScene("main");
		console.log("ok");
	}
	const { progress } = useProgress();
	const bar = document.querySelector("#bar");
	bar.style.width = progress + "%";
	const value = document.querySelector(".value");
	value.textContent = progress;
	if (progress === 100) {
		goToMain();
	}
	return <></>
}