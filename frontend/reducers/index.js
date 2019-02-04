import { UPDATE_GPS } from '../actions'

const initialState = {
    locationX: 10.11,
    locationY: 12.13,
    signal: 100,
    provider: 'Undefinied'
  };

export default function reducer(state = initialState, {type, payload}){
    switch(type){
        default:
            return state;
    }
}