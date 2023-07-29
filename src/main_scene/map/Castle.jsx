import { useGLTF } from "@react-three/drei";
import useMap from "../../stores/useMap";

export default function Castle({x, y}) {
	let width = useMap((state) => state.width);
	let height = useMap((state) => state.height);
	const { nodes, materials } = useGLTF("./Castle.glb");
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

useGLTF.preload("./Castle.glb");