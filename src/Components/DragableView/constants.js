import { Dimensions } from 'react-native';

const Screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

export const ANIMATED = {
  HIDDEN: -(Screen.height - 60),
  FULL_OPEN: -100,
  VISIBLE: -(Screen.height - 100),
};
