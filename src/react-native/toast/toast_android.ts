import {NativeModules} from 'react-native';
interface Toast {
  show(message: string, duration: number): void;
}
export default NativeModules.ToastModule as Toast;
