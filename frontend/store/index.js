import { NO_PROVIDER } from '../components/ProviderPicker/ProviderPicker';
import { NO_FILTER } from '../components/ProviderFilterPicker/ProviderFilterPicker';
const initialState = {
    data: [],
    currentInformation: {
        location: {
            latitude: 0,
            longitude: 0,
        },
        provider: NO_PROVIDER,
        connectionType: '4G',
        platform: 'Android',
    },
    showingMap: false,
    filterByProvider: NO_FILTER,
    isFetchingDeviceGPS: false,
};

export default initialState;
