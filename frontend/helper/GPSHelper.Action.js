export const UPDATE_GPS = 'updateGPS'

export function updateGPS(x,y){
    console.log('updateGPS called')
    return {
        type: UPDATE_GPS,
        payload: {
            x: x,
            y: y
        }
    }
}