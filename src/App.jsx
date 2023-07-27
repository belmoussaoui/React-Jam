import { Canvas } from '@react-three/fiber'
import './App.css'
import MainScene from './main_scene/MainScene';
import MainUI from './main_scene/MainUI';
import useScene from './stores/useScene';


function App() {
	let scene = useScene((state) => state.scene);

	const currentScene = (scene) => {
		switch(scene) {
		default:
			return <MainScene/>;
		}
	}

	const currentUI = (scene) => {
		switch(scene) {
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
