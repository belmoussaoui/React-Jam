import { Canvas, useThree } from '@react-three/fiber'
import './App.css'
import MainScene from './main_scene/MainScene';
import { useState } from 'react';
import MainUI from './main_scene/MainUI';
import { Perf } from 'r3f-perf';


function App() {
	let [scene, setScene] = useState("main");

	const current_scene = (scene) => {
		switch(scene) {
		default:
			return <MainScene/>;
		}
	}

	const current_ui = (scene) => {
		switch(scene) {
		default:
			return <MainUI director={director}/>;
		}
	}

	const director = (sceneName) => {
		setScene(sceneName);
	}

	return (
		<>
			<Canvas orthographic camera={{position:[0, 7.15, 5.15], zoom:42 }}>
				<color attach="background" args={["#CDDEFF"]} />
				{ current_scene(scene) }
			</Canvas>
			{ current_ui(scene) }
		</>
	)
}

export default App
