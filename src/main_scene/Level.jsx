import { Grid } from "@react-three/drei";

let $gameMap = {
	width: 8,
	height: 14,
}
$gameMap.data = [...Array($gameMap.width * $gameMap.height)].map(x => 0)
$gameMap.data[10 * $gameMap.width + 2] = 1;


export default function Level() {
	return <>
		<Grid position={[0, 0.01, 0]} args={[$gameMap.width, $gameMap.height]}  cellThickness={0} />
		{ $gameMap.data.map((value, index) => 
			value == 1 ?
				<mesh
					key={index}
					scale={ [ .8, .8, .8 ] }
					position-x={(index % $gameMap.width) - $gameMap.width / 2 + 0.5}
					position-z={Math.round(index / $gameMap.width) - $gameMap.height / 2 + 0.5}
					position-y={0.4}
				>
					<boxGeometry />
					<meshStandardMaterial color="red" />
				</mesh> : null
		)}
	</>
}