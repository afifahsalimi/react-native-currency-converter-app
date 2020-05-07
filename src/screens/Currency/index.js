import React from 'react'
import { StyleSheet, View } from 'react-native'

import Colors from '@utils/colors'
import { Header1 } from '@components/Header'
import { SearchInput } from '@components/Input'
import { SafeView } from '@components/Container'
import CurrencyList from './components/CurrencyList'

const data = [
  { title: 'Title Text', key: '1' },
  { title: 'Title Text', key: '2' },
  { title: 'Title Text', key: '3' }
]

const CurrencyScreen = (props) => {

  const onPressClose = () => {
    props.navigation.goBack()
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
        <CurrencyList
          data={data}
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