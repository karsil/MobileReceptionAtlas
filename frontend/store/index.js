import { NO_PROVIDER } from '../components/ProviderPicker/ProviderPicker';

const initialState = {
    data: [],
    currentInformation: {
        location: {
            latitude: 0,
            longitude: 0,
        },
        signal: 100,
        provider: NO_PROVIDER,
        connectionType: '4G',
        platform: 'Android',
    },
    showingMap: false,
    isFetchingDeviceGPS: false,
};

export default initialState;
