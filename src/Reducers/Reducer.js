const initState = {
    totalPlayers: 0,
    players: [ {
        name: "",
        score: 0
    } ],
    questionID: 0,
    questions: [ { 
        type: "",
        question: "",
        correct_answer: "",
        incorrect_answers: [""]
    } ]
};

const Reducer = (state = initState, action) => {
    switch(action.type){
        // case 'LOADING':
        //     return { ...state, data: action.payload, loading: true };
        case 'LOAD_QUIZ':
            // return {...state, data: action.payload}
            return {...state, questions: action.payload}
        // case 'LOAD_PLAYER':
        //     return {...state, noOfPlayers: action.payload}
        // case 'ADD_SCORE_TO_PLAYER':
        //     return {...state, players.score: players.score +1   }
        case 'LOAD_NEXT_QUESTION':
            return {...state, questionID: state.questionID += 1}
        // case 'RELOAD':
        //     return {data: [], noOfPlayers: 0, players: [{name: "Player 1", score:0},{name: "Player 2", score:0}, {name: "Player 3", score:0}]}
        case 'SET_ERROR':
            // return { ...state, error: action.payload, loading: false }
            return { ...state, error: action.payload}
        default:
            return state
    };
};

export default Reducer;