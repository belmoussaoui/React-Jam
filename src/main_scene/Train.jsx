import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import useGame from "../stores/useGame";

export default function Train({x, y}) {
	const rails = useGame((state) => state.rails)
	const trainRef = useRef();
	const isPlay = useGame((state) => state.isPlay)
	let index = 0;
	let d = 3;
	let nextX = x;
	let nextY = y + 1;
	useFrame((state, delta) => {
		if (!isPlay) return
		if (nextX == trainRef.current.position.x && nextY == trainRef.current.position.z) {
			if (rails.length -1 <= index)
				return
			if (rails[index] == 2) {
				d -= 1
				if (d == -1) d = 3
			}
			if (rails[index] == 3) {
				d += 1
				if (d == 4) d = 0
			}
			if (d == 3)
				nextY += 1
			if (d == 1)
				nextY -= 1
			if (d == 0) nextX += 1;
			if (d == 2) nextX -= 1;
			index++;
		}
		if (nextX > trainRef.current.position.x)
			trainRef.current.position.x += delta / 2; 
		if (nextX < trainRef.current.position.x)
			trainRef.current.position.x -= delta / 2; 
		if (nextY > trainRef.current.position.z)
			trainRef.current.position.z += delta / 2; 
		if (nextY < trainRef.current.position.z)
			trainRef.current.position.z -= delta / 2;
		
		if (d == 0 && nextX - trainRef.current.position.x < delta / 2)
			trainRef.current.position.x = nextX; 
		if (d == 2 && trainRef.current.position.x - nextX < delta / 2)
			trainRef.current.position.x = nextX;
		if (d == 1 && trainRef.current.position.z - nextY < delta / 2)
			trainRef.current.position.z = nextY; 
		if (d == 3 &&  nextY - trainRef.current.position.z < delta / 2)
			trainRef.current.position.z = nextY; 
		trainRef.current.rotation.y = (Math.PI / 2) * d - Math.PI / 2;
	});
	return <>
		 <mesh
		 		ref={trainRef}
				position-x={x}
				position-z={y}
				scale={ [ 0.4, 0.4, 0.8 ] }
				position-y={0.2}
				
			>
			<boxGeometry />
			<meshStandardMaterial color="blue" />
		</mesh>
	</>
}