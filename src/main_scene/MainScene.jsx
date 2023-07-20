import { Grid, Stage, useTexture } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useRef } from 'react';
import { OrbitControls } from '@react-three/drei';
import { useGLTF } from '@react-three/drei';
import Level from './Level';
import Light from './Light';



window.threeG = null;
export default function MainScene() {
	const cubeRef = useRef();
	// useFrame((state, delta) => {
	// 	cubeRef.current.rotation.y += delta; 
	// });
	window.threeG = useThree();
	return <>
		<OrbitControls />
		<Light></Light>
		<Level></Level>
	</>
}

useGLTF.preload("./Block.glb");