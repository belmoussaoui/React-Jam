import { OrbitControls } from '@react-three/drei';
import Map from './map/Map';
import Light from './Light';
import { useEffect } from 'react';

export default function MainScene() {
	useEffect(() => {
		let audio = new Audio("./Track01.wav");
		audio.volume = 0.1;
		audio.loop = true;
		audio.play();
	}, [])
	return <>
		{/* <OrbitControls /> */}
		<Light></Light>
		<Map></Map>
	</>
}
