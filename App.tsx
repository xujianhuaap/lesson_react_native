/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {MainScreen} from './src/main/Main';
import {ChapterScreen} from './src/chapter/Chapter';
import {LoginScreen} from './src/login/Login';
import {PickImageScreen} from './src/pick_image/PickImage';

const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="screen"
        screenOptions={{
          title: '',
          headerStyle: {backgroundColor: 'black'},
          headerStatusBarHeight: 0,
          headerTitleAlign: 'center',
          headerTintColor: 'white',
        }}>
        <Stack.Screen
          name="main"
          component={MainScreen}
          options={{title: 'React Learn'}}
        />
        <Stack.Screen
          name="chapter"
          component={ChapterScreen}
          options={{
            title: 'chapter Detail',
          }}
        />
        <Stack.Screen
          name="login"
          component={LoginScreen}
          options={{title: 'Login'}}
        />
        <Stack.Screen
          name="pick_image"
          component={PickImageScreen}
          options={{title: 'PickImage'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
