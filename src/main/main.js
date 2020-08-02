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

class ContentView extends Component {
  render() {
    return (
      <View style={styles.contentView}>
        <Text> i am Content</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleText: {
    color: 'white',
    textAlign: 'center',
    width: '100%',
    fontSize: 24,
    fontWeight: 'bold',
  },
  titleContainer: {
    width: '100%',
    height: '10%',
    backgroundColor: 'black',
  },
  sideBarContainer: {
    width: '20%',
    height: '100%',
    backgroundColor: 'orange',
  },
  contentView: {
    width: '20%',
    height: '100%',
    backgroundColor: 'green',
    flexGrow: 1,
  },
});

export {TitleView, SideBar, ContentView};
