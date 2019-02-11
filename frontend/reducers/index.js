import {
    FETCH_RESULT,
    SHOW_MAP,
} from './../components/ButtonField/ButtonField.Action';
import { UPDATE_GPS } from '../components/GPSInfo/GPSInfo.Action';

import initialState from './../store';

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_RESULT:
            return { ...state, data: action.payload.result };
        case UPDATE_GPS:
            return {
                ...state,
                currentInformation: {
                    ...state.currentInformation,
                    locationX: action.payload.x,
                    locationY: action.payload.y,
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
