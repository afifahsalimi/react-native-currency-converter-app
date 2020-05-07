import React from 'react'
import {
    StyleSheet,
    Text
} from 'react-native'
import moment from 'moment'

import Colors from '@utils/colors'

const RateText = (props) => {
    const { baseCurrency, conversionRate, quoteCurrency, date } = props
    return (
        <Text style={styles.infoText}>{`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency}${'\n'}as of ${moment(date).format('MMMM D, YYYY')}`}</Text>
    )
}

const styles = StyleSheet.create({
    infoText: {
      textAlign: 'center',
      margin: 16,
      color: Colors.blue,
    },
  })

export default RateText