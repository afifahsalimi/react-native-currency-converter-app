import React, { useEffect } from 'react'
import 'react-native-gesture-handler'
import { Platform, Keyboard } from 'react-native'
import { Provider } from 'react-redux'

import { Navigator } from '@routes'
import { store } from '@store'
import * as deviceAction from '@actions/device'
import { AlertProvider } from '@components/Alert'

const App = () => {
  console.disableYellowBox = true

  onKeyboardAppear = e => {
    deviceAction.setKeyboard({
      isKeyboardAppear: true,
      keyboardHeight: e.endCoordinates.height,
    })
  }

  onKeyboardHide = () => {
    deviceAction.setKeyboard({ isKeyboardAppear: false, keyboardHeight: 0 })
  }

  useEffect(() => {
    Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow',
      onKeyboardAppear
    )
    Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide',
      onKeyboardHide
    )
  }, [])

  return (
    <Provider store={store}>
      <AlertProvider>
        <Navigator />
      </AlertProvider>
    </Provider>
  )
}

export default App