import { NO_PROVIDER } from '../components/ProviderPicker/ProviderPicker';
import { NO_FILTER } from '../components/ProviderFilterPicker/ProviderFilterPicker.Action';
const initialState = {
    data: [],
    currentInformation: {
        location: {
            latitude: 0,
            longitude: 0,
        },
        provider: NO_PROVIDER,
        connectionType: '',
        platform: '',
    },
    searchRadius: 0,
    showingMap: false,
    filter: {
        provider: NO_FILTER,
    },
    isFetchingDeviceGPS: false,
};

export default initialState;
