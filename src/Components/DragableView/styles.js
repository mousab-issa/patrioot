import { StyleSheet, Dimensions } from 'react-native'

const Screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height
}

import { ANIMATED } from './constants'

export default StyleSheet.create({
  container: {
    position: 'absolute',

    left: 0,
    width: Screen.width,
    height: Math.abs(ANIMATED.HIDDEN),

    marginBottom: ANIMATED.HIDDEN - ANIMATED.VISIBLE,
    paddingBottom: Math.abs(ANIMATED.FULL_OPEN),

    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,

    backgroundColor: '#fff',
    overflow: 'hidden',

  },

  gestureArea: {
    width: Screen.width,
    height: 40,

    marginTop: -10,
    position: 'absolute',

    justifyContent: 'center',
    alignItems: 'center',
    
  },
  pullItem: {
    width: 40,
    height: 5,
    borderRadius: 20,
    backgroundColor: '#C5B7AF'
  },
  content: {
    marginVertical: 30,
    paddingHorizontal: 10,
    height: '100%',
  },
  
})