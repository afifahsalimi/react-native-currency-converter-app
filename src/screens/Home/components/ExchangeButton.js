import React from 'react'
import {
    StyleSheet,
    TouchableOpacity,
} from 'react-native'
import { Icon } from 'react-native-elements'

const ExchangeButton = (props) => {

    const { onPress, themeColor } = props
    
    return (
        <TouchableOpacity
            style={[
                styles.swapButton,
                styles.shadow,
                {
                    backgroundColor: themeColor.primary,
                    shadowColor: themeColor.primary
                }
            ]}
            onPress={onPress}
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
        right: 0,
        marginRight: 16,
        top: 118,
        alignItems: 'center',
        justifyContent: 'center',
    },
    shadow: {
        elevation: 10,
        shadowOffset: { width: 4.5, height: 4.5 },
        shadowOpacity: 0.25,
        shadowRadius: 5,
    },
})

export default ExchangeButton