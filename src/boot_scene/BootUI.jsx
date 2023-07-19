import "./BootUI.css"

export default function BootUI() {
	return <>
		<div className="ui-container">
			<div className="bar-container">
				<div className="bar" id="bar"></div>
			</div>
			<span class="value">0</span>
		</div>
	</>
}