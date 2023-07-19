import { Canvas } from '@react-three/fiber'
import './App.css'
import OpenScene from './open_scene/OpenScene'
import MainScene from './main_scene/MainScene';
import OpenUI from './open_scene/OpenUI';
import { useState } from 'react';
import MainUI from './main_scene/MainUI';
import { Perf } from 'r3f-perf';
import BootScene from './boot_scene/BootScene';
import BootUI from './boot_scene/BootUI';

function App() {
	let [scene, setScene] = useState("main");

	const current_scene = (scene) => {
		switch(scene) {
		case 'boot':
			return <BootScene director={director}/>;
		case 'open':
			return <OpenScene/>;
		default:
			return <MainScene/>;
		}
	}

	const current_ui = (scene) => {
		switch(scene) {
		case 'boot':
			return <BootUI director={director}/>;
		case 'open':
			return <OpenUI director={director}/>;
		default:
			return <MainUI director={director}/>;
		}
	}

	const director = (sceneName) => {
		setScene(sceneName);
	}

	return (
		<>
			<Canvas camera={{ }}>
				<color attach="background" args={["#1f0047"]} />
				{/* <Perf></Perf> */}
				{ current_scene(scene) }
			</Canvas>
			{ current_ui(scene) }
		</>
	)
}

export default App
