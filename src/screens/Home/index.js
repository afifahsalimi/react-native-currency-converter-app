import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import { MainContainer, SafeView } from '@components/Container'
import { Header1 } from '@components/Header'
import { connectAlert } from '@components/Alert'
import { CurrencyFrom, CurrencyTo, ExchangeButton, RateText } from './components'
import {
  changeCurrencyAmount, swapCurrency, getInitialConversion, fetchLatestConversionRates
} from '@actions/currency'
import allCurrencies from '@data/currencies'

const HomeScreen = (props) => {

  const { alertWithType } = props

  const dispatch = useDispatch()
  const currencies = useSelector(state => state.currency)
  const themeColor = useSelector(state => state.theme.color)
  const { baseCurrency, quoteCurrency, amount } = currencies
  const conversionSelector = useSelector(state => state.currency.conversions[baseCurrency] || {})
  const rates = conversionSelector.rates || {}
  const conversionRate = rates[quoteCurrency] || 0
  const lastConvertedDate = conversionSelector.date ? new Date(conversionSelector.date) : new Date()
  const isFetching = conversionSelector.isFetching
  const currencyError = currencies.error

  let quotePrice = '...'
  if (!isFetching) {
    quotePrice = (amount * conversionRate).toFixed(2)
  }

  const onPressMenu = () => {
    props.navigation.navigate('SettingScreen')
  }

  const onPressBase = () => {
    props.navigation.navigate('CurrencyScreen', { type: 'base' })
  }

  const onPressQuote = () => {
    props.navigation.navigate('CurrencyScreen', { type: 'quote' })
  }

  const handleChangeText = (text) => {
    dispatch(changeCurrencyAmount(text))
  }

  const onPressSwap = () => {
    dispatch(swapCurrency())
    dispatch(fetchLatestConversionRates())
  }

  const getCurrencyDetails = (currency) => {
    let currencyDetails = allCurrencies.find((c) => c.base == currency)
    return currencyDetails
  }

  useEffect(() => {
    dispatch(getInitialConversion())
    dispatch(fetchLatestConversionRates())
  }, [])

  useEffect(() => {
    if (currencyError != null) {
      alertWithType('error', 'Error', currencyError)
    }
  }, [currencyError])

  return (
    <MainContainer backgroundImage={themeColor.background}>
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
              currency={getCurrencyDetails(baseCurrency)}
              onPress={() => onPressBase()}
              defaultValue={amount.toString()}
              onChangeText={handleChangeText}
              themeColor={themeColor}
            />
            <View style={{ height: 16 }} />
            <CurrencyTo
              currency={getCurrencyDetails(quoteCurrency)}
              onPress={() => onPressQuote()}
              value={quotePrice}
              themeColor={themeColor}
            />
            <ExchangeButton
              onPress={() => onPressSwap()}
              themeColor={themeColor}
            />
          </View>
          <RateText
            baseCurrency={baseCurrency}
            conversionRate={conversionRate}
            quoteCurrency={quoteCurrency}
            date={lastConvertedDate}
            themeColor={themeColor}
          />
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
})

export default connectAlert(HomeScreen)