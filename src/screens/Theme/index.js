import React from 'react'
import { StyleSheet, ScrollView, View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import ThemeList from './components/ThemeList'
import { MainContainer, SafeView } from '@components/Container'
import { Header1 } from '@components/Header'
import Colors from '@utils/colors'
import * as themeActions from '@actions/theme'

const ThemeScreen = (props) => {

  const dispatch = useDispatch()
  const themeColor = useSelector(state => state.theme.color)

  const onCloseTheme = () => {
    props.navigation.goBack()
  }

  const changeTheme = (theme) => {
    dispatch(themeActions.changePrimaryColor(theme))
  }

  return (
    <MainContainer backgroundImage={themeColor.background}>
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
              color={Colors.blue.primary}
              onPress={() => {
                changeTheme({
                  primary: Colors.blue.primary,
                  accent: Colors.blue.accent,
                  background: Colors.blue.background
                })
              }}
              themeColor={themeColor}
            />
            <ThemeList
              title='Dark blue'
              color={Colors.darkblue.primary}
              onPress={() => {
                changeTheme({
                  primary: Colors.darkblue.primary,
                  accent: Colors.darkblue.accent,
                  background: Colors.darkblue.background
                })
              }}
              themeColor={themeColor}
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