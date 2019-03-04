import { NO_PROVIDER } from '../components/ProviderPicker/ProviderPicker';

/**
 * Returns the provider name by the given internal key.
 * Mostly the to-upper variant of the key.
 * @param key Provider-Key
 */

export function mapProviderFromKey(key) {
    if (key === NO_PROVIDER) {
        return 'No provider given';
    } else {
        return key.charAt(0).toUpperCase() + key.slice(1);
    }
}
