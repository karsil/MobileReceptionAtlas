import { UPDATE_GPS, SHOW_MAP } from '../actions'
import initialState from './../store';


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