import { Platform } from 'react-native'
import { Permissions, Location } from 'expo'

import { store } from '../App'
import { updateGPS } from './GPSHelper.Action';

export const getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            gotLocationError('Permission to access location was denied')
        }
        else {
            console.log('Permission to access location was granted')
            let location = await Location.getCurrentPositionAsync({});
            gotLocationSuccess(location)
        }
};

gotLocationSuccess = locationData => {
    const {latitude, longitude} = locationData.coords
    console.log('setting to x ' + latitude + ' and y ' + longitude)
    store.dispatch(updateGPS(latitude, longitude))
}

gotLocationError = errorMessage => {
    alert(errorMessage)
}