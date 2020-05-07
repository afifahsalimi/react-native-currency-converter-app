import React from 'react'
import { StyleSheet, ScrollView, View } from 'react-native'

import ThemeList from './components/ThemeList'
import { MainContainer, SafeView } from '@components/Container'
import { Header1 } from '@components/Header'
import Colors from '@utils/colors'

const ThemeScreen = (props) => {

  const onCloseTheme = () => {
    props.navigation.goBack()
  }

  return (
    <MainContainer>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <SafeView>
          <Header1
            onPress={onCloseTheme}
            titleText='Themes'
            titleSize={25}
            titleAlign='left'
            iconName='close'
            iconType='antdesign'
            iconSize={25}
          />
          <View style={styles.outerContainer}>
            <View style={{ height: 30 }} />
            <ThemeList
              title='Blue'
              color={Colors.blue}
              onPress={() => { }}
            />
            <ThemeList
              title='Dark blue'
              color={Colors.darkblue}
              onPress={() => { }}
            />
            <ThemeList
              title='Green'
              color={Colors.green}
              onPress={() => { }}
            />
          </View>
        </SafeView>
      </ScrollView>
    </MainContainer>
  )
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
})

export default ThemeScreen