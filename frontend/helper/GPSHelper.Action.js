export const UPDATE_GPS = 'updateGPS';
export function updateGPS(latitude, longitude) {
    return {
        type: UPDATE_GPS,
        payload: {
            latitude: latitude,
            longitude: longitude,
        },
    };
}
