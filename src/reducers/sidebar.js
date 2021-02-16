/*
 * reducers sidebar.js
 * actions sidebar.js
 * features sidebar.js
**/
export default function sidebar(state = [], action){
	return {
		activeLesson: null,
		activeModule: null,
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
}