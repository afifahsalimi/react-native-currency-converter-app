import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'

import styles from './styles'

const Header1 = ({
  onPress,

  titleText,
  titleColor = 'white',
  titleSize = 16,
  titleAlign = 'center',

  iconName,
  iconType,
  iconSize = 20,
  iconColor = 'white',
}) => (
    <View style={styles.headerContainer1}>
      <Text
        style={{
          flex: 1,
          color: titleColor,
          fontSize: titleSize,
          textAlign: titleAlign,
          fontWeight: 'bold',
        }}
      >{titleText}</Text>
      <TouchableOpacity
        style={styles.iconContainer1}
        onPress={onPress}
        activeOpacity={0.8}
      >
        <Icon
          name={iconName}
          type={iconType}
          color={iconColor}
          size={iconSize}
        />
      </TouchableOpacity>
    </View>
  )

export default Header1