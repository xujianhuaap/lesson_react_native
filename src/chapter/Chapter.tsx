import {Image, Text, View} from 'react-native';
import React, {Component} from 'react';
import {useNavigation} from '@react-navigation/native';
import {navigateMain} from '../Navigator';
import Logo from '../res/drawable/icon_chapter.png';
import {URL_GREEN_MILEAGE} from '../res/url/Urls';
import {Resp} from './dto/Bean';
import {Net} from '../utils/net/Net';

interface ChapterViewProps {
  navigation: any;
}

interface ChapterViewState {
  greenMileage: Resp | undefined;
  count: number;
  timerHandle: undefined | NodeJS.Timeout;
}
class ChapterView extends Component<ChapterViewProps, ChapterViewState> {
  timerHandler = (..._: any[]) => {
    navigateMain(this.props.navigation, {info: 'i am from chapter'});
  };
  constructor(props: ChapterViewProps, context: any) {
    super(props, context);
  }

  componentDidMount(): void {
    this.setState({count: 0, timerHandle: undefined, greenMileage: undefined});
    Net.getData<any, Resp>(URL_GREEN_MILEAGE, {}, (resp: Resp) => {
      this.setState({greenMileage: resp});
    });
  }

  render() {
    return (
      <View>
        <Text
          onPress={() => {
            let navigation = this.props.navigation;
            navigation.setOptions({
              headerTitle: () => <TopBar title={'Learn Chapter leaving...'} />,
            });
            let handle = setTimeout(this.timerHandler, 300);
            this.setState({timerHandle: handle});
          }}>
          {this !== null && this.state !== null && this.state.greenMileage !== undefined
            ? JSON.stringify(this.state.greenMileage)
            : '======='}
        </Text>
      </View>
    );
  }

  componentWillUnmount(): void {
    if (this.state.timerHandle !== undefined) {
      clearTimeout(this.state.timerHandle);
    }
  }
}

interface TopBarProps {
  title: string;
}

class TopBar extends Component<TopBarProps> {
  render() {
    return (
      <View style={{flexDirection: 'row'}}>
        <View style={{width: 25, height: 25}}>
          <Image
            source={Logo}
            style={{width: 25, height: 25, tintColor: 'white'}}
          />
        </View>
        <View style={{height: 25, justifyContent: 'center'}}>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              marginLeft: 2,
            }}>
            {this.props.title}
          </Text>
        </View>
      </View>
    );
  }
}
export function ChapterScreen() {
  let navigation = useNavigation();
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => <TopBar title={'Learn Chapter'} />,
    });
  }, [navigation]);

  return <ChapterView navigation={navigation} />;
}
