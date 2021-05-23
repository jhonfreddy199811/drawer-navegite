import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer'
import List from '../views/List'
import Product from '../views/Product'

const Drawer = createDrawerNavigator();

export default function Navigate() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen
                name = 'viewone'
                component = {List}
                >

                </Drawer.Screen>

                <Drawer.Screen
                name = 'Product'
                component = {Product}
                >

                </Drawer.Screen>
            </Drawer.Navigator>
        </NavigationContainer>
    )
}
