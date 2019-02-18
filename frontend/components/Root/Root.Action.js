import { Constants } from 'expo';
import { NetInfo } from 'react-native'

export const UPDATE_PLATFORM = 'updatePlatform'

export const getPlatform = () => {
    return function(dispatch) {
        for (let platform in Constants.platform) {
            dispatch(updatePlatform(platform))
          }
    };
};

const updatePlatform = platform => {
    return {
        type: UPDATE_PLATFORM,
        payload: platform
    };
}


export const getConnectionInfo = () => {
    return function(dispatch) {
        NetInfo.getConnectionInfo()
        .then(info => {
            dispatch(handleConnectionInfo(info))
        })
        .catch(
            error => alert(error)
        );
    };
}


const handleConnectionInfo = connection => {
    let connectionType = connection.type;
    if (connection.type === 'cellular') {
        connectionType = connection.EffectiveConnectionType;
    }

    return (dispatch) => {
        dispatch(updateConnectionType(connectionType))
    }
}


export const UPDATE_CONNECTION_TYPE = 'updateConnectionType'
const updateConnectionType = type => {
    return {
        type: UPDATE_CONNECTION_TYPE,
        payload: type
    };
}