export const UPDATE_PROVIDER = 'updateProvider'

export function updateProvider(provider) {
    return {
        type: UPDATE_PROVIDER,
        payload: {
            provider: provider,
        },
    };
}