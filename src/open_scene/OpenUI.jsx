import "./OpenUI.css";


export default function OpenUI({director}) {
	const on_new_game = () => {
		director("main");
	}
	return <div className="ui-container">
		<h1 className="title"><span>React</span> <span className="jam">Jam</span></h1>
		<button className="new-game" onClick={on_new_game}>New Game!</button>
	</div>
}