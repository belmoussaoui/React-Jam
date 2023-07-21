import useGame from "../stores/useGame"
import "./MainUI.css"

export default function MainUI() {
	const addRail = useGame((state) => state.addRail)

	return <>
	<div className="ui-container">
		<div className="rail-container">
			<button onClick={() => addRail(1)}>1</button>
			<button onClick={() => addRail(2)}>2</button>
			<button onClick={() => addRail(3)}>3</button>
			<button onClick={() => console.log("x")}>x</button>
		</div>
	</div>
	</>
}