export default function Light() {
	return <>
		<ambientLight intensity={0.166666}></ambientLight>
		<spotLight castShadow intensity={1} position={[1.3, 4, 1.3]}></spotLight>
		<pointLight intensity={0.5} position={[-2.5, 0.5, -2.6]}></pointLight>
	</>
}