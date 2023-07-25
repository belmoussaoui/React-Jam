import { useGLTF } from "@react-three/drei";
import $dataMap from "../../assets/Map01";

export default function Route({x, y, d, id}) {
	const rail = useGLTF('./Rail01.glb');
	const { nodes, materials } = useGLTF("/Rail01.glb");

	const items = useGLTF("/Rail02.glb");
	const nodes2 = items.nodes;
	const materials2 = items.materials;

	const item = useGLTF("/Rail03.glb");
	const nodes3 = item.nodes;
	const materials3 = item.materials;
	let getRoute = (id) => {
		switch(id) {
		case 2:
			return (
			  <group  position-x={x + .5 - $dataMap.width / 2}
			  position-z={y + .5 - $dataMap.height / 2} rotation-y={d * Math.PI / 2}  dispose={null} scale={ [ 0.5, 0.5, 0.5 ] } >
				<mesh
				  castShadow
				  receiveShadow
				  geometry={nodes2.Cube.geometry}
				  material={materials2["Material.005"]}
				  position={[0, 0.18, 0.216]}
				  scale={[1, 0.748, 0.811]}
				/>
				<mesh
				  castShadow
				  receiveShadow
				  geometry={nodes2.Cube003.geometry}
				  material={materials2["Material.005"]}
				  position={[0, 0.18, -0.22]}
				  scale={[1, 0.748, 0.811]}
				/>
				<mesh
				  castShadow
				  receiveShadow
				  geometry={nodes2.Cube014.geometry}
				  material={materials2["Material.006"]}
				/>
				<mesh
				  castShadow
				  receiveShadow
				  geometry={nodes2.Cube004.geometry}
				  material={materials2["Material.005"]}
				  position={[0.218, 0.18, -0.002]}
				  rotation={[0, Math.PI / 2, 0]}
				  scale={[1, 0.748, 0.811]}
				/>
				<mesh
				  castShadow
				  receiveShadow
				  geometry={nodes2.Cube005.geometry}
				  material={materials2["Material.005"]}
				  position={[-0.218, 0.18, -0.002]}
				  rotation={[0, Math.PI / 2, 0]}
				  scale={[1, 0.748, 0.811]}
				/>
				<mesh
				  castShadow
				  receiveShadow
				  geometry={nodes2.Cube006.geometry}
				  material={materials2["Material.006"]}
				  rotation={[0, Math.PI / 2, 0]}
				/>
			  </group>
			);
		case 3:
			return (
				<group  position-x={x + .5 - $dataMap.width / 2}
				position-z={y + .5 - $dataMap.height / 2} rotation-y={d * Math.PI / 2}  dispose={null} scale={ [ 0.5, 0.5, 0.5 ] }>
				  <mesh
					castShadow
					receiveShadow
					geometry={nodes3.Cube.geometry}
					material={materials3["Material.005"]}
					position={[-0.217, 0.18, -0.001]}
					rotation={[0, -Math.PI / 2, 0]}
					scale={[1, 0.748, 0.811]}
				  />
				  <mesh
					castShadow
					receiveShadow
					geometry={nodes3.Cube003.geometry}
					material={materials3["Material.005"]}
					position={[0.219, 0.18, -0.001]}
					rotation={[0, -Math.PI / 2, 0]}
					scale={[1, 0.748, 0.811]}
				  />
				  <mesh
					castShadow
					receiveShadow
					geometry={nodes3.Cube014.geometry}
					material={materials3["Material.006"]}
					position={[-0.001, 0, -0.002]}
					rotation={[0, -Math.PI / 2, 0]}
				  />
				  <mesh
					castShadow
					receiveShadow
					geometry={nodes3.Cube004.geometry}
					material={materials3["Material.005"]}
					position={[0.001, 0.18, 0.216]}
					scale={[1, 0.748, 0.811]}
				  />
				  <mesh
					castShadow
					receiveShadow
					geometry={nodes3.Cube005.geometry}
					material={materials3["Material.005"]}
					position={[0.001, 0.18, -0.219]}
					scale={[1, 0.748, 0.811]}
				  />
				  <mesh
					castShadow
					receiveShadow
					geometry={nodes3.Cube006.geometry}
					material={materials3["Material.006"]}
					position={[-0.001, 0, -0.002]}
				  />
				</group>
			  );
		default:
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
	}
	
	return getRoute(id);
}