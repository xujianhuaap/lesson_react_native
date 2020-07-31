import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

class TitleView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>i am title</Text>
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
  container: {
    width: '100%',
    height: '30%',
    backgroundColor: 'black',
  },
});

export default TitleView;
