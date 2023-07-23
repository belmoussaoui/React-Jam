import { Grid } from "@react-three/drei";
import useMap from "../../stores/useMap";
import Tile from "./Tile";
import Route from "./Route";
import useRoute from "../../stores/useRoute";
import $dataMap from "../../assets/Map01";
import Loco from "./Loco";


export default function Map() {
	let gameMap = useMap((state) => state.map);
	let routes = useRoute((state) => state.routes);
	
	return <>
		<Grid position={[0, 0.01, 0]} args={[8, 14]} cellThickness={0}></Grid>
		<Loco></Loco>
		{ gameMap.map((value, index) => {
			return <Tile key={index} tileId={index} dataId={value}></Tile>
		})}
		{ routes.map((value, index) => {
			index = value.y * $dataMap.width + value.x;
			return <Route key={index} id={value.id} x={value.x} y={value.y} d={value.direction} dataId={1}></Route>
		})}
	</>
}