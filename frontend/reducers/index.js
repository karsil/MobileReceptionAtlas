import { UPDATE_GPS } from '../actions';

import FETCH_RESULT, {
    ADD_DATA,
} from './../components/ButtonField/ButtonField.Action';

const initialState = {
    data: [],
    currentInformation: {
        locationX: 10.11,
        locationY: 12.13,
        signal: 100,
        provider: null,
    },
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_RESULT:
            return { ...state, data: action.payload.result };
        case ADD_DATA:
            return {
                ...state,
                data: addElementToArray(
                    action.payload.dataConnectionInformation,
                    state.data
                ),
            };
        default:
            return state;
    }
}

function addDataConnectionReducer(state, { payload }) {
    const elements = payload.dataConnectionInformation;

    return {
        ...state,
        data: addElementToArray(elements, state.data),
    };
}

function addElementToArray(element, array) {
    let elements = [...array];
    elements.push(element);
    return elements;
}
