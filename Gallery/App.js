import React from 'react';
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
                        title: 'Gallery'
                    }}
                />
                <Stack.Screen
                    name = 'CurrentImage'
                    component = { CurrentImage }
                    options = {{
                        headerTransparent: true,
                        headerTitle: null
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}