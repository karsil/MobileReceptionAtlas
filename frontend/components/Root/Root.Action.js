import { Constants } from 'expo';

export const UPDATE_PLATFORM = 'updatePlatform'

export const getPlatform = () => {
    return function(dispatch) {
        for (let platform in Constants.platform) {
            dispatch(updatePlatform(platform))
          }
    };
};

const updatePlatform = platform => {
    return {
        type: UPDATE_PLATFORM,
        payload: platform
    };
}