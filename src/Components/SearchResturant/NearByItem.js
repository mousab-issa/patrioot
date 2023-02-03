import React from 'react';
import {
  Dimensions,
  I18nManager,
  Image, StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { RFValue } from 'react-native-responsive-fontsize';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import Constants from '../../common/Constants';
import Styles from '../../Screens/Search/Styles';

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

const Screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

function useTraceUpdate(props) {
  const prev = React.useRef(props);
  React.useEffect(() => {
    const changedProps = Object.entries(props).reduce((ps, [k, v]) => {
      if (prev.current[k] !== v) {
        ps[k] = [prev.current[k], v];
      }
      return ps;
    }, {});
    if (Object.keys(changedProps).length > 0) {
    }
    prev.current = props;
  });
}

const NearByItem = ({ onResturantItemClicked, isLoaded, item }) => {
  useTraceUpdate({ onResturantItemClicked, isLoaded, item });

  return (
    <TouchableOpacity onPress={onResturantItemClicked}>
      <View key={item.id} style={Styles.resturantCard}>
        <ShimmerPlaceholder
          visible={isLoaded}
          shimmerColors={['#ebebeb', '#c5c5c5', '#ebebeb']}
          height={windowWidth * 0.25}
          isInteraction={false}
          width={windowWidth * 0.25}>
          <Image
            source={item.image}
            resizeMode="contain"
            style={Styles.mcdonald_img}
          />
        </ShimmerPlaceholder>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  nearByRestaurentSelected: {
    height: RFValue(29),
    borderRadius: 10,
    backgroundColor: '#55545A',
    flexDirection: 'row',
    marginHorizontal: Screen.width * 0.0235,
    marginTop: 2,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  nearByRestaurent: {
    height: RFValue(29),
    borderRadius: 10,
    backgroundColor: '#F6F6F6',
    flexDirection: 'row',
    marginHorizontal: Screen.width * 0.0235,
    marginTop: 2,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  iconsNearByCategories: {
    marginRight: 5,
  },
  foodType: {
    color: '#000',
    fontWeight: 'bold',
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabic
      : Constants.fontFamily,
    fontSize: Constants.ResponsiveSize.f12,
  },
  foodTypeSelected: {
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: I18nManager.isRTL
      ? Constants.fontFamilyArabic
      : Constants.fontFamily,
    fontSize: Constants.ResponsiveSize.f12,
  },
});

const areEqual = (prevProps, nextProps) => {
  const { selected } = nextProps;
  const { selected: prevIsSelected } = prevProps;
  const isSelectedEqual = selected === prevIsSelected;
  return isSelectedEqual;
};

export default React.memo(NearByItem);
