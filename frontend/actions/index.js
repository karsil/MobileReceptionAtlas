export const UPDATE_GPS = 'updateGPS'
export function updateGPS(x,y){
    return {
        type: UPDATE_GPS,
        payload: {
            x: x,
            y: y
        }
    }
}

export const SHOW_MAP = 'showMap'
export function showMap(toActivate){
    return {
        type: SHOW_MAP,
        payload: toActivate
    }
}