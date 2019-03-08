import { Constants } from 'expo';

const NO_PLATFORM = 'no-platform';

const getDistributionPlatform = () => {
    const keys = Object.keys(Constants.platform);
    if (keys.length > 0) {
        return keys[0];
    } else {
        return NO_PLATFORM;
    }
};

export default getDistributionPlatform;
