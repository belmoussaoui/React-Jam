export default function Light() {
	return <>
		<ambientLight intensity={0.166666}></ambientLight>
		<spotLight castShadow intensity={1} position={[1.3, 2.6, 1.3]}></spotLight>
		<pointLight intensity={0.5} position={[-2.5, -0.6, -2.6]}></pointLight>
	</>
}