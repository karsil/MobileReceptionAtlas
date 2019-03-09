import client from './client';
import getAllConnectionData from './querySchema';
import { createNewConnectionData } from './mutationSchema';

function submitConnectionData({
    location: { latitude, longitude },
    provider,
    platform,
    connectionType,
}) {
    return client.mutate({
        refetchQueries: [{ query: getAllConnectionData }],
        mutation: createNewConnectionData,
        variables: {
            location: { latitude, longitude },
            provider,
            platform,
            connectionType,
        },
    });
}

export default submitConnectionData;
