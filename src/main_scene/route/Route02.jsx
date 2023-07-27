import { useGLTF } from "@react-three/drei";
import $dataMap from "../../assets/Map01";

export default function({x, y, d}) {
	const { nodes, materials } = useGLTF("./Route02.glb");
	return (
		<group  position-x={x + .5 - $dataMap.width / 2}
		position-z={y + .5 - $dataMap.height / 2} rotation-y={d * Math.PI / 2}  dispose={null} scale={ [ 0.5, 0.5, 0.5 ] } >
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube.geometry}
				material={materials["Material.005"]}
				position={[0, 0.18, 0.216]}
				scale={[1, 0.748, 0.811]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube003.geometry}
				material={materials["Material.005"]}
				position={[0, 0.18, -0.22]}
				scale={[1, 0.748, 0.811]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube014.geometry}
				material={materials["Material.006"]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube004.geometry}
				material={materials["Material.005"]}
				position={[0.218, 0.18, -0.002]}
				rotation={[0, Math.PI / 2, 0]}
				scale={[1, 0.748, 0.811]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube005.geometry}
				material={materials["Material.005"]}
				position={[-0.218, 0.18, -0.002]}
				rotation={[0, Math.PI / 2, 0]}
				scale={[1, 0.748, 0.811]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube006.geometry}
				material={materials["Material.006"]}
				rotation={[0, Math.PI / 2, 0]}
			/>
		</group>
		);
}


useGLTF.preload("./Route02.glb");