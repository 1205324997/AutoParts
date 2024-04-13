import {StyleSheet} from 'react-native';

export const globalColor = {
    primary: '#7037eb',
    secondary: '#f72585',
    tertiary: '#3a0ca3',
    seccess: '#4cc9f0',
    warning: '#fca311',
    danger: '#e71d36',
    dark: '#22223b',

    background: '#fff',
};

export const globalStyle = StyleSheet.create({

    container:{
        flex: 1,
        padding: 20,
        backgroundColor: globalColor.background,
    },

    primaryButton:{
        backgroundColor: globalColor.primary,
        borderRadius: 5,
        padding: 10,
        width: '100%',
        alignItems: 'center',
    },

    buttonText:{
        color: globalColor.background,
        fontSize: 18,
    }

});
