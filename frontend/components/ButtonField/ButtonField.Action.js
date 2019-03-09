import client from '../../graphql/client';
import {
    getAllConnectionData,
    getConnectionDataByRadius,
} from '../../graphql/query';
import { createNewConnectionData } from '../../graphql/mutation';

export const FETCH_RESULT = 'fetch-result';
export const FETCH_ERROR = 'fetch-error';
export const SHOW_MAP = 'showMap';

export const ADD_DATA = 'add-data';

const DISTANCE = 50000; // in meter

/**
 * Queries the _getAllConnectionData_ endpoint on backend.
 * dispatches the result to update the store.
 */
export const getAllConnectionDataAction = () => {
    return (dispatch) => {
        return client
            .query({
                query: getAllConnectionData,
            })
            .then((result) => {
                return dispatch(fetchResult(result.data.connectionData));
            })
            .catch((err) => {
                return dispatch(fetchError(err));
            });
    };
};

export const getConnectionDataByRadiusAction = () => {
    return (dispatch, getState) => {
        const { currentInformation } = getState();

        return client
            .query({
                query: getConnectionDataByRadius(
                    currentInformation.location,
                    DISTANCE
                ),
            })
            .then((result) => {
                return dispatch(
                    fetchResult(result.data.connectionDataByRadius)
                );
            })
            .catch((err) => {
                return dispatch(fetchError(err));
            });
    };
};

export const createConnectionData = ({
    location: { latitude, longitude },
    provider,
    platform,
    connectionType,
}) => {
    return (dispatch) => {
        return client
            .mutate({
                mutation: createNewConnectionData,
                variables: {
                    location: { latitude, longitude },
                    provider,
                    platform,
                    connectionType,
                },
            })
            .then((result) => {
                return dispatch(addData(result.data.createConnectionData));
            })
            .catch((err) => {
                console.log(err);
                alert(err.message);
            });
    };
};

function addData(result) {
    return {
        type: ADD_DATA,
        payload: {
            dataConnectionInformation: result,
        },
    };
}

/**
 *
 * @param {Array} result the array of data objects
 */
function fetchResult(result) {
    return {
        type: FETCH_RESULT,
        payload: {
            result: result,
        },
    };
}

function fetchError(error) {
    return {
        type: FETCH_ERROR,
        payload: {
            error: error,
        },
    };
}

export function showMap(toActivate) {
    return {
        type: SHOW_MAP,
        payload: toActivate,
    };
}
