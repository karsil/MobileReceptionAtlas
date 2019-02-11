import { UPDATE_GPS } from '../actions';

import FETCH_RESULT, {
    ADD_DATA,
} from './../components/ButtonField/ButtonField.Action';

const initialState = {
    data: [],
    currentInformation: {
        location: {
            x: 10.11,
            y: 12.13,
        },
        signal: 100,
        provider: 'Telekom',
        connectionType: '4G',
        platform: 'Android',
    },
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_RESULT:
            return { ...state, data: action.payload.result };
        case ADD_DATA:
            return addDataConnectionReducer(state, action);
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
