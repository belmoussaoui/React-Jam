import { useGLTF } from "@react-three/drei";
import useMap from "../../stores/useMap";
import Castle from "./Castle";

function tileIdToMapX(tileId) {
	let width = useMap((state) => state.width);
	return tileId % width;
}

function tileIdToMapY(tileId) {
	let width = useMap((state) => state.width);
	return Math.floor(tileId / width);
}

export default function Tile({tileId, dataId}) {
	let width = useMap((state) => state.width);
	let height = useMap((state) => state.height);
	let x = tileIdToMapX(tileId);
	let y = tileIdToMapY(tileId);
	if (dataId === 0) {
		const { nodes, materials } = useGLTF("./Tile.glb");
		return (
		  <group
		  position-x={x + .5 - width / 2} 
		  position-z={y + .5 - height / 2}
		  position-y={0}
		  scale={[0.5, 0.5, 0.5]}
		  rotation-y={3 * Math.PI / 2}  dispose={null}>
			<mesh
			  castShadow
			  receiveShadow
			  geometry={nodes.Cube.geometry}
			  material={materials["Material.001"]}
			/>
		  </group>
		);
	}
	return <Castle x={x} y={y}></Castle>;
}

useGLTF.preload("./Tile.glb");