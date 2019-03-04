import { Permissions, Location, Constants } from 'expo';
import { NetInfo } from 'react-native';

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

export const getConnectionInfo = () => {
    return function(dispatch) {
        NetInfo.getConnectionInfo()
            .then((info) => {
                dispatch(handleConnectionInfo(info));
            })
            .catch((error) => alert(error));
    };
};

const handleConnectionInfo = (connection) => {
    let connectionType = connection.type;
    if (connection.type === 'cellular') {
        connectionType = connection.EffectiveConnectionType;
    }

    return (dispatch) => {
        dispatch(updateConnectionType(connectionType));
    };
};

export const UPDATE_CONNECTION_TYPE = 'updateConnectionType';
const updateConnectionType = (type) => {
    return {
        type: UPDATE_CONNECTION_TYPE,
        payload: type,
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
        dispatch(fetchingDeviceGPS(true))
        Location.getCurrentPositionAsync({}).then(
            (result) => {
                dispatch(fetchingDeviceGPS(false))
                dispatch(getLocationSuccess(result.coords))
            },
            (error) => {
                dispatch(fetchingDeviceGPS(false))
                dispatch(getLocationError(error))
            }
        );
    };
};

export const FETCHING_DEVICE_GPS = 'fetchingDeviceGPS'
const fetchingDeviceGPS = isFetching => {
    return {
        type: FETCHING_DEVICE_GPS,
        payload: {
            isFetching: isFetching
        }
    };
}

const getLocationSuccess = (location) => {
    return function(dispatch) {
        dispatch(updateGPS(location));
    };
};

const getLocationError = (errorMessage) => {
    alert(errorMessage);
};

function updateGPS(location) {
    return {
        type: UPDATE_GPS,
        payload: location,
    };
}
