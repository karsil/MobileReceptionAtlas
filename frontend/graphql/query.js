import client from './client';

import requestSchema from './querySchema';

export default async function requestConnectionData(
    provider = 'no-provider-filter',
    location,
    radius = 0
) {
    let options = { query: requestSchema(provider, location, radius) };
    return client.query(options);
}
