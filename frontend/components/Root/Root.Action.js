import { Constants } from 'expo';
import { NetInfo } from 'react-native';

import getCurrentLocationLatLong from '../../handler/GeoLocationHandler';

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
                return dispatch(handleConnectionInfo(info));
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
        return dispatch(updateConnectionType(connectionType));
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
        dispatch(fetchingDeviceGPS(true));
        return getCurrentLocationLatLong()
            .then((location) => {
                console.log(location);
                dispatch(updateGPS(location));
                dispatch(fetchingDeviceGPS(false));
            })
            .catch((err) => fetchingDeviceGPS(false));
    };
};

export const FETCHING_DEVICE_GPS = 'fetchingDeviceGPS';
const fetchingDeviceGPS = (isFetching) => {
    return {
        type: FETCHING_DEVICE_GPS,
        payload: {
            isFetching: isFetching,
        },
    };
};

function updateGPS(location) {
    return {
        type: UPDATE_GPS,
        payload: location,
    };
}
