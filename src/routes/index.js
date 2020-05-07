import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { MainNavigator } from './navigator'

export const Navigator = () => {
    return (
        <NavigationContainer>
            <MainNavigator />
        </NavigationContainer>
    )
}