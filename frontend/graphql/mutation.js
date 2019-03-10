import client from './client';
import getAllConnectionData from './querySchema';
import { createNewConnectionData } from './mutationSchema';
import { NO_FILTER } from '../components/ProviderFilterPicker/ProviderFilterPicker';

function submitConnectionData(
    { location, provider, platform, connectionType },
    radius
) {
    return client.mutate({
        refetchQueries: [
            { query: getAllConnectionData(NO_FILTER, location, radius) },
            { query: getAllConnectionData(NO_FILTER, location, 0) },
        ],
        mutation: createNewConnectionData,
        variables: {
            location: {
                latitude: location.latitude,
                longitude: location.longitude,
            },
            provider,
            platform,
            connectionType,
        },
    });
}

export default submitConnectionData;
