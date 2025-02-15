import React from 'react'
import {
  View,
  ImageBackground,
  StyleSheet
} from 'react-native'

const MainContainer = (props) => (
  <View style={styles.mainContainer}>
    <ImageBackground
      source={props.backgroundImage}
      style={styles.imageContainer}
      resizeMode='stretch'
    >
      {props.children}
    </ImageBackground>
  </View>
)

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  imageContainer: {
    width: '100%',
    height: '100%'
  },
})

export default MainContainer