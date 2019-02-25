const initialState = {
    data: [],
    currentInformation: {
        location: {
            latitude: 0,
            longitude: 0,
        },
        signal: 100,
        provider: 'Undefinied',
        connectionType: '4G',
        platform: 'Android',
    },
    showingMap: false,
};

export default initialState;
