import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import $dataMap from "../../assets/Map01";
import useLoco from "../../stores/useLoco";
import useRoute from "../../stores/useRoute";

function is_moving(loco) {
	return loco.x != loco.nextX || loco.y != loco.nextY;
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

function update(loco, delta) {
	if (is_moving(loco))
		update_move(loco, delta)
	else {
		getNextDestination(loco);
	}
}

export default function Loco() {
	let locoRef = useRef()
	const isPlay = useLoco((state) => state.isPlay);
	let routes = useRoute((state) => state.routes);

	
	let startX = $dataMap.start % $dataMap.width;
	let startY = Math.floor($dataMap.start / $dataMap.width);
	let loco = {}
	loco.loco = locoRef.current,
	loco.x = startX;
	loco.y = startY;
	loco.nextX = startX;
	loco.nextY = startY;
	loco.direction = 3;
	loco.routes = routes;

	let d = 3;
	useFrame((state, delta) => {
		if (isPlay)
			update(loco, delta);
	})

	return <>
		 <mesh
		 		ref={locoRef}
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