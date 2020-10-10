import {NativeModules} from 'react-native';
interface ImagePick {
  pickImage(): Promise<string>;
}
export default NativeModules.ImagePickModule as ImagePick;
