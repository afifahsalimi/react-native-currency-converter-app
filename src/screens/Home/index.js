import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'

import { MainContainer, SafeView } from '@components/Container'
import { Header1 } from '@components/Header'
import { connectAlert } from '@components/Alert'
import { CurrencyFrom, CurrencyTo, ExchangeButton } from './components'
import Colors from '@utils/colors'

const HomeScreen = (props) => {

  const { alertWithType } = props

  const [value, onChangeText] = useState('55.88')

  const onPressMenu = () => {
    props.navigation.navigate('SettingScreen')
  }

  const onPressBase = () => {
    props.navigation.navigate('CurrencyScreen')
  }

  const onPressQuote = () => {
    props.navigation.navigate('CurrencyScreen')
  }

  return (
    <MainContainer>
      <SafeView>
        <Header1
          onPress={onPressMenu}
          titleText={`Currency${'\n'}Converter`}
          titleSize={25}
          titleAlign='left'
          iconName='menu'
          iconType='feather'
          iconSize={25}
        />

        <View style={styles.outerContainer}>
          <View>
            <CurrencyFrom
              onPress={() => onPressBase()}
              value={value}
              onChangeText={(text) => onChangeText(text)}
            />
            <View style={{ height: 16 }} />
            <CurrencyTo
              onPress={() => onPressQuote()}
              value={value}
              onChangeText={(text) => onChangeText(text)}
            />
            <ExchangeButton
              onPress={() => {}}
            />
          </View>
          <Text style={styles.infoText}>1 USD = 4.18 MYR</Text>
        </View>
      </SafeView>
    </MainContainer>
  )
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  infoText: {
    textAlign: 'center',
    margin: 16,
    color: Colors.blue,
  },
})

export default connectAlert(HomeScreen)