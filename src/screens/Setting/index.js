import React from 'react'
import { StyleSheet, ScrollView, View } from 'react-native'
import { useSelector } from 'react-redux'

import SettingList from './components/SettingList'
import { MainContainer, SafeView } from '@components/Container'
import { Header1 } from '@components/Header'

const SettingScreen = (props) => {

  const themeColor = useSelector(state => state.theme.color)

  const onCloseSetting = () => {
    props.navigation.goBack()
  }

  const onPressTheme = () => {
    props.navigation.navigate('ThemeScreen')
  }

  return (
    <MainContainer backgroundImage={themeColor.background}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <SafeView>
          <Header1
            onPress={onCloseSetting}
            titleText='Settings'
            titleSize={25}
            titleAlign='left'
            iconName='close'
            iconType='antdesign'
            iconSize={25}
          />
          <View style={styles.outerContainer}>
            <View style={{ height: 30 }} />
            <SettingList
              title='Change theme'
              iconName='palette'
              iconType='material'
              iconSize={24}
              onPress={onPressTheme}
              themeColor={themeColor}
            />
            <SettingList
              title='Share app'
              iconName='share'
              iconType='entypo'
              iconSize={24}
              onPress={() => { }}
              themeColor={themeColor}
            />
            <SettingList
              title='Fixer.io'
              iconName='link-2'
              iconType='feather'
              iconSize={20}
              onPress={() => { }}
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

export default SettingScreen