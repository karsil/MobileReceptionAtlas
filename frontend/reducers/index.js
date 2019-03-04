import {
    FETCH_RESULT,
    SHOW_MAP,
    ADD_DATA,
} from './../components/ButtonField/ButtonField.Action';

import { UPDATE_PROVIDER } from '../components/ProviderPicker/ProviderPicker.Action';
import {
    UPDATE_PLATFORM,
    UPDATE_GPS,
    UPDATE_CONNECTION_TYPE,
    FETCHING_DEVICE_GPS
} from '../components/Root/Root.Action';

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
                    location: action.payload,
                },
            };
        case SHOW_MAP:
            return {
                ...state,
                showingMap: action.payload,
            };
        case UPDATE_PLATFORM:
            return {
                ...state,
                currentInformation: {
                    ...state.currentInformation,
                    platform: action.payload,
                },
            };
        case UPDATE_CONNECTION_TYPE:
            return {
                ...state,
                currentInformation: {
                    ...state.currentInformation,
                    connectionType: action.payload,
                },
            };
        case UPDATE_PROVIDER:
            return {
                ...state,
                currentInformation: {
                    ...state.currentInformation,
                    provider: action.payload.provider,
                },
            };
        case FETCHING_DEVICE_GPS:
        return {
            ...state,
            isFetchingDeviceGPS: action.payload.isFetching
        }
        default:
            return state;
    }
}

function addDataConnectionReducer(state, { payload }) {
    const element = payload.dataConnectionInformation,
        tempState = { ...state };
    if (tempState.data) {
        tempState.data.push(element);
        return {
            ...state,
            data: [...tempState.data],
        };
    }
    return {
        ...state,
    };
}
