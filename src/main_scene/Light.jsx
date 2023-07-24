export default function Light() {
	return <>
		{/* <ambientLight intensity={0.166666 * 6}></ambientLight>
		<pointLight intensity={2.5} position={[-2.5, 0.5, -2.6]}></pointLight> */}
		  <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 1.5 } shadow-normalBias={ 0.04 } />
        <ambientLight intensity={ 0.5 } />

	</>
}