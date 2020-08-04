import React, {Component} from 'react';
import {SectionList, Text, View, StyleSheet} from 'react-native';

const ItemView = ({title}) => {
  return (
    <View style={styles.sectionItem}>
      <Text style={styles.sectionItemText}>{title}</Text>
    </View>
  );
};

class RightBar extends Component {
  DATA = [
    {
      title: '核心组件',
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
      data: [
        {title: 'Image样式属性'},
        {title: '布局属性'},
        {title: '阴影样式属性'},
        {title: 'View样式属性'},
      ],
    },
  ];

  render() {
    return (
      <View>
        <SectionList
          sections={this.DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={({item}) => <ItemView title={item.title} />}
          renderSectionHeader={({section: {title}}) => (
            <Text style={styles.sectionHeader}>{title}</Text>
          )}
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
  sectionItemText: {
    width: '100%',
    ellipsizeMode: 'middle',
    numberOfLines: 1,
  },
});
export default RightBar;
