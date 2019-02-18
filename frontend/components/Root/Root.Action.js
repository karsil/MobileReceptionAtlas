import { Permissions, Location, Constants } from 'expo';

export const UPDATE_PLATFORM = 'updatePlatform';
export const UPDATE_GPS = 'updateGPS';

export const getPlatform = () => {
    return function(dispatch) {
        for (let platform in Constants.platform) {
            dispatch(updatePlatform(platform));
        }
    };
};

const updatePlatform = (platform) => {
    return {
        type: UPDATE_PLATFORM,
        payload: platform,
    };
};

export const requestLocation = () => {
    return function(dispatch) {
        Permissions.askAsync(Permissions.LOCATION).then(
            (result) => {
                const { status } = result;
                if (status === 'granted') {
                    dispatch(getLocation());
                } else {
                    alert('Location permissions has not been granted');
                }
            },
            (error) => requestLocationError(error)
        );
    };
};

const requestLocationError = (errorMessage) => {
    alert(errorMessage);
};

const getLocation = () => {
    return function(dispatch) {
        Location.getCurrentPositionAsync({}).then(
            (result) => getLocationSuccess(dispatch, result),
            (error) => getLocationError(error)
        );
    };
};

const getLocationSuccess = (dispatch, locationData) => {
    const { latitude, longitude } = locationData.coords;
    dispatch(updateGPS(latitude, longitude));
};

const getLocationError = (errorMessage) => {
    alert(errorMessage);
};

function updateGPS(x, y) {
    return {
        type: UPDATE_GPS,
        payload: {
            x: x,
            y: y,
        },
    };
}
