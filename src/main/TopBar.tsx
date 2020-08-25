import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  ListRenderItemInfo,
} from 'react-native';
interface ItemData {
  title: string;
  id: string;
  selected: boolean;
}

interface TopNavigationBarProps {
  item?: {};
  handleData?: (id: string) => void;
}

interface TopNavigationBarState {
  data: Array<ItemData>;
}

class TopNavigationBar extends Component<
  TopNavigationBarProps,
  TopNavigationBarState
> {
  TitleData: Array<ItemData> = [
    {title: '文档', id: '01', selected: true},
    {title: '组件', id: '02', selected: false},
    {title: 'API', id: '03', selected: false},
    {title: '讨论', id: '04', selected: false},
    {title: '热更新', id: '05', selected: false},
    {title: '关于', id: '06', selected: false},
  ];

  constructor(props: TopNavigationBarProps, context: any) {
    super(props, context);
    this.state = {
      data: this.TitleData,
    };
  }

  render() {
    let renderItem = (item: ListRenderItemInfo<ItemData>) => {
      return <ItemView item={item.item} handleData={this.handleData} />;
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
  handleData = (id: string) => {
    this.TitleData.map((item) => {
      item.selected = id === item.id;
    });
    this.setState({
      data: this.TitleData,
    });
  };
}

interface ItemViewProps {
  item: ItemData;
  handleData: (id: string) => void;
}

interface ItemViewState {
  item: ItemData;
}

class ItemView extends Component<ItemViewProps, ItemViewState> {
  constructor(props: ItemViewProps, context: any) {
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
