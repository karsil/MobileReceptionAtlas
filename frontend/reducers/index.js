import {
    FETCH_RESULT,
    SHOW_MAP,
    ADD_DATA,
} from './../components/ButtonField/ButtonField.Action';
import { UPDATE_GPS } from '../components/GPSInfo/GPSInfo.Action';

import initialState from './../store';

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_RESULT:
            return { ...state, data: action.payload.result };
        case ADD_DATA:
            return addDataConnectionReducer(state, action);
        case UPDATE_GPS:
            return {
                ...state,
                currentInformation: {
                    ...state.currentInformation,
                    location: {
                        x: action.payload.x,
                        y: action.payload.y,
                    },
                },
            };
        case SHOW_MAP:
            return {
                ...state,
                showingMap: action.payload,
            };
        default:
            return state;
    }
}

function addDataConnectionReducer(state, { payload }) {
    const element = payload.dataConnectionInformation;
    if (state.data) {
        state.data.push(element);
    }
    return {
        ...state,
    };
}
