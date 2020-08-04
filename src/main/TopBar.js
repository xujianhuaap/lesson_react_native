import React, {Component, useState} from 'react';
import {Text, View, StyleSheet, FlatList, Button, LogBox} from 'react-native';

class TopNavigationBar extends Component {
  TitleData = [
    {title: '文档', id: '01', selected: true},
    {title: '组件', id: '02', selected: false},
    {title: 'API', id: '03', selected: false},
    {title: '讨论', id: '04', selected: false},
    {title: '热更新', id: '05', selected: false},
    {title: '关于', id: '06', selected: false},
  ];

  constructor(props, context) {
    super(props, context);
    this.state = {
      data: this.TitleData,
    };
  }

  render() {
    const renderItem = ({item}) => {
      return <ItemView item={item} handleData={this.handleData} />;
    };
    return (
      <View style={styles.titleNavigationContainer}>
        <FlatList
          data={this.TitleData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={6}
          columnWrapperStyle={styles.titleNavigationColumn}
        />
      </View>
    );
  }
  handleData = (id) => {
    this.TitleData.map((item) => {
      item.selected = id === item.id;
    });
    this.setState({
      data: this.TitleData,
    });
  };
}

class ItemView extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      item: this.props.item,
    };
  }

  clickItem = () => {
    this.props.handleData(this.props.item.id);
  };

  render() {
    return (
      <View>
        <View style={{width: '100%', marginLeft: '2%', marginRight: '2%'}}>
          <Text
            style={[
              {
                color: this.state.item.selected ? '#48D1CC' : 'white',
              },
              styles.titleText,
            ]}
            onPress={this.clickItem}>
            {this.props.item.title}
          </Text>
        </View>
        <View
          style={[
            {
              backgroundColor: this.state.item.selected
                ? '#48D1CC'
                : 'transparent',
            },
            styles.titleNavigationItemDivider,
          ]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleNavigationContainer: {
    width: '100%',
  },
  titleNavigationColumn: {
    justifyContent: 'space-around',
  },
  titleText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },

  titleNavigationItemDivider: {
    width: '100%',
    height: 2,
  },
});

export default TopNavigationBar;
