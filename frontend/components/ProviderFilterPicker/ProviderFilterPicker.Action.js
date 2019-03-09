import client from '../../graphql/client';
import { connectionDataByProvider } from '../../graphql/query';

import { fetchError, fetchResult } from '../ButtonField/ButtonField.Action';

export const FILTER_MAP_BY_PROVIDER = 'updateProviderFilter';
function updateProviderFilter(provider) {
    return {
        type: FILTER_MAP_BY_PROVIDER,
        payload: {
            provider: provider,
        },
    };
}

export const filterMapByProvider = (provider) => {
    return (dispatch) => {
        dispatch(updateProviderFilter(provider));

        client
            .query({
                query: connectionDataByProvider(provider),
            })
            .then((result) => {
                return dispatch(
                    fetchResult(result.data.connectionDataByProvider)
                );
            })
            .catch((err) => {
                return dispatch(fetchError(err));
            });
    };
};
