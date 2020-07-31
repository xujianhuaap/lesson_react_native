/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, ScrollView, Slider} from 'react-native';
import {TitleView, SideBar} from './src/main/main';

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
function App() {
  return (
    <View>
      <TitleView />
      <SideBar></SideBar>
    </View>
  );
}

export default App;
