import gameReducer from "./gameReducer.js";

describe('gameReducer', () => {

    test('initialises with correct inital state', () => {
        const initState = gameReducer(undefined, {type: '@@INIT'});

        expect(initState).toEqual({
            socket: null,
            players: [],
            roomNumber: null,
            gameSettings: {},
            questions: [],
            submissions: [],
            currentPlayer: '',
            error: null,
            results: []
        })
    })

    test('UPDATE_SOCKET', () => {
        const fakeState = gameReducer({socket: null}, {type: 'UPDATE_SOCKET', payload: 'testSocketObj'});

        expect(fakeState).toEqual({socket: 'testSocketObj'});
    })

    test('ADD_PLAYER', () => {
        const fakeState = gameReducer({players: [], roomNumber: null}, { type: 'ADD_PLAYER', payload: {player: 'testPlayer', room: 44} });

        expect(fakeState).toEqual({players: ['testPlayer'], roomNumber: 44});
    })

    test('UPDATE_GAME_SETTINGS', () => {
        const fakeState = gameReducer({ gameSettings: {} }, { type: 'UPDATE_GAME_SETTINGS', payload: {difficulty: 'Hard', category: 88, categoryName: 'cats'} });

        expect(fakeState).toEqual( {gameSettings: {difficulty: 'Hard', category: 88, categoryName: 'cats'} });
    })

    test('ADD_QUESTIONS', () => {
        const fakeState = gameReducer({ questions: [] }, { type: 'ADD_QUESTIONS', payload: ['Q1', 'Q2', 'Q3'] });

        expect(fakeState).toEqual({ questions: ['Q1', 'Q2', 'Q3'] });
    })

    test('CURRENT_PLAYER', () => {
        const fakeState = gameReducer({currentPlayer: ''}, {type: 'CURRENT_PLAYER', payload: 'testCurrentPlayer'});

        expect(fakeState).toEqual({currentPlayer: 'testCurrentPlayer'});
    })
})
