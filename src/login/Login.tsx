import {View, Text, TextInput, StyleSheet, Button, Alert} from 'react-native';
import React from 'react';

export function LoginScreen() {
  return (
    <View>
      <View style={{flexDirection: 'row', marginBottom: 20, marginTop: 100}}>
        <View style={{justifyContent: 'center'}}>
          <Text> 用户名:</Text>
        </View>
        <View style={{justifyContent: 'center', width: '100%'}}>
          <TextInput
            keyboardType="phone-pad"
            maxLength={11}
            style={{backgroundColor: 'grey', width: '100%', padding: 0}}
          />
        </View>
      </View>
      <View style={{flexDirection: 'row', marginBottom: 40}}>
        <View style={{justifyContent: 'center'}}>
          <Text>密码:</Text>
        </View>
        <View style={{justifyContent: 'center', width: '100%'}}>
          <TextInput
            placeholder={'密码不低于８位，必须包含特殊字符数字字母'}
            keyboardType="phone-pad"
            style={{backgroundColor: 'grey', width: '100%', padding: 0}}
          />
        </View>
      </View>
      <View style={{flexDirection: 'row', width: '100%', backgroundColor: 'red'}}>
        <View style={{width: '40%', justifyContent: 'center'}}>
          <Button
            title={'登录'}
            onPress={() => Alert.alert('login', 'login success')}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  user_name: {flexDirection: 'row'},
  user_password: {flexDirection: 'row'},
});
