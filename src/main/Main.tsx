import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import TopNavigationBar from './TopBar';
import RightBar from './RightBar';
import {useNavigation, useRoute} from '@react-navigation/native';
import {navigateChapter, navigateLogin, navigatePickImage, RouteParams} from '../Navigator';
import ToastModule from '../android';

interface Props {
  style: {};
}

class TitleView extends Component<Props> {
  render() {
    return (
      <View style={this.props.style}>
        <TopNavigationBar />
      </View>
    );
  }
}

class SideBar extends Component {
  render() {
    return (
      <View style={styles.sideBarContainer}>
        <RightBar />
      </View>
    );
  }
}

interface ContextViewPros {
  navigation: any;
  info?: string;
}
class ContentView extends Component<ContextViewPros> {
  render() {
    return (
      <View style={styles.contentView}>
        <Text onPress={() => navigateChapter(this.props.navigation)}>
          i am Content
        </Text>
        <Text
          onPress={() => {
            ToastModule.show('click me', 1000);
          }}>
          {this.props!.info}
        </Text>
        <Text onPress={() => navigateLogin(this.props.navigation)}>
          you has not login
        </Text>
        <Text onPress={() => navigatePickImage(this.props.navigation)}>
          go to pick image
        </Text>
      </View>
    );
  }
}

/***
 * 布局
 * 1> alignContent 如果子组件被分割成多行,才有意义.主要控制行之间的距离.flex-start flex-end stretch center space-between space-around
 * 2> alignItems 把子组件当成一个组,控制该组与父控件的距离,start end center stretch
 * 3> alignSelf 针对组件本身在侧轴方向上相对于父控件的距离,可以重写父组件的alignItems  start end center stretch
 *
 * 1> flexBasis 值为int 或者string  要与 父组件的flexDirection 配合使用,若父控件的flexDirection为row 或者 row-reverse 则表示该组件的
 * 宽度为父控件的一定比例.若父组件的flexDirection 为column 或者 column-reverse 则该组件的高度为父组件高度的一定比例
 * 2> flexDirection row(left-to-right) row-reverse(right-to-left) column(top-to-bottom) column-reverse(bottom-to-top)
 * 3> flexWrap 表示子组件超过父组件的边界,如何排序.wrap 换行展示,wrap-reverse 换行展示并且逆序排列,nowrap 不换行
 *
 * 1> flexShrink 值为int 当该控件超过父组件边界时候,沿着主轴方向收缩
 * 2> flexGrow 值为int 当该控件在主轴方向不足以填充父控件,就扩充自己
 * 3> justifyContent 是对于多列的子组件,又有意义,主要控制列之间的距离.
 */

export function MainScreen() {
  let navigation = useNavigation();
  let params = useRoute().params;
  let info;
  if (params !== undefined) {
    info = (params as RouteParams).info;
  }
  return (
    <View>
      <TitleView style={styles.titleView} />
      <View style={styles.contentContainer}>
        <SideBar />
        <ContentView navigation={navigation} info={info} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  titleView: {
    width: '100%',
    height: '5%',
    justifyContent: 'flex-end',
    backgroundColor: 'black',
  },
  contentContainer: {
    width: '100%',
    height: '95%',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  titleText: {
    color: 'white',
    textAlign: 'center',
    width: '100%',
    fontSize: 20,
    fontWeight: 'bold',
  },
  sideBarContainer: {
    width: '35%',
    height: '100%',
    backgroundColor: '#ddddd3',
  },
  contentView: {
    height: '100%',
    backgroundColor: 'green',
    flexGrow: 1,
  },
});
