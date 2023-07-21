import { Grid } from "@react-three/drei";
import useGame from "../stores/useGame";
import Train from "./Train";

let $gameMap = {
	width: 8,
	height: 14,
}
$gameMap.data = [...Array($gameMap.width * $gameMap.height)].map(x => 0)
$gameMap.data[6 * $gameMap.width + 4] = 1;


export default function Level() {
	const rails = useGame((state) => state.rails)
	let x = 4;
	let y = 6;
	let d = 3; 
	return <>
		<Train x={(4) - $gameMap.width / 2 + 0.5} y={Math.floor(6) - $gameMap.height / 2 + 0.5} ></Train>
		<Grid position={[0, 0.01, 0]} args={[$gameMap.width, $gameMap.height]}  cellThickness={0} />
		{ $gameMap.data.map((value, index) => 
			value == 1 ?
				<mesh
					key={index}
					scale={ [ .8, .8, .8 ] }
					position-x={(index % $gameMap.width) - $gameMap.width / 2 + 0.5}
					position-z={Math.floor(index / $gameMap.width) - $gameMap.height / 2 + 0.5}
					position-y={0.4}
				>
					<boxGeometry />
					<meshStandardMaterial color="red" />
				</mesh> : null
		)}
		{ rails.map((value, index) => {
			if (index == 0) d = 3;
			
			if (d == 3) y += 1
			if (d == 0) x += 1
			if (d == 1) y -= 1
			if (d == 2) x -= 1
			if (value == 2) {
				if (d == 3) d = 2
				else if (d == 0) d = 3
				else if (d == 1) d = 0
				else if (d == 2) d = 1
			}
			if (value == 3) {
				if (d == 3) d = 0
				else if (d == 0) d = 1
				else if (d == 1) d = 2
				else if (d == 2) d = 3
			}

			if (value == 1)
			return <mesh
						position-x={x - $gameMap.width / 2 + 0.5}
						position-z={y - $gameMap.height / 2 + 0.5}
						key={index}
						scale={ [ .4, .05, 1 ] }
						position-y={0.025}
						rotation-y={(Math.PI / 2) * d - Math.PI / 2}
					>
					<boxGeometry />
					<meshStandardMaterial color="red" />
				</mesh>
			if (value == 2)
			return <mesh scale={ [ 1, 1, 1 ] } position-x={x - $gameMap.width / 2 + 0.5}
			position-z={y - $gameMap.height / 2 + 0.5} rotation-y={(Math.PI / 2) * d - Math.PI / 2}>
					{/* <boxGeometry /> */}
					{/* <meshStandardMaterial color="yellow" /> */}
					<mesh
						position-x={- 0}
						position-z={- 0.15}
						key={index}
						scale={ [ 0.4, 0.05, 0.7 ] }
						position-y={0.025}
						// rotation-y={(Math.PI / 2) * oldD - Math.PI / 2}
						
					>
						<boxGeometry />
						<meshStandardMaterial color="green" />
					</mesh>
					<mesh
						position-x={0.15}
						position-z={0}
						key={index}
						scale={ [ 0.7, 0.05, 0.4 ] }
						position-y={0.025}
						
					>
						<boxGeometry />
						<meshStandardMaterial color="green" />
					</mesh>
				</mesh>
			return <mesh scale={ [ 1, 1, 1 ] } position-x={x - $gameMap.width / 2 + 0.5}
			position-z={y - $gameMap.height / 2 + 0.5} rotation-y={(Math.PI / 2) * d - Math.PI / 2}>
					{/* <boxGeometry /> */}
					{/* <meshStandardMaterial color="yellow" /> */}
					<mesh
						position-x={- 0}
						position-z={- 0.15}
						key={index}
						scale={ [ 0.4, 0.05, 0.7 ] }
						position-y={0.025}
						// rotation-y={(Math.PI / 2) * oldD - Math.PI / 2}
						
					>
						<boxGeometry />
						<meshStandardMaterial color="yellow" />
					</mesh>
					<mesh
						position-x={-0.15}
						position-z={0}
						key={index}
						scale={ [ 0.7, 0.05, 0.4 ] }
						position-y={0.025}
						
					>
						<boxGeometry />
						<meshStandardMaterial color="yellow" />
					</mesh>
				</mesh>
		}) }
	</>
}