import React from 'react';

import { Text, TouchableOpacity } from 'react-native';
import { buttonStyles } from './Button.Styles';

export default (Button = (props) => {
    return (
        <TouchableOpacity
            onPress={props.disabled === false ? props.onPress : () => {}}
            style={[
                buttonStyles.buttonContainer,
                props.disabled && buttonStyles.buttonDisabled.backgroundColor,
            ]}
            {...props}
        >
            <Text
                style={[
                    buttonStyles.buttonText,
                    props.textStyle,
                    props.disabled && buttonStyles.buttonDisabled.color,
                ]}
            >
                {props.title}
            </Text>
        </TouchableOpacity>
    );
});
