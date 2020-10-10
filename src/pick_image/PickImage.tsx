import {Image, Text, View} from 'react-native';
import React from 'react';
import ImagePick from '../react-native/pick_image/pick_image_android';

export function PickImageScreen() {
  return <PickImageView />;
}

interface PickImageViewState {
  uri: string;
}


class PickImageView extends React.Component<any, PickImageViewState> {
  constructor(props: Readonly<any>) {
    super(props);
    this.state = {
      uri:
        'https://www.csair.com/cn/cmsad/resource/d18856137cf82102f26f32f70edf1eb1.jpg',
    };
  }

  componentDidMount(): void {
    this.setState({
      uri:
        'https://www.csair.com/cn/cmsad/resource/d18856137cf82102f26f32f70edf1eb1.jpg',
    });
  }

  render() {
    return (
      <View>
        <Text
          onPress={() => {
            ImagePick.pickImage().then((value: string) => {
              this.setState({uri: value})
            });
          }}>
          Pick ...
        </Text>
        <Image
          source={{uri: this.state.uri}}
          style={{width: 400, height: 400}}
        />
      </View>
    );
  }
}
