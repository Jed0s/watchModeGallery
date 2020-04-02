import React from 'react';
import {Text, View} from "react-native";
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import ImagesList from './scenes/ImagesList';
import CurrentImage from "./scenes/CurrentImage";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name = 'ImagesList'
                    component = { ImagesList }
                    options = {{
                        headerTitleAlign: 'center',
                        //headerTransparent: true,
                        //headerTitle: props => null
                        title: 'Gallery'
                    }}
                />
                <Stack.Screen
                    name = 'CurrentImage'
                    component = { CurrentImage }
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}