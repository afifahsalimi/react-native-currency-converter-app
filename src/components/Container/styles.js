import { StyleSheet } from 'react-native'

import { windowHeight, windowWidth } from '@utils/constants'

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  fullView: {
    flex: 1,
  },
  contentContainer: { 
    position: 'absolute', 
    width: windowWidth, 
    height: windowHeight, 
  },
})