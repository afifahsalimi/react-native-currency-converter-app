import React from 'react'
import { StyleSheet, FlatList } from 'react-native'

import { ListItem, ListSeparator } from '@components/List'

const CurrencyList = (props) => {
  return (
    <FlatList
      contentContainerStyle={styles.flatlistContainer}
      ItemSeparatorComponent={ListSeparator}
      data={props.data}
      renderItem={({ item, index, separators }) => (
        <ListItem
          image={require('@assets/flag_us.png')}
          initialText='USD'
          descText="United States Dollar"
          selected={false}
          onPress={() => {}}
        />
      )}
    />
  )
}

const styles = StyleSheet.create({
  flatlistContainer: {
    flex: 1,
  },
})

export default CurrencyList