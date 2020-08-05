import React, {Component} from 'react';
import {
  SectionList,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
const DATA = [
  {
    title: '核心组件',
    show: true,
    data: [
      {title: '核心组件和api'},
      {title: 'ActivityIndicator'},
      {title: 'Button'},
      {title: 'FlatList'},
      {title: 'Image'},
      {title: 'ImageBackground'},
      {title: 'KeyboardAvoidingView'},
      {title: 'Modal'},
      {title: 'Pressable'},
      {title: 'RefreshControl'},
      {title: 'SafeAreaView'},
      {title: 'ScrollView'},
      {title: 'SectionList'},
      {title: 'StatusBar'},
      {title: 'Switch'},
      {title: 'Text'},
      {title: 'TextInput'},
      {title: 'TouchableHighLight'},
      {title: 'TouchableOpacity'},
      {title: 'TouchableWithoutFeedback'},
      {title: 'View'},
      {title: 'VirtualizedList'},
      {title: 'Android组件'},
      {title: 'DrawerLayoutAndroid'},
      {title: 'TouchableNativeFeedback'},
      {title: 'IOS组件'},
      {title: 'InputAccessoryView'},
    ],
  },
  {
    title: '属性',
    show: true,
    data: [
      {title: 'Image样式属性'},
      {title: '布局属性'},
      {title: '阴影样式属性'},
      {title: 'View样式属性'},
    ],
  },
];
class ItemView extends Component {
  render() {
    return (
      <TouchableOpacity onPress={() => null}>
        <View style={styles.sectionItem}>
          <Text numberOfLines={1} ellipsizeMode="middle">
            {this.props.index + '.' + this.props.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}
class RightBar extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      data: [],
    };
  }

  handleSectionHeader = ({section}) => {
    const currentData = this.state.data;
    currentData.map(({item, index}) => {
      if (item === section) {
        if (section.show) {
          item.data = [];
        } else {
          item.data = DATA[index];
        }
        item.show = !item.show;
      }
    });
    this.setState({
      data: currentData,
    });
  };

  componentDidMount() {
    this.setState({
      data: DATA,
    });
  }

  render() {
    return (
      <View>
        <SectionList
          sections={this.state.data}
          keyExtractor={(item, index) => item + index}
          renderItem={({item, index}) => (
            <ItemView title={item.title} index={index} />
          )}
          renderSectionHeader={({section}) => (
            <Text
              style={styles.sectionHeader}
              onPress={() => this.handleSectionHeader({section})}>
              {section.title}
            </Text>
          )}
          extraData={this.state}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sectionHeader: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  sectionItem: {
    paddingLeft: 10,
    paddingBottom: 2,
    paddingTop: 2,
    fontSize: 21,
  },
});
export default RightBar;
