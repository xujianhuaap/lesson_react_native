import {Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export function ChapterScreen() {
  let navigation = useNavigation();
  return (
    <View>
      <Text onPress={() => navigation.navigate('main')}> chapter one </Text>
    </View>
  );
}
