export const FILTER_MAP_BY_PROVIDER = 'filterMapByProvider'

export function filterMapByProvider(provider) {
    return {
        type: FILTER_MAP_BY_PROVIDER,
        payload: {
            provider: provider,
        },
    };
}