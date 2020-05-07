import React from 'react'
import {
    StyleSheet,
    TouchableOpacity,
} from 'react-native'
import { Icon } from 'react-native-elements'

import Colors from '@utils/colors'

const ExchangeButton = (props) => {
    return (
        <TouchableOpacity
            style={[styles.swapButton, styles.shadow]}
            onPress={props.onPress}
            activeOpacity={0.8}
        >
            <Icon
                name='refresh-cw'
                type='feather'
                color='white'
                size={20}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    swapButton: {
        height: 44,
        width: 44,
        borderRadius: 22,
        position: 'absolute',
        backgroundColor: Colors.blue,
        right: 0,
        marginRight: 16,
        top: 118,
        alignItems: 'center',
        justifyContent: 'center',
    },
    shadow: {
        elevation: 10,
        shadowOffset: { width: 4.5, height: 4.5 },
        shadowColor: Colors.shadowBlue,
        shadowOpacity: 0.25,
        shadowRadius: 5,
    },
})

export default ExchangeButton