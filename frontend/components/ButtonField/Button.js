import React from 'react';

import { Text, TouchableOpacity } from 'react-native';
import { buttonStyles } from './Button.Styles';

export default (Button = (props) => {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={buttonStyles.buttonContainer}
            {...props}
        >
            <Text style={buttonStyles.buttonText}>{props.title}</Text>
        </TouchableOpacity>
    );
});
