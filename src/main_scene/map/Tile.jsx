import useMap from "../../stores/useMap";

function tileIdToMapX(tileId) {
	let width = useMap((state) => state.width);
	return tileId % width;
}

function tileIdToMapY(tileId) {
	let width = useMap((state) => state.width);
	return Math.floor(tileId / width);
}

function getDataTile(dataId, x, y, width, height) {
	return <>
		 <mesh
			position-x={x + .5 - width / 2}
			position-z={y + .5 - height / 2}
			position-y={-0.5}
			scale={[1, 1, 1]}
		>
			{/* <boxGeometry />
			<meshStandardMaterial color="green" /> */}
			<mesh
				position-x={x - width / 2}
				position-z={y - height / 2}
				position-y={0.75}
				scale={[0.5, 0.5, 0.5]}
			>
				<boxGeometry />
				<meshStandardMaterial color="red" />
			</mesh>
		</mesh>
	</>
}

export default function Tile({tileId, dataId}) {
	let width = useMap((state) => state.width);
	let height = useMap((state) => state.height);
	let x = tileIdToMapX(tileId);
	let y = tileIdToMapY(tileId);
	if (dataId === 0) return <></>
	return getDataTile(dataId, x, y, width, height);
}