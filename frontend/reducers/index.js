import { UPDATE_GPS, SHOW_MAP } from '../actions'

const initialState = {
    locationX: 10.11,
    locationY: 12.13,
    signal: 100,
    provider: 'Undefinied',
    showMap: false
  };

export default function reducer(state = initialState, {type, payload}){
    switch(type){
        case SHOW_MAP:
            return {
                ...state,
                showMap: payload
            } 

        default:
            return state;
    }
}