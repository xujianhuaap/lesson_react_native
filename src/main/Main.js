import React, {Component} from 'react';
import {Text, View, StyleSheet, FlatList, Button} from 'react-native';
import TopNavigationBar from './TitleBar';

class TitleView extends Component {
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
    fontSize: 20,
    fontWeight: 'bold',
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
