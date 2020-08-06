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
import SectionICon from '../res/drawable/icon_arrow_down.png';

const DATA1 = JSON.parse(JSON.stringify(DATA));

class ItemView extends Component {
  render() {
    return (
      <TouchableOpacity onPress={() => null}>
        <View style={styles.sectionItem}>
          <Text numberOfLines={1} ellipsizeMode="middle">
            {this.props.index + 1 + '.' + this.props.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

class SectionHeaderIcon extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    let rotate = this.getRotate();
    return (
      <View style={styles.sectionHeaderIcon}>
        <Animated.Image
          source={SectionICon}
          style={{width: 25, height: 25, transform: [{rotateZ: rotate}]}}
        />
      </View>
    );
  }

  getRotate() {
    const isShow = this.props.isShow;
    let rotate;
    if (isShow) {
      rotate = '0deg';
    } else {
      rotate = '180deg';
    }
    return rotate;
  }
}

class SectionHeader extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isShow: true,
    };
  }

  press = () => {
    const section = this.props.section;
    this.props.handleSectionHeader({section});
    this.setState({
      isShow: section.show,
    });
  };
  render() {
    return (
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText} onPress={this.press}>
          {this.props.section.title}
        </Text>
        <SectionHeaderIcon isShow={this.state.isShow} />
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
    alignContent: 'center',
  },
  sectionHeaderText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  sectionHeaderIcon: {
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
