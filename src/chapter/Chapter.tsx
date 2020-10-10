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
          {this !== null &&
          this.state !== null &&
          this.state.greenMileage !== undefined
            ? JSON.stringify(this.state.greenMileage)
            : '======='}
        </Text>
        <View
          style={{
            backgroundColor: 'green',
            width: 400,
            height: 400,
            flexDirection: 'row',
          }}>
          <View style={{backgroundColor: 'orange', width: '10%', height: 400}}>
            <Text>1</Text>
          </View>
          <View
            style={{
              backgroundColor: 'red',
              alignSelf: 'stretch',
              alignItems: 'stretch',
              width: '90%',
              flexDirection: 'column',
            }}>
            <View
              style={{
                backgroundColor: 'green',
                height: '10%',
              }}>
              <Text>2</Text>
            </View>
            <View
              style={{
                backgroundColor: 'red',
                height: '90%',
                flexDirection: 'row-reverse',
                alignItems: 'stretch',
              }}>
              <View
                style={{
                  backgroundColor: 'purple',
                  width: '20%',
                }}>
                <Text>3</Text>
              </View>
              <View
                style={{
                  backgroundColor: 'yellow',
                  width: '80%',
                  flexDirection: 'column-reverse',
                  alignItems: 'stretch',
                }}>
                <View
                  style={{
                    backgroundColor: 'cyan',
                    height: '90%',
                  }}>
                  <Text>4</Text>
                </View>
                <View
                  style={{
                    backgroundColor: 'blue',
                    height: '10%',
                  }}>
                  <Text>5</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
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
