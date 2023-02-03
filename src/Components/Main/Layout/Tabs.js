import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, Dimensions, I18nManager, Platform } from 'react-native';
import Colors from '../../../theme/colors';
import Constants from '../../../common/Constants';
//components
import Tab from './Tab';
import Indicator from './Indicator';

const { width } = Dimensions.get('screen');
const IsIosRTL = I18nManager.isRTL && Platform.OS === 'ios';

const Tabs = ({ data, scrollX, onItemPress, pageNumber }) => {
  const [measures, setMeasures] = useState([]);
  const containerRef = useRef();

  useEffect(() => {
    const m = [];
    data.forEach((item) => {
      item.ref.current.measureLayout(
        containerRef.current,
        (x, y, width, height) => {
          m.push({
            x,
            y,
            width,
            height,
          });
          if (m.length === data.length) {
            setMeasures(m);
          }
        },
      );
    });
  }, []);

  const [widths, setWidths] = useState([]);
  const [scales, setScales] = useState([]);
  //Padding
  const paddingHoz = 15;

  useEffect(() => {
    const widthsArray = measures.map(
      (measure) => measure.width + paddingHoz * 2,
    );
    setWidths(widthsArray);

    const scalesFinder = widths.map((CurrentWidth, i) => {
      if (i === 0) {
        return CurrentWidth / CurrentWidth;
      } else if (i === 1) {
        return CurrentWidth / widthsArray[0];
      } else if (i === 2) {
        return CurrentWidth / widthsArray[1];
      }
    });
    setScales(scalesFinder);
  }, []);

  //temp
  return (
    <View style={styles.tabsContainer}>
      <View
        ref={containerRef}
        style={[
          styles.tabsWrapper,
          { flexDirection: !I18nManager.isRTL ? 'row' : 'row-reverse' },
        ]}>
        {data.map((item, index) => {
          let Usedindex;
          if (IsIosRTL && index === 2) {
            Usedindex = 0;
          } else if (IsIosRTL && index === 0) {
            Usedindex = 2;
          }
          else {
            Usedindex = index;
          }
          return (
            <Tab
              key={item.key}
              item={item}
              ref={item.ref}
              onItemPress={() => onItemPress(Usedindex)}
              selected={pageNumber === index}
              data={data}
            />
          );
        })}
        {measures.length > 0 && (
          <Indicator measures={measures} scrollX={scrollX} data={data} />
        )}
      </View>
    </View>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  tabsContainer: {
    marginTop: Constants.ResponsiveSize.f47,
    width,
    paddingHorizontal: 30,
    paddingBottom: 20,
    backgroundColor: Colors.GreenColor,
    // borderBottomWidth: 0.5,
  },
  tabsWrapper: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
