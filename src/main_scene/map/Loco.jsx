import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import useGame from "../../stores/useGame";
import $dataMap from "../../assets/Map01";

export default function Loco() {
	let startX = $dataMap.start % $dataMap.width;
	let startY = Math.floor($dataMap.start / $dataMap.width);
	let d = 3;
	return <>
		 <mesh
				position-x={startX + 0.5 - $dataMap.width / 2}
				position-z={startY + 0.5 - $dataMap.height / 2}
				scale={ [ 0.8, 0.4, 0.4 ] }
				position-y={0.2}
				rotation-y={d * Math.PI / 2}
			>
			<boxGeometry />
			<meshStandardMaterial color="blue" />
		</mesh>
	</>
}