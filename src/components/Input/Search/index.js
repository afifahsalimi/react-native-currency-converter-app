import React from 'react'
import { View, TextInput } from 'react-native'
import { Icon } from 'react-native-elements'

import styles from './styles'
import Colors from '@utils/colors'

const SearchInput = ({
  ...props
}) => (
    <View style={styles.searchContainer}>
      <Icon
        name='search'
        type='feather'
        color={Colors.blue}
        size={15}
      />
      <TextInput
        style={styles.searchTInput}
        placeholder='Search'
        placeholderTextColor={Colors.blue}
        {...props}
      />
    </View>
  )

export default SearchInput
