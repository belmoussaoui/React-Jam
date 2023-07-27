import { OrbitControls } from '@react-three/drei';
import Map from './map/Map';
import Light from './Light';

export default function MainScene() {
	return <>
		{/* <OrbitControls /> */}
		<Light></Light>
		<Map></Map>
	</>
}
