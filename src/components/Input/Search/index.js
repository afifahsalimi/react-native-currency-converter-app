import React from 'react'
import { View, TextInput } from 'react-native'
import { Icon } from 'react-native-elements'
import styles from './styles'

const SearchInput = ({
  themeColor,
  ...props
}) => {

  return (
    <View style={[
      styles.searchContainer,
      { backgroundColor: themeColor.accent }
    ]}>
      <Icon
        name='search'
        type='feather'
        color={themeColor.primary}
        size={15}
      />
      <TextInput
        style={[
          styles.searchTInput,
          { color: themeColor.primary }
        ]}
        placeholder='Search'
        placeholderTextColor={themeColor.primary}
        {...props}
      />
    </View>
  )
}

export default SearchInput
