export const UPDATE_GPS = 'updateGPS'

export function updateGPS(x,y){
    return {
        type: UPDATE_GPS,
        x: x,
        y: y
    }
}