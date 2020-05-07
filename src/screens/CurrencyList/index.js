import React from 'react'
import {
  StyleSheet,
  View,
  FlatList
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import Colors from '@utils/colors'
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
  const dispatch = useDispatch()
  const baseCurrency = useSelector(state => state.currency.baseCurrency)
  const quoteCurrency = useSelector(state => state.currency.quoteCurrency)

  const { type } = route.params

  let comparisonCurrency = baseCurrency
  if (type === 'quote') {
    comparisonCurrency = quoteCurrency
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
        titleColor={Colors.darkblue}
        titleSize={18}
        iconName='close'
        iconType='antdesign'
        iconSize={25}
        iconColor={Colors.blue}
      />
      <View style={styles.outerContainer}>
        <SearchInput />
        <FlatList
          contentContainerStyle={styles.flatlistContainer}
          ItemSeparatorComponent={ListSeparator}
          data={currencies}
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
  shadow: {
    elevation: 2,
    shadowOffset: { width: 4.5, height: 4.5 },
    shadowColor: Colors.shadowBlue,
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },
  outerContainer: {
    flex: 1,
    paddingHorizontal: 20,
  }
})

export default CurrencyScreen