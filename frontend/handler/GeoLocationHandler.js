import { Permissions, Location } from 'expo';

const getCurrentLocationLatLong = async () => {
    let permission;
    try {
        permission = await Permissions.askAsync(Permissions.LOCATION);
    } catch (e) {
        console.log('Error while asking for Permission Status: ', e);
    }

    if (permission.status === 'granted') {
        try {
            let { coords } = await Location.getCurrentPositionAsync({});
            return coords;
        } catch (e) {
            console.log(e);
        }
    }
};

export default getCurrentLocationLatLong;
