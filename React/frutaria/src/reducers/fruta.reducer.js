import { actionsTypes } from '../constants/frutas';

const INITIAL_STATE = {
    frutas: [
        { id: 1, nome: "Maçã", quantidade: 10 },
        { id: 2, nome: "Banana", quantidade: 20 },
        { id: 3, nome: "Melão", quantidade: 15 },
    ]
}

const reducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionsTypes.ADICIONAR_FRUTA:
            return { ...state, frutas: [...state.frutas, action.payload] };
        case actionsTypes.REMOVER_FRUTA:
            return { ...state, frutas: state.frutas.filter(fruta => fruta.id !== action.payload.id) };
        default:
            return state;
    }
}

export { reducers }