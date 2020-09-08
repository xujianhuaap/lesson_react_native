import {Image, Text, View} from 'react-native';
import React, {Component} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {navigateMain} from '../Navigator';
import Logo from '../res/drawable/icon_chapter.png';

interface ChapterViewProps {
  navigation: any;
}

interface ChapterViewState {
  count: number;
}
class ChapterView extends Component<ChapterViewProps, ChapterViewState> {
  constructor(props: ChapterViewProps, context: any) {
    super(props, context);
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
            navigateMain(this.props.navigation, {info: 'i am from chapter'});
          }}>
          i am chapter
        </Text>
      </View>
    );
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
  let params = useRoute().params;
  console.log(params);
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => <TopBar title={'Learn Chapter'} />,
    });
  }, [navigation]);

  return <ChapterView navigation={navigation} />;
}
