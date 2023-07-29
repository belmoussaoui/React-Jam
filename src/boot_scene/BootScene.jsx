import { Html, useProgress } from "@react-three/drei";
import useScene from "../stores/useScene";
import { useFrame } from "@react-three/fiber";

let value = 0;

export default function BootScene() {
	const setScene = useScene((state) => state.setScene);
	// useFrame((state, delta) => {
	// 	cubeRef.current.rotation.y += delta; 
	// });
	let goToMain = () => {
		setScene("main");
	}
	let start = document.querySelector("#start");
	start.onclick = () => {
		setTimeout(() => {
				goToMain();
			}, 100);
	}
	let loco = document.querySelector("#loco");
	useFrame(() => {
		if (value < progress)
			value += 0.5;
		loco.style.left = 100 + "%";
		bar.style.width = value + "%";
		if (value === 100) {
			
			start.style.display = "flex";
			
		}
		
	})
	const { progress } = useProgress();
	const bar = document.querySelector("#bar");
	
	
	return <></>
}