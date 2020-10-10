import {NativeModules} from 'react-native';
interface ImagePick {
  pickImage(): Promise<String>;
}
export default NativeModules.ImagePickModule as ImagePick;
