import { UPDATE_GPS } from '../actions';

import FETCH_RESULT from './../components/ButtonField/ButtonField.Action';

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
        default:
            return state;
    }
}
