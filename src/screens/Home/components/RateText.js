import React from 'react'
import {
  StyleSheet,
  Text
} from 'react-native'
import moment from 'moment'

const RateText = (props) => {

  const { baseCurrency, conversionRate, quoteCurrency, date, themeColor } = props

  return (
    <Text style={[
      styles.infoText,
      { color: themeColor.primary }
    ]}>
      {`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency}${'\n'}as of ${moment(date).format('MMMM D, YYYY')}`}
    </Text>
  )
}

const styles = StyleSheet.create({
  infoText: {
    textAlign: 'center',
    margin: 16,
  },
})

export default RateText