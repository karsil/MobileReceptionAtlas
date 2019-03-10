import requestConnectionData from '../../graphql/query';
import submitConnectionData from '../../graphql/mutation';

export const FETCH_RESULT = 'fetch-result';
export const FETCH_ERROR = 'fetch-error';
export const SHOW_MAP = 'showMap';

export const ADD_DATA = 'add-data';
export const SET_RADIUS = 'set-radius';

const setRadius = (radius) => {
    return {
        type: SET_RADIUS,
        payload: radius,
    };
};

/**
 * Queries the _getAllConnectionData_ endpoint on backend.
 * dispatches the result to update the store.
 */
export const getConnectionDataAction = (radius = 0) => {
    return (dispatch, getState) => {
        dispatch(setRadius(radius));
        const {
            currentInformation,
            filter: { provider },
            searchRadius,
        } = getState();
        return requestConnectionData(
            provider,
            currentInformation.location,
            searchRadius
        )
            .then((result) => {
                return dispatch(fetchResult(result.data.connectionData));
            })
            .catch((err) => {
                return dispatch(fetchError(err));
            });
    };
};

export const createConnectionData = () => {
    return (dispatch, getStore) => {
        const { searchRadius, currentInformation } = getStore();

        return submitConnectionData(currentInformation, searchRadius)
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
export function fetchResult(result) {
    return {
        type: FETCH_RESULT,
        payload: {
            result: result,
        },
    };
}

export function fetchError(error) {
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
