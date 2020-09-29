import {View, TextInput, Button, StyleSheet} from 'react-native';
import React from 'react';
import {navigateMain} from '../Navigator';
import {useNavigation} from '@react-navigation/native';

export function LoginScreen() {
  let navigation = useNavigation();
  return <LoginView navigation={navigation} />;
}

interface LoginViewProps {
  navigation: any;
}

interface LoginBasicInfo {
  userName: string | undefined;
  userPassword: string | undefined;
}

type LoginViewState = LoginBasicInfo;

class LoginView extends React.Component<LoginViewProps, LoginViewState> {
  constructor(props: any) {
    super(props);
    this.state = {
      userName: undefined,
      userPassword: undefined,
    };
  }

  handleInfoChange(
    userName: string | undefined,
    userPassword: string | undefined,
  ) {
    console.log(`userName:【${userName}】, userPassword: 【${userPassword}】`);
    if (userName !== undefined && userName !== null) {
      this.setState({
        userName: userName,
      });
    }
    if (userPassword !== undefined && userPassword != null) {
      this.setState({
        userPassword: userPassword,
      });
    }
  }

  render() {
    const userName = this.state.userName;
    const userPassword = this.state.userPassword;
    return (
      <View style={styles.login_view}>
        <UserNameInput handle={this.handleInfoChange.bind(this)} />
        <UserPasswordInput handle={this.handleInfoChange.bind(this)} />
        <LoginButton
          userName={userName}
          userPassword={userPassword}
          navigation={this.props.navigation}
        />
      </View>
    );
  }
}

interface LoginInfoHandle {
  handle: (name: string | undefined, password: string | undefined) => void;
}
class UserNameInput extends React.Component<LoginInfoHandle> {
  render() {
    return (
      <View style={styles.user_name_view}>
        <View>
          <TextInput
            placeholder={'用户名为注册手机号'}
            keyboardType="phone-pad"
            maxLength={11}
            clearButtonMode="unless-editing"
            onChangeText={(text) => this.props.handle(text, undefined)}
            style={styles.user_name_input}
          />
        </View>
      </View>
    );
  }
}

class UserPasswordInput extends React.Component<LoginInfoHandle> {
  render() {
    return (
      <View style={styles.user_password_view}>
        <TextInput
          placeholder={'密码不低于８位，必须包含特殊字符数字字母'}
          keyboardType="default"
          secureTextEntry={true}
          onChangeText={(text) => {
            this.props.handle(undefined, text);
          }}
          style={styles.user_name_input}
        />
      </View>
    );
  }
}

type LoginButtonProps = LoginBasicInfo & {navigation: any};

interface LoginButtonState {
  title: string;
  timerHandle: undefined | NodeJS.Timeout;
}

class LoginButton extends React.Component<LoginButtonProps, LoginButtonState> {
  constructor(props: Readonly<LoginButtonProps>) {
    super(props);
    this.state = {title: '登录', timerHandle: undefined};
  }
  timerHandler = (..._: any[]) => {
    navigateMain(this.props.navigation, {info: 'i am from login'});
  };

  login() {
    console.log(
      `userName:【${this.props.userName}】, userPassword: 【${this.props.userPassword}】`,
    );
    if (
      this.props.userName !== undefined &&
      this.props.userPassword !== undefined
    ) {
      if (
        this.props.userName.includes('9') &&
        this.props.userPassword.includes('3')
      ) {
        this.setState({title: '验证通过'});
        setTimeout(this.timerHandler, 300);
      }
    }
  }
  componentDidMount(): void {}

  render() {
    return (
      <View style={styles.login_button}>
        <Button title={this.state.title} onPress={() => this.login()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  login_button: {width: '40%', alignSelf: 'center'},
  user_name_input: {
    backgroundColor: 'grey',
    width: '100%',
    padding: 0,
    textAlign: 'center',
  },
  user_name_view: {marginBottom: 20, marginTop: 100},
  user_password_view: {marginBottom: 40},
  login_view: {paddingLeft: 20, paddingRight: 20},
});
