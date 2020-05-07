import { StyleSheet } from 'react-native'

import Colors from '@utils/colors'
import { windowHeight, windowWidth } from '@utils/constants'

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  fullView: {
    flex: 1,
  },
  bubbleContainer1: {
    width: 300,
    height: 150,
    borderBottomRightRadius: 75,
    backgroundColor: Colors.blue,
  },
  bubbleContainer2: {
    width: 80,
    height: 100,
    borderTopLeftRadius: 40,
    alignSelf: 'flex-end',
    backgroundColor: Colors.blue,
  },
  contentContainer: { 
    position: 'absolute', 
    width: windowWidth, 
    height: windowHeight, 
  },
})