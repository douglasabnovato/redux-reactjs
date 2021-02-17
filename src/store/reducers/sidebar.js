/*
 * reducers sidebar.js
 * actions sidebar.js
 * features sidebar.js
**/

const INITIAL_STATE = {
		activeLesson: {},
		activeModule: {},
		modules: [ 
			{
				id: 1,
				title: "Iniciando com react",
				lessons: [
					{ id: 1, title: "Primeira aula" },
					{ id: 2, title: "Segunda aula" }
				],
			},
			{
				id: 1,
				title: "Aprendendo Redux",
				lessons: [
					{ id: 3, title: "Terceira aula" },
					{ id: 4, title: "Quarta aula" }
				],
			}
		]  
	};

export default function sidebar(state = INITIAL_STATE, action){
	if(action.type === 'TOGGLE_LESSON'){
		return { 
			...state, 
			activeLesson: action.lesson, 
			activeModule:action.module 
		};
	}
	return state;
}