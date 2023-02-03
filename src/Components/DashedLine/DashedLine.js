import React from 'react';
import { Platform, Text, View } from 'react-native';
import Dash from 'react-native-dash';
import Colors from '../../theme/colors';

const CONTAINER = {
  flexDirection: 'row',
  justifyContent: 'center',
  overflow: 'hidden',
  width: '100%',
};

const CONTAINER_OUTER = {
  justifyContent: 'center',
  width: '100%',
  height: 10,
};

const DASHED = {
  color: Colors.DashedColor,
  letterSpacing: -3.87,
  lineHeight: 12,
  fontSize: 18,
};


const HR_LINE = {
  borderBottomWidth: 0.5,
  borderBottomRadius: 1,
  borderBottomWidth: 1,
  borderBottomColor: Colors.SecondaryText,
  borderBottomStyle: 'dotted',
};

const Divider = (props) => {
  return (
    <View style={CONTAINER_OUTER}>
      {(Platform.OS == 'ios') &&
        <View style={CONTAINER}>

          {[...Array(60)].map((_, ind) => {
            return (
              <Text key={ind} style={DASHED}>
                {' '}
          --{' '}
              </Text>
            );
          })}
        </View>
      }
      {(Platform.OS != 'ios') &&
        <View style={CONTAINER_OUTER}>
          <Dash style={{ width: '100%', height: 1, }} dashColor={'#ACACAC'} />
        </View>

      }
    </View>
  );
};
export default Divider;