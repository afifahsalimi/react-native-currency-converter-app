import React from 'react'
import { View } from 'react-native'
import { isIphoneX } from '@utils/is-iphone-x'
import styles from './styles'

const SafeView = (props) => {
  return (
    <View style={[
        styles.fullView,
        props.style
      ]}>
      <View style={{ height: isIphoneX() ? 40 : 20 }} />
      {props.children}
      <View style={{ height: isIphoneX() ? 30 : 0 }} />
    </View>
  )
}

export default SafeView