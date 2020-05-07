import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'

import Colors from '@utils/colors'
import styles from './styles'

const Header2 = ({
  onPress,

  titleText,
  titleColor = Colors.darkblue,
  titleSize = 16,
  titleAlign = 'center',

  iconName,
  iconType,
  iconSize = 20,
  iconColor = Colors.darkblue,
}) => (
    <View style={styles.headerContainer2}>
      <TouchableOpacity 
        style={styles.iconContainer2}
        activeOpacity={0.8}
      >
        <Icon
          name={iconName}
          type={iconType}
          color={iconColor}
          size={iconSize}
        />
      </TouchableOpacity>
      <Text
        style={{
          flex: 1,
          color: titleColor,
          fontSize: titleSize,
          textAlign: titleAlign,
          fontWeight: 'bold',
        }}
      >{titleText}</Text>
    </View>
  )

export default Header2