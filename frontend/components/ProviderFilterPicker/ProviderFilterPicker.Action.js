export const FILTER_MAP_BY_PROVIDER = 'updateProviderFilter';
export function updateProviderFilter(provider) {
    return {
        type: FILTER_MAP_BY_PROVIDER,
        payload: {
            provider: provider,
        },
    };
}
