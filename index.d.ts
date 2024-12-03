declare module '*.png' {
  const value: import('react-native').ImageSourcePropType;
  export default value;
}

declare module 'react-native-keyboard-aware-scroll-view' {
  import {Component} from 'react';
  import {ScrollViewProps} from 'react-native';

  export class KeyboardAwareScrollView extends Component<ScrollViewProps> {}
}
