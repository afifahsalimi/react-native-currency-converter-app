import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from '@screens/Home'
import CurrencyScreen from '@screens/Currency'
import SettingScreen from '@screens/Setting'
import ThemeScreen from '@screens/Theme'

const MainStackNav = createStackNavigator()
export const MainNavigator = () => (
  <MainStackNav.Navigator>
    <MainStackNav.Screen options={{ headerShown: false }} name="HomeScreen" component={HomeScreen} />
    <MainStackNav.Screen options={{ headerShown: false }} name="CurrencyScreen" component={CurrencyScreen} />
    <MainStackNav.Screen options={{ headerShown: false }} name="SettingScreen" component={SettingScreen} />
    <MainStackNav.Screen options={{ headerShown: false }} name="ThemeScreen" component={ThemeScreen} />
  </MainStackNav.Navigator>
)