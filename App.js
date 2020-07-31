/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native';

function App() {
  const [isOld, setOld] = useState(true);
  return (
    <SafeAreaView>
      <View>
        <Text>Hello World</Text>
        <Button
          title={isOld ? '1' : '2'}
          onPress={() => {
            setOld(!isOld);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
