import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

class TitleView extends Component {
  render() {
    return (
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>i am title</Text>
      </View>
    );
  }
}

class SideBar extends Component {
  render() {
    return (
      <View style={styles.sideBarContainer}>
        <Text> i am side bar</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleText: {
    color: 'white',
    textAlign: 'center',
    width: '100%',
    fontSize: 18,
  },
  titleContainer: {
    width: '100%',
    height: '30%',
    backgroundColor: 'black',
  },
  sideBarContainer: {
    width: '20%',
    height: '70%',
    backgroundColor: 'orange',
  },
});

export {TitleView, SideBar};
