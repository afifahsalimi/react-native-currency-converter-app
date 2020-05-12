import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  FlatList
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { Header1 } from '@components/Header'
import { SearchInput } from '@components/Input'
import { SafeView } from '@components/Container'
import { ListItem, ListSeparator } from '@components/List'
import currencies from '@data/currencies'
import {
  fetchLatestConversionRates, changeBaseCurrency, changeQuoteCurrency
} from '@actions/currency'

const CurrencyScreen = (props) => {

  const { navigation, route } = props
  const [filteredCurrencies, setFilteredCurrencies] = useState(currencies)
  const dispatch = useDispatch()
  const baseCurrency = useSelector(state => state.currency.baseCurrency)
  const quoteCurrency = useSelector(state => state.currency.quoteCurrency)
  const themeColor = useSelector(state => state.theme.color)

  const { type } = route.params

  let comparisonCurrency = baseCurrency
  if (type === 'quote') {
    comparisonCurrency = quoteCurrency
  }

  const onSearchCurrency = (text) => {
    const fCurrencies = currencies.filter((currency => (
      currency.base.includes(text.toUpperCase()) ||
      currency.desc.toUpperCase().includes(text.toUpperCase())
    )))
    setFilteredCurrencies(fCurrencies)
  }

  const onSelectCurrency = (currency) => {
    if (type === 'base') {
      dispatch(changeBaseCurrency(currency))
      dispatch(fetchLatestConversionRates(currency))
    } else if (type === 'quote') {
      dispatch(changeQuoteCurrency(currency))
    }
    navigation.goBack()
  }

  const onPressClose = () => {
    navigation.goBack()
  }

  return (
    <SafeView style={styles.container}>
      <Header1
        onPress={onPressClose}
        titleText='Choose a currency'
        titleColor={themeColor.primary}
        titleSize={18}
        iconName='close'
        iconType='antdesign'
        iconSize={25}
        iconColor={themeColor.primary}
      />
      <View style={styles.outerContainer}>
        <SearchInput 
          themeColor={themeColor}
          onChangeText={(text) => onSearchCurrency(text)}
        />
        <FlatList
          contentContainerStyle={styles.flatlistContainer}
          ItemSeparatorComponent={ListSeparator}
          data={filteredCurrencies}
          renderItem={({ item, index, separators }) => (
            <ListItem
              image={item.image}
              initialText={item.base}
              descText={item.desc}
              selected={item.base === comparisonCurrency}
              onPress={() => onSelectCurrency(item.base)}
            />
          )}
          keyExtractor={item => item.base}
        />
      </View>
    </SafeView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  outerContainer: {
    flex: 1,
    paddingHorizontal: 20,
  }
})

export default CurrencyScreen