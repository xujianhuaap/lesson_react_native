import React, {Component} from 'react';
import {
  SectionList,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from 'react-native';
import DATA from '../json/RightBar.json';
import SectionICon from '../res/drawable/icon_arrow_bottom.png';

const DATA1 = JSON.parse(JSON.stringify(DATA));

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

class SectionHeaderIcon extends Component {
  render() {
    return (
      <View>
        <Animated.Image source={SectionICon} style={styles.sectionHeaderIcon} />
      </View>
    );
  }
}

class SectionHeader extends Component {
  press = () => {
    const section = this.props.section;
    this.props.handleSectionHeader({section});
  };
  render() {
    return (
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText} onPress={this.press}>
          {this.props.section.title}
        </Text>
        <SectionHeaderIcon></SectionHeaderIcon>
      </View>
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

  componentDidMount() {
    let dataCopy = [];
    Object.assign(dataCopy, DATA);
    this.setState({
      data: dataCopy,
    });
  }

  handleSectionHeader = ({section}) => {
    let currentData = this.state.data;
    for (let index = 0; index < currentData.length; index++) {
      const item = currentData[index];
      if (item.title !== section.title) {
        continue;
      }
      if (section.show) {
        item.data = [];
        item.show = false;
      } else {
        item.data = DATA1[index].data;
        item.show = true;
      }
      break;
    }
    this.setState({
      data: currentData,
    });
  };

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
            <SectionHeader
              section={section}
              handleSectionHeader={this.handleSectionHeader}
            />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sectionHeader: {
    flexDirection: 'row',
  },
  sectionHeaderText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  sectionHeaderIcon: {
    width: 15,
    height: 15,
    alignSelf: 'center',
  },
  sectionItem: {
    paddingLeft: 10,
    paddingBottom: 2,
    paddingTop: 2,
    fontSize: 21,
  },
});

export default RightBar;
