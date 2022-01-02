import { useState } from "react";

function App() {
	const [toDo, setToDo] = useState("");
	const [toDos, setToDos] = useState([]);
	const onChange = (event) => setToDo(event.target.value);
	const onSubmit = (event) => {
		event.preventDefault();
		if(toDo === ""){ // input 값이 공백일 경우 함수 실행시키지 않음
			return;
		}
		setToDos((currentArray) => [toDo, ...currentArray]);
		setToDo(""); // submit 이벤트 작동시 toDo의 state값을 ""으로 셋텡
		console.log(toDos);
	}

	return (
		<div className="App">
			<h1>My Todos ({toDos.length})</h1>
			<form onSubmit={onSubmit}>
				<input type="text" onChange={onChange} placeholder="Write your to do..."/>
				<button>Add To Do</button>
			</form>
		</div>
	);
}

export default App;
