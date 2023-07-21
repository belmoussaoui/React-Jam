import useGame from "../stores/useGame"
import "./MainUI.css"

export default function MainUI() {
	const addRail = useGame((state) => state.addRail)
	const play = useGame((state) => state.play)

	return <>
	<div className="ui-container">
		<div className="rail-container">
			<button onClick={() => addRail(1)}>1</button>
			<button onClick={() => addRail(2)}>2</button>
			<button onClick={() => addRail(3)}>3</button>
			<button onClick={() => console.log("x")}>x</button>
		</div>
		<div className="action-container">
			<button onClick={() => play()}>Play</button>
		</div>
	</div>
	</>
}