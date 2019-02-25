const initialState = {
    data: [],
    currentInformation: {
        location: {
            x: 0,
            y: 0,
        },
        signal: 100,
        provider: 'Undefinied',
        connectionType: '4G',
        platform: 'Android',
    },
    showingMap: false,
    filterByProvider: 'Unfiltered'
};

export default initialState;
