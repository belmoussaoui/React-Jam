import "./BootUI.css"

export default function BootUI() {
	return <>
		<div className="ui-container">
			<div className="bar-container">
				<div className="bar" id="bar">
					<img id="loco" width="48px" src="./Loco.png" alt="" />
				</div>
				<button id="start">Start</button>
				
			</div>
		</div>
	</>
}