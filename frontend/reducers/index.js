import {FETCH_RESULT, SHOW_MAP} from './../components/ButtonField/ButtonField.Action';

const initialState = {
    data: [],
    currentInformation: {
        locationX: 10.11,
        locationY: 12.13,
        signal: 100,
        provider: 'Undefinied',
    },
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_RESULT:
            return { ...state, array: action.payload.result };
        case SHOW_MAP:
            return {
                ...state,
                showMap: action.payload
            }
        default:
            return state;
    }
}
