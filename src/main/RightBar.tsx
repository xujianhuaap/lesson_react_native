import React, {Component} from 'react';
import {
  SectionList,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Animated,
  SectionListData,
} from 'react-native';

import DATA from '../json/RightBar.json';
import SectionICon from '../res/drawable/icon_arrow_down.png';

const DATA1: Array<Section<Chapter>> = JSON.parse(JSON.stringify(DATA));

class Section<D> {
  title: string;
  index: number;
  show: boolean;
  data: Array<D>;

  constructor(title: string, index: number, show: boolean, data: Array<D>) {
    this.title = title;
    this.index = index;
    this.show = show;
    this.data = data;
  }
}

class Chapter {
  title: string;
  constructor(title: string) {
    this.title = title;
  }
}

interface ItemViewProps {
  index: number;
  title: string;
}
class ItemView extends Component<ItemViewProps> {
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

interface SectionHeaderIconProps {
  isShow: boolean;
}

class SectionHeaderIcon extends Component<SectionHeaderIconProps> {
  constructor(props: SectionHeaderIconProps, context: any) {
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

interface SectionHeaderProps {
  section: Section<Chapter>;
  handleSectionHeader: (section: Section<Chapter>) => void;
}

interface SectionHeaderState {
  isShow: boolean;
}
class SectionHeader extends Component<SectionHeaderProps, SectionHeaderState> {
  constructor(props: SectionHeaderProps, context: any) {
    super(props, context);
    this.state = {
      isShow: true,
    };
  }

  press = () => {
    const section = this.props.section;
    this.props.handleSectionHeader(section);
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

interface RightBarProps {}

interface RightBarState {
  data: Array<Section<Chapter>>;
}
class RightBar extends Component<RightBarProps, RightBarState> {
  constructor(props: RightBarProps, context: any) {
    super(props, context);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    let dataCopy = Array<Section<Chapter>>();
    Object.assign(dataCopy, DATA);
    this.setState({
      data: dataCopy,
    });
  }

  handleSectionHeader = (section: Section<Chapter>) => {
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
          keyExtractor={(item, index) => item.title + index}
          renderItem={({item, index}) => (
            <ItemView title={item.title} index={index} />
          )}
          renderSectionHeader={(info: {section: SectionListData<Chapter>}) => (
            <SectionHeader
              section={info.section as Section<Chapter>}
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
