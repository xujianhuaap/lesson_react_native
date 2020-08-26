/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {MainScreen} from './src/main/Main';
import {ChapterScreen} from './src/Chapter/Chapter';

const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="main" component={MainScreen} />
        <Stack.Screen name="chapter" component={ChapterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
