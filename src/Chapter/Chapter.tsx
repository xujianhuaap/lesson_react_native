import {Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {navigateMain} from '../Navigator';

export function ChapterScreen() {
  let navigation = useNavigation();
  return (
    <View>
      <Text
        onPress={() => navigateMain(navigation, {info: 'i am from chapter'})}>
        chapter one
      </Text>
    </View>
  );
}
