import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import { Icon } from 'react-native-elements'

import Colors from '@utils/colors'

const SettingList = (props) => {

  const { onPress, title, iconName, iconType, iconSize, themeColor } = props

  return (
    <TouchableOpacity
      style={[styles.shadow, styles.listContainer, { shadowColor: themeColor.primary }]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={{ color: Colors.font, fontSize: 16 }}>{title}</Text>
      <Icon
        name={iconName}
        type={iconType}
        color={Colors.font}
        size={iconSize}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 7,
    backgroundColor: 'white',
    marginVertical: 10,
  },
  shadow: {
    elevation: 2,
    shadowOffset: { width: 4.5, height: 4.5 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },
})

export default SettingList