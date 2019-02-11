/** action P R O T O T Y P E
 * inspired by https://medium.com/netscape/how-to-integrate-graphql-with-redux-in-react-native-c1912bf33120
 */

import client from '../../graphql/client';
import { getAllConnectionData } from '../../graphql/query';

export const FETCH_RESULT = 'fetch-result';
export const FETCH_ERROR = 'fetch-error';
export const SHOW_MAP = 'showMap'

/**
 * Queries the _getAllConnectionData_ endpoint on backend.
 * dispatches the result to update the store.
 */
export const getAllConnectionDataAction = () => {
    return (dispatch) => {
        client
            .query({
                query: getAllConnectionData,
            })
            .then((result) => {
                return dispatch(fetchResult(result));
            })
            .catch((err) => {
                return dispatch(fetchError(err));
            });
    };
};

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

export function showMap(toActivate){
    return {
        type: SHOW_MAP,
        payload: toActivate
    }
}