import {
    FETCH_RESULT,
    SHOW_MAP,
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
        platform: 'Android', // test data for now / graphql expects Android/IOs
    },
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_RESULT:
            return { ...state, data: action.payload.result };
        case ADD_DATA:
            return addDataConnectionReducer(state, action);
        case SHOW_MAP:
            return {
                ...state,
                showMap: action.payload,
            };
        default:
            return state;
    }
}

function addDataConnectionReducer(state, { payload }) {
    const element = payload.dataConnectionInformation;
    state.data.push(element);
    return {
        ...state,
        data: state.data,
    };
}
