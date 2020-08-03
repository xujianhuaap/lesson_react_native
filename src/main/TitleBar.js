import React, {Component, useState} from 'react';
import {Text, View, StyleSheet, FlatList, Button, LogBox} from 'react-native';

class TopNavigationBar extends Component {
  render() {
    const TitleData = [
      {title: '文档', id: '01', selected: true},
      {title: '组件', id: '02', selected: false},
      {title: 'API', id: '03', selected: false},
      {title: '讨论', id: '04', selected: false},
      {title: '热更新', id: '05', selected: false},
      {title: '关于', id: '06', selected: false},
    ];
    const Item = ({title}, {selected}) => {
      return <ItemView title={title} initSelected={selected} />;
    };

    const renderItem = ({item}) => (
      <Item title={item.title} selected={item.selected} />
    );
    return (
      <FlatList
        data={TitleData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={6}
        columnWrapperStyle={styles.titleNavigationColumn}
        style={styles.titleNavigationContainer}
      />
    );
  }
}

class ItemView extends Component {
  constructor(props: P, context: any) {
    super(props, context);
    this.state = {
      selected: props.initSelected,
    };
  }

  clickItem = () => this.setState({selected: true});

  render() {
    return (
      <View style={styles.titleNavigationItem}>
        <View style={{width: '100%'}}>
          <Text
            style={
              this.state.selected ? styles.titleText : styles.titleTextSelect
            }
            color={'black'}
            onPress={this.clickItem}>
            {this.props.title}
          </Text>
        </View>
        <View
          style={
            this.state.selected
              ? styles.titleNavigationItemDividerSelect
              : styles.titleNavigationItemDivider
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleNavigationContainer: {
    width: '100%',
    height: '10%',
  },
  titleNavigationColumn: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  titleNavigationItem: {
    padding: 0,
    margin: 0,
  },
  titleText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    marginRight: 10,
  },

  titleTextSelect: {
    color: 'blue',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    marginRight: 10,
  },

  titleNavigationItemDivider: {
    height: '5%',
    backgroundColor: 'red',
  },
  titleNavigationItemDividerSelect: {
    height: '5%',
    backgroundColor: 'green',
  },
});

export default TopNavigationBar;
