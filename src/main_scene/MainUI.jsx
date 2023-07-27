import usePlayer from "../stores/usePlayer";
import useRoute from "../stores/useRoute"
import "./MainUI.css"
import $dataMap from "../assets/Map01";
import useLoco from "../stores/useLoco";

function isValidRoute(x, y, routes) {
	if (x < 0 || x >= $dataMap.width) return false;
	if (y < 0 || y >= $dataMap.height) return false;
	for (const elem of routes) {
		if (elem.x == x && elem.y == y)
			return false;
	}
	return true;
}

export default function MainUI() {
	const play = useLoco((state) => state.play);
	const isPlay = useLoco((state) => state.isPlay);
	const addRoute = useRoute((state) => state.addRoute);
	const removeRoute = useRoute((state) => state.removeRoute);
	const routes = useRoute((state) => state.routes);
	const x = usePlayer((state) => state.x);
	const setX = usePlayer((state) => state.setX);
	const y = usePlayer((state) => state.y);
	const setY = usePlayer((state) => state.setY);
	let direction = usePlayer((state) => state.direction);
	const setDirection = usePlayer((state) => state.setDirection);

	let createRoute = (routeId) => {
		if (!isValidRoute(x, y, routes)) return false;
		addRoute({id: routeId, direction: direction, x: x, y: y});
		if (routeId == 2) {
			direction = direction - 1 >= 0 ? direction - 1 : 3
			setDirection(direction);
		}
		if (routeId == 3) {
			direction = (direction + 1) % 4
			setDirection(direction);
		}
		if (direction === 0)
			setX(x + 1);
		if (direction === 1)
			setY(y - 1);
		if (direction === 2)
			setX(x - 1);
		if (direction === 3)
			setY(y + 1);
	}

	return <>
	<div className="ui-container">
		<div className="rail-container">
			<button onClick={() => createRoute(1)}>
				<img src="./Route01.png"></img>
			</button>
			<button onClick={() => createRoute(2)}>
				<img src="./Route02.png"></img>
			</button>
			<button onClick={() => createRoute(3)}>
				<img src="./Route03.png"></img>
			</button>
			<button className="remove" onClick={() => {
				if (routes.length <= 0) return;
				removeRoute();
				setX(routes[routes.length - 1].x);
				setY(routes[routes.length - 1].y)
				setDirection(routes[routes.length - 1].direction);
			}}
			></button>
		</div>
		<div className="action-container">
			<button onClick={() => play()}><img src="./Play.png"></img></button>
		</div>
	</div>
	</>
}