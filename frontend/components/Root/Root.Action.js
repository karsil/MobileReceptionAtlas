import getCurrentLocationLatLong from '../../handler/GeoLocationHandler';
import getConnectionType from '../../handler/ConnectionInformationHandler';
import getDistributionPlatform from '../../handler/MobilePlatformHandler';

export const UPDATE_PLATFORM = 'updatePlatform';
export const UPDATE_GPS = 'updateGPS';
export const UPDATE_CONNECTION_TYPE = 'updateConnectionType';
export const FETCHING_DEVICE_GPS = 'fetchingDeviceGPS';

export const getPlatform = () => {
    return function(dispatch) {
        const platform = getDistributionPlatform();
        dispatch(updatePlatform(platform));
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
        return getConnectionType()
            .then((result) => dispatch(updateConnectionType(result)))
            .catch((error) => console.log(error));
    };
};

const updateConnectionType = (type) => {
    return {
        type: UPDATE_CONNECTION_TYPE,
        payload: type,
    };
};

export const requestLocation = () => {
    return function(dispatch) {
        dispatch(isSearchingForLocation(true));
        return getCurrentLocationLatLong()
            .then((location) => {
                dispatch(updateGPS(location));
                dispatch(isSearchingForLocation(false));
            })
            .catch((err) => isSearchingForLocation(false));
    };
};

const isSearchingForLocation = (isFetching) => {
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
