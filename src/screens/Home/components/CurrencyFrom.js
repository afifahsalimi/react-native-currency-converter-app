import React from 'react'
import {
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    Text,
    Platform
} from 'react-native'
import { Icon } from 'react-native-elements'

import Colors from '@utils/colors'

const CurrencyFrom = (props) => {

    const { onPress, onChangeText, defaultValue, currency, themeColor } = props
    
    return (
        <View style={[styles.boxContainer, styles.shadow, { shadowColor: themeColor.primary }]}>
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
            <TextInput
                defaultValue={defaultValue}
                style={styles.value1TInput}
                onChangeText={onChangeText}
            />
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
    value1TInput: {
        marginTop: 12,
        fontSize: Platform.OS == 'ios' ? 50 : 44,
        height: 60,
        padding: 0,
        color: Colors.font
    },
})

export default CurrencyFrom