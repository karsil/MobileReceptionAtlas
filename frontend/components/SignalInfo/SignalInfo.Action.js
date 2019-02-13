import { NetInfo } from 'expo';

export const UPDATE_CONNECTION_TYPE = "updateConnectionType";

export const requestSignalInfo = () => {
    return function(dispatch) {
        NetInfo.getConnectionInfo().then(
            (connectionInfo) => {
                console.log('Initial, type: ' + connectionInfo.type + ', effectiveType: ' + connectionInfo.effectiveType);
                return dispatch(updateConnectionType(connectionInfo.type))
            },
            (error) => console.log(error)
        )
        .catch(err => console.log(err))
    };
};

function updateConnectionType(connectionType) {
    return {
        type: UPDATE_CONNECTION_TYPE,
        payload: connectionType,
    };
}