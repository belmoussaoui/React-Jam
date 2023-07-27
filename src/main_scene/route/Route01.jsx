import { useGLTF } from "@react-three/drei";
import $dataMap from "../../assets/Map01";

export default function Route01({x, y, d}) {
	const { nodes, materials } = useGLTF("/Route01.glb");
	return (
		<group position-x={x + .5 - $dataMap.width / 2}
			position-z={y + .5 - $dataMap.height / 2}
			scale={ [ 0.5, .5, .5 ] }
			position-y={0.0}
			rotation-y={d * Math.PI / 2}dispose={null}>
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
				position={[0.9, 0.153, 0]}
				scale={[0.067, 0.011, 0.296]}
			/>
		</group>
	);
}

useGLTF.preload("/Route01.glb");