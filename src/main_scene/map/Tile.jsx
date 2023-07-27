import { Clone, useGLTF } from "@react-three/drei";
import useMap from "../../stores/useMap";

function tileIdToMapX(tileId) {
	let width = useMap((state) => state.width);
	return tileId % width;
}

function tileIdToMapY(tileId) {
	let width = useMap((state) => state.width);
	return Math.floor(tileId / width);
}

function getDataTile(dataId, x, y, width, height) {
	return <>
		 <mesh
			position-x={x + .5 - width / 2}
			position-z={y + .5 - height / 2}
			position-y={-0.5}
			scale={[1, 1, 1]}
		>
			{/* <boxGeometry />
			<meshStandardMaterial color="green" /> */}
			{/* <mesh
				position-x={x - width / 2}
				position-z={y - height / 2}
				position-y={0.75}
				scale={[0.5, 0.5, 0.5]}
			>
				<boxGeometry />
				<meshStandardMaterial color="red" />
			</mesh> */}
		</mesh>
	</>
}

export default function Tile({tileId, dataId}) {
	let width = useMap((state) => state.width);
	let height = useMap((state) => state.height);
	let x = tileIdToMapX(tileId);
	let y = tileIdToMapY(tileId);
	const tile = useGLTF('./Tile.glb')
	if (dataId === 0) {
		const { nodes, materials } = useGLTF("/Tile.glb");
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

	const { nodes, materials } = useGLTF("/Castle.glb");
	return (
	  <group
	  position-x={x + .5 - width / 2}
	  position-z={y + .5 - height / 2}
	  position-y={0}
	  scale={[0.5, 0.5, 0.5]}
	  rotation-y={3 * Math.PI / 2} 
	  dispose={null}>
		<mesh
		  castShadow
		  receiveShadow
		  geometry={nodes.Cube.geometry}
		  material={materials.Material}
		  position-x={x + .5 - width / 2}
		/>
		<group position={[0, 0.709, 0]} scale={0.547}>
		  <mesh
			castShadow
			receiveShadow
			geometry={nodes.Cube001_1.geometry}
			material={materials["Material.001"]}
		  />
		  <mesh
			castShadow
			receiveShadow
			geometry={nodes.Cube001_2.geometry}
			material={materials["Material.003"]}
		  />
		  <mesh
			castShadow
			receiveShadow
			geometry={nodes.Cube001_3.geometry}
			material={materials["Material.004"]}
		  />
		</group>
		<mesh
		  castShadow
		  receiveShadow
		  geometry={nodes.Plane.geometry}
		  material={materials["Material.005"]}
		  position={[0, 1.883, -0.13]}
		  rotation={[0, 0, -Math.PI / 2]}
		  scale={[0.098, 0.098, 0.121]}
		/>
		<mesh
		  castShadow
		  receiveShadow
		  geometry={nodes.Cube002.geometry}
		  material={materials["Material.002"]}
		  position={[0.423, 0.27, 0.456]}
		/>
	  </group>
	);
}