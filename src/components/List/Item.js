import React from 'react'
import {
    TouchableOpacity,
    Image,
    Text,
    StyleSheet
} from 'react-native'
import { Icon } from 'react-native-elements'

import Colors from '@utils/colors'

const ListItem = (props) => {

    const { image, initialText, descText, selected, onPress } = props

    return (
        <TouchableOpacity
            style={styles.singleContainer}
            onPress={onPress}
            activeOpacity={0.8}
        >
            <Image
                style={styles.flagImage}
                source={image}
                resizeMode='cover'
            />
            <Text style={styles.initialText}>{initialText}</Text>
            <Text style={styles.descText}>{descText}</Text>
            {
                selected &&
                <Icon
                    name='check'
                    type='feather'
                    color={Colors.green}
                    size={20}
                />
            }
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    singleContainer: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
    },
    flagImage: {
        width: 15,
        height: 10,
        borderRadius: 2,
    },
    initialText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.darkblue,
        marginLeft: 10,
        marginRight: 14,
    },
    descText: {
        fontSize: 14,
        color: Colors.darkblue,
        flex: 1,
    }
})

export default ListItem