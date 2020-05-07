import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import { Icon } from 'react-native-elements'

import Colors from '@utils/colors'

const SettingList = (props) => {
  return (
    <TouchableOpacity
      style={[styles.shadow, styles.listContainer]}
      onPress={props.onPress}
      activeOpacity={0.8}
    >
      <Text style={{ color: Colors.darkblue, fontSize: 16 }}>{props.title}</Text>
      <Icon
        name={props.iconName}
        type={props.iconType}
        color={Colors.darkblue}
        size={props.iconSize}
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
    shadowColor: Colors.shadowBlue,
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },
})

export default SettingList