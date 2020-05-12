import React from 'react'
import {
    StyleSheet,
    View,
    TextInput,
    Text,
    TouchableOpacity,
    Image,
    Platform
} from 'react-native'
import { Icon } from 'react-native-elements'

import Colors from '@utils/colors'

const CurrencyTo = (props) => {
    const { currency, onPress, value, themeColor } = props
    return (
        <View style={[styles.boxContainer, styles.shadow, { shadowColor: themeColor.primary }]}>
            <TextInput
                editable={false}
                style={styles.value2TInput}
                value={value}
            />
            <View style={styles.currencyContainer}>
                <View style={styles.flagContainer}>
                    <Image
                        style={styles.flagImage}
                        source={currency.image}
                        resizeMode='cover'
                    />
                    <Text style={styles.initialText}>{currency.base}</Text>
                </View>
                <TouchableOpacity
                    style={styles.optionButton}
                    onPress={onPress}
                    activeOpacity={0.8}
                >
                    <Text style={styles.descText}>{currency.desc}</Text>
                    <Icon
                        name='down'
                        type='antdesign'
                        color='black'
                        size={12}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    boxContainer: {
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 10,
    },
    shadow: {
        elevation: 5,
        shadowOffset: { width: 4.5, height: 4.5 },
        shadowOpacity: 0.25,
        shadowRadius: 5,
    },
    value2TInput: {
        marginBottom: 12,
        fontSize: Platform.OS == 'ios' ? 50 : 44,
        height: 60,
        padding: 0,
        color: Colors.font
    },
    currencyContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    flagContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    flagImage: {
        width: 26,
        height: 16,
        borderRadius: 4,
        marginRight: 8,
    },
    initialText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.font
    },
    optionButton: {
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    descText: {
        fontSize: 14,
        marginRight: 8,
        color: Colors.font
    },
})

export default CurrencyTo