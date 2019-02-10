import { Permissions, Location } from 'expo'

import { updateGPS } from './GPSHelper.Action';

export const requestLocation = () => {
    return  function(dispatch){
        Permissions.askAsync(Permissions.LOCATION)
        .then(
            result => {
                const { status } = result
                if (status === 'granted'){
                    dispatch(getLocation())
                }
                else {
                    alert('Location permissions has not been granted')
                }
            },
            error => requestLocationError(error)
        )
    }
}

requestLocationError = errorMessage => {
    alert(errorMessage)
}

const getLocation = () => {
    return  function(dispatch){
        Location.getCurrentPositionAsync({})
        .then(
            result => getLocationSuccess(dispatch, result),
            error => getLocationError(error)
        )
    }
}

getLocationSuccess = (dispatch, locationData) => {
    const {latitude, longitude} = locationData.coords
    dispatch(updateGPS(latitude, longitude))
}

getLocationError = errorMessage => {
    alert(errorMessage)
}