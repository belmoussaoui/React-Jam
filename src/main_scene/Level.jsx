export default function Level() {
	return <>
		{/* <mesh scale={ [ 10, 10, 1 ] } rotation-x={ - Math.PI / 2 }>
    		<planeGeometry />
    		<meshBasicMaterial color="green" />
		</mesh> */}
		 <mesh scale={ [ .8, .8, .8 ] } position-x={1.5} position-z={1.5} position-y={0.4}>
    		<boxGeometry />
    		<meshStandardMaterial color="red" />
		</mesh>
	</>
}