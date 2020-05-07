import React from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'

import Colors from '@utils/colors'

const ThemeList = (props) => {
  return (
    <TouchableOpacity
      style={[styles.shadow, styles.listContainer]}
      onPress={props.onPress}
      activeOpacity={0.8}
    >
      <Text style={{ color: Colors.darkblue, fontSize: 16 }}>{props.title}</Text>
      <View
        style={[styles.circleContainer, { backgroundColor: props.color }]}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 18,
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
  circleContainer: {
    height: 20,
    width: 20,
    borderRadius: 10,
  }
})

export default ThemeList