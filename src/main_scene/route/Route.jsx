import Route01 from "./Route01";
import Route02 from "./Route02";
import Route03 from "./Route03";

export default function Route({x, y, d, id}) {
	
	let getRoute = () => {
		switch(id) {
		case 1:
			return <Route01 x={x} y={y} d={d}></Route01>
		case 2:
			return <Route02 x={x} y={y} d={d}></Route02>
		case 3:
			return <Route03 x={x} y={y} d={d}></Route03>

		}
	}
	return getRoute();
}