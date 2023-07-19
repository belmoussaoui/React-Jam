import { Stage } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react';
import { OrbitControls } from '@react-three/drei';
import { useGLTF } from '@react-three/drei';



export default function MainScene() {
	const cubeRef = useRef();
	useFrame((state, delta) => {
		cubeRef.current.rotation.y += delta; 
	});
	return <>
		<OrbitControls />
		<ambientLight intensity={0.166666}></ambientLight>
		<spotLight castShadow intensity={1} position={[1.3, 2.6, 1.3]}></spotLight>
		<pointLight intensity={0.5} position={[-2.5, -0.6, -2.6]}></pointLight>
		{/* <Stage> */}
			<mesh ref={ cubeRef } castShadow adjustCamera={false} position-x={ 0 } position-y={ 0 } position-z={ 0 } scale={ 1.5 }>
				<boxGeometry></boxGeometry>
				<meshStandardMaterial color="mediumpurple"></meshStandardMaterial>
			</mesh>
		{/* </Stage> */}
	</>
}
