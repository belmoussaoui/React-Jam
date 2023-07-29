import { Canvas } from '@react-three/fiber'
import './App.css'
import MainScene from './main_scene/MainScene';
import MainUI from './main_scene/MainUI';
import BootScene from './boot_scene/BootScene';
import BootUI from "./boot_scene/BootUI"
import useScene from './stores/useScene';


function App() {
	let scene = useScene((state) => state.scene);

	const currentScene = (scene) => {
		switch(scene) {
		case "boot":
			return <BootScene/>
		default:
			return <MainScene/>;
		}
	}

	const currentUI = (scene) => {
		switch(scene) {
		case "boot":
			return <BootUI/>
		default:
			return <MainUI />;
		}
	}

	return (
		<>
			<Canvas  shadows orthographic camera={{position:[0, 5.15, 5.15], zoom:47 }}>
				<color attach="background" args={["#CDDEFF"]} />
				{ currentScene(scene) }
			</Canvas>
			{ currentUI(scene) }
		</>
	)
}

export default App
