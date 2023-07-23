import $dataMap from "../../assets/Map01";

export default function Route({x, y, d, id}) {

	let getRoute = (id) => {
		switch(id) {
		case 2:
			return <mesh scale={ [ 1, 1, 1 ] } position-x={x + .5 - $dataMap.width / 2}
					position-z={y + .5 - $dataMap.height / 2} rotation-y={d * Math.PI / 2}>
					<mesh
						position-x={- 0.15}
						position-z={- 0}
						scale={ [ 0.7, 0.05, 0.4 ] }
						position-y={0.025}
					>
						<boxGeometry />
						<meshStandardMaterial color="green" />
					</mesh>
					<mesh
						position-x={0}
						position-z={0.15}
						scale={ [ 0.4, 0.05, 0.7 ] }
						position-y={0.025}
					>
						<boxGeometry />
						<meshStandardMaterial color="green" />
					</mesh>
				</mesh>
		case 3:
			return <mesh scale={ [ 1, 1, 1 ] } position-x={x + .5 - $dataMap.width / 2}
				position-z={y + .5 - $dataMap.height / 2} rotation-y={d * Math.PI / 2}>
				<mesh
					position-x={- 0.15}
					position-z={- 0}
					scale={ [ 0.7, 0.05, 0.4 ] }
					position-y={0.025}
				>
					<boxGeometry />
					<meshStandardMaterial color="green" />
				</mesh>
				<mesh
					position-x={0}
					position-z={-0.15}
					scale={ [ 0.4, 0.05, 0.7 ] }
					position-y={0.025}
				>
					<boxGeometry />
					<meshStandardMaterial color="green" />
				</mesh>
			</mesh>
		default:
			return <mesh
					position-x={x + .5 - $dataMap.width / 2}
					position-z={y + .5 - $dataMap.height / 2}
					scale={ [ 1, .05, .4 ] }
					position-y={0.025}
					rotation-y={d * Math.PI / 2}
				>
				<boxGeometry />
				<meshStandardMaterial color="red" />
			</mesh>
		}
	}
	
	return getRoute(id);
}