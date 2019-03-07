import { NetInfo } from 'react-native';

const NO_CONNECTION_TYPE = 'wifi';

const getConnectionType = async () => {
    try {
        let { type, effectiveType } = await NetInfo.getConnectionInfo();
        if (type === 'cellular') {
            return effectiveType;
        } else {
            return NO_CONNECTION_TYPE;
        }
    } catch (e) {}
};

export default getConnectionType;
