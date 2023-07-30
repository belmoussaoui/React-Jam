import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import $dataMap from "../../assets/Map01";
import useLoco from "../../stores/useLoco";
import useRoute from "../../stores/useRoute";
import { useGLTF } from "@react-three/drei";

function is_moving(loco) {
	return loco.x != loco.nextX || loco.y != loco.nextY;
}

function canMove(loco) {
	for (const route of loco.routes) {
		if (route.x == loco.nextX && route.y == loco.nextY && loco.direction == route.direction)
		{
			return true;
		}
	}
	return false;
}

function command01(loco, route) {
	loco.direction = route.direction
}

function command02(loco, route) {
	loco.direction = route.direction - 1 >= 0 ? route.direction - 1 : 3;
}

function command03(loco, route) {
	loco.direction = (route.direction + 1) % 4;
}

function getNextDestination(loco) {
	for (const route of loco.routes) {
		if (route.x == loco.x && route.y == loco.y)
		{
			switch (route.id) {
				case 1:
					command01(loco, route);
					break;
				case 2:
					command02(loco, route);
					break;
				case 3:
					command03(loco, route);
					break;
				default:
					break;
			}
			let d = loco.direction
			if (d == 0)
				loco.nextX += 1;
			if (d == 1)
				loco.nextY -= 1;
			if (d == 2)
				loco.nextX -= 1
			if (d == 3)
				loco.nextY += 1 
		}
	}
}

function update_move(loco, delta) {
	let s = delta;
	if (loco.nextY > loco.y)
		loco.y = loco.y + s < loco.nextY ? loco.y + s : loco.nextY
	if (loco.nextY < loco.y)
		loco.y = loco.y - s > loco.nextY ? loco.y - s : loco.nextY
	if (loco.nextX < loco.x)
		loco.x = loco.x - s > loco.nextX ? loco.x - s : loco.nextX
	if (loco.nextX > loco.x)
		loco.x = loco.x + s < loco.nextX ? loco.x + s : loco.nextX
	loco.loco.position.z = loco.y + 0.5 - $dataMap.height / 2;
	loco.loco.position.x = loco.x + 0.5 - $dataMap.width / 2;
	loco.loco.rotation.y = loco.direction * Math.PI / 2
}

function terminate(loco) {
  let startX = $dataMap.start % $dataMap.width;
  let startY = Math.floor($dataMap.start / $dataMap.width);
  let msg = document.querySelector(".message");
  msg.style.opacity = 0;
  loco.x = startX;
  loco.y = startY;
  loco.direction = 3
  loco.nextX = startX;
  loco.nextY = startY;
  loco.play();
  loco.end(false);
}

function update(loco, delta) {
	if (is_moving(loco) && canMove(loco))
		update_move(loco, delta)
	else if (canMove(loco)) {
		getNextDestination(loco);
	} else {
    if (loco.terminate) {
      let msg = document.querySelector(".message");
      msg.style.opacity = 1;
      let audio = new Audio("./Terminate.wav");
	    audio.volume = 0.3;
      audio.play();
      loco.end(true);
      setTimeout(() => {
        terminate(loco)
        loco.terminate = true
      }, 3000)
      loco.terminate = false;
    }
	}
}

let loco = {}
loco.direction = 3;
let startX = $dataMap.start % $dataMap.width;
let startY = Math.floor($dataMap.start / $dataMap.width);
loco.x = startX;
loco.y = startY;
loco.nextX = startX;
loco.nextY = startY;
loco.terminate = true;

export default function Loco() {
	let locoRef = useRef()
	const isPlay = useLoco((state) => state.isPlay);
	const play = useLoco((state) => state.play);
  loco.play = play;
  loco.end = useLoco((state) => state.end);
	let routes = useRoute((state) => state.routes);
	


	loco.routes = routes;


	useEffect(() => {
		loco.loco = locoRef.current;
	}, []);

	let d = 3;
	useFrame((state, delta) => {
		if (isPlay && loco.loco)
			update(loco, delta);
      loco.loco.position.z = loco.y + 0.5 - $dataMap.height / 2;
      loco.loco.position.x = loco.x + 0.5 - $dataMap.width / 2;
      loco.loco.rotation.y = loco.direction * Math.PI / 2

	})
	const { nodes, materials } = useGLTF("./Loco.glb");
	return (
	  <group
	  	ref={locoRef}
		position-x={loco.startX + 0.5 - $dataMap.width / 2}
		position-z={loco.startY + 0.5 - $dataMap.height / 2}
		position-y={0.00}
		rotation-y={d * Math.PI / 2}
		dispose={null}
		scale={0.5}>
		   <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials["Material.002"]}
        position={[0.018, 0.244, 0.001]}
        scale={[0.641, 0.854, 0.58]}
      />
      <group
        position={[0.17, 0.394, 0.001]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={0.641}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_1.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_2.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_3.geometry}
          material={materials["Material.007"]}
        />
      </group>
      <group position={[-0.134, 0.415, 0.001]} scale={0.678}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003_1.geometry}
          material={materials["Material.003"]}
        />
      </group>
      <group
        position={[-0.037, 0.254, -0.119]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.091}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle_1.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle_2.geometry}
          material={materials["Material.008"]}
        />
      </group>
      <group
        position={[-0.23, 0.254, -0.119]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.091}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_1.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_2.geometry}
          material={materials["Material.008"]}
        />
      </group>
      <group
        position={[0.276, 0.226, -0.119]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.06}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle002_1.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle002_2.geometry}
          material={materials["Material.008"]}
        />
      </group>
      <group
        position={[0.144, 0.226, -0.119]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.06}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle003_1.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle003_2.geometry}
          material={materials["Material.008"]}
        />
      </group>
      <group
        position={[-0.037, 0.26, 0.126]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.091}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle004_1.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle004_2.geometry}
          material={materials["Material.008"]}
        />
      </group>
      <group
        position={[-0.23, 0.26, 0.126]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.091}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle005_1.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle005_2.geometry}
          material={materials["Material.008"]}
        />
      </group>
      <group
        position={[0.276, 0.237, 0.126]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.06}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle006_1.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle006_2.geometry}
          material={materials["Material.008"]}
        />
      </group>
      <group
        position={[0.144, 0.237, 0.126]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.06}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle007_1.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle007_2.geometry}
          material={materials["Material.008"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={materials["Material.002"]}
        position={[0.246, 0.559, 0.001]}
        scale={[0.034, 0.1, 0.034]}
      />
	  </group>
	);
}

useGLTF.preload("./Loco.glb");