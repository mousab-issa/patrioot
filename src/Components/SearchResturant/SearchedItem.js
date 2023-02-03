import React from 'react';
import {
  Dimensions,
  I18nManager,
  Image,
  StyleSheet,
  ScrollView,
  Text, TouchableOpacity, TouchableHighlight,
  View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { RFValue } from 'react-native-responsive-fontsize';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import { SvgUri } from 'react-native-svg';
import Constants from '../../common/Constants';
import Languages from '../../common/Languages';
import Colors from '../../theme/colors';
import Styles from './Styles';
import { ScrollView as GestureHandlerScrollView } from 'react-native-gesture-handler'

const Screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};
const { width: windowWidth, height: windowHeight } = Dimensions.get('screen');
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
const get12hourTime = (time24) => {
  if (time24 == null)
    return null;
  var ts = time24;
  var H = +ts.substr(0, 2);
  var h = (H % 12) || 12;
  h = (h < 10) ? ("0" + h) : h;
  ts = h + ts.substr(2, 3);
  return ts;
};
const getAmPm = (time24) => {
  if (time24 == null)
    return null;
  var ts = time24;
  var H = +ts.substr(0, 2);
  var ampm = H < 12 ? Languages.AM : Languages.PM;
  return ampm;
};
const SearchedItem = ({
  onSearchItemClicked,
  onOrderNowClicked,
  index,
  item,
  isLoaded,
}) => {
  const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);
  useTraceUpdate({
    onSearchItemClicked,
    onOrderNowClicked,
    item,
    isLoaded,
    index
  });

  async function exists(url) {
    const result = await fetch(url, { method: 'HEAD' });
    return result.ok;
  }

  const getTagList = (tags) => {
    if (tags == undefined)
      return "";
    var tagsList;
    if (tags.length > 1) {
      tagsList = tags[0].name + ", " + tags[1].name;
    }
    else if (tags.length == 1)
      tagsList = tags[0].name;
    else
      tagsList = "";
    return tagsList;
  }
  return (
    <TouchableHighlight onPress={() => onSearchItemClicked(item)} underlayColor="none">
      <View key={index}>
        <View style={Styles.notificationCard}>
          <ShimmerPlaceholder
            visible={isLoaded}
            shimmerColors={['#ebebeb', '#c5c5c5', '#ebebeb']}
            height={windowWidth * 0.3}
            isInteraction={false}
            width={windowWidth - 10}>
            <View style={{ flex: 1, width: windowWidth }}>
              <View style={Styles.innerview}>
                <View style={[Styles.restaurantImageOuter]}>
                  <View style={Styles.vendrorImageOuter}>
                    <View style={Styles.vendorImageInner}>
                      <Image
                        source={{ uri: item.thumbnail }}
                        resizeMode="contain"
                        style={Styles.restaurantImage}
                      />
                    </View>
                  </View>
                </View>
                <View style={{ flex: 8 }}>

                  <View style={Styles.contentMargin}>
                    <View style={Styles.KFC_view}>
                      <View style={[Styles.restaurantNameStyle, { flex: 2 }]}>
                        <Text numberOfLines={1} style={Styles.titleStyle}>{item.name}</Text>
                      </View>
                      <View style={[Styles.orderNowOuterStyle, { flex: 1 }]}>

                        <View style={item.closed ? Styles.colose_text_background : Styles.open_close_text}>
                          <Text style={item.closed ? Styles.closedtextStyle : Styles.opentextStyle}>
                            {item.closed ? Languages.Close : Languages.Open}
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View style={Styles.row_width_height}>
                      <Text style={Styles.detailStyle}>
                        {getTagList(item.tags)}
                      </Text>
                    </View>
                    <View style={[Styles.row_width_height, { marginTop: 12 }]}>
                      {(item.from_hours != null && item.to_hours != null) && <View style={Styles.pin_green}>
                        <Text>
                          <Text style={Styles.detailsStyleBold}>{item.distance}</Text>
                          <Text style={Styles.detailsStyle}>
                            {Languages.KM}
                          </Text>
                          <Text style={{ color: Colors.SecondaryText }}> {'|'} </Text>
                          <Text style={Styles.detailsStyleBold}>{get12hourTime(item.from_hours)}</Text>
                          <Text style={Styles.detailsStyle}>
                            {' '}
                            {getAmPm(item.from_hours)} {Languages.TO}{' '}
                          </Text>
                          <Text style={Styles.detailsStyleBold}>{get12hourTime(item.to_hours)}</Text>
                          <Text style={Styles.detailsStyle}>
                            {' '}
                            {getAmPm(item.to_hours)}
                          </Text>
                          <Text style={{ color: Colors.SecondaryText }}> {'|'} </Text>
                          <Text style={Styles.detailsStyle}>{Languages.Delivery}</Text>
                          <Text style={Styles.detailsStyleBold}>
                            {' '}
                            {item.delivery_charges} {Languages.SR}
                          </Text>
                        </Text>
                      </View>}
                      {(item.from_hours == null || item.to_hours == null) &&
                        <View style={Styles.pin_green}>
                          <Text>
                            <Text style={Styles.detailsStyleBold}>{item.distance}</Text>
                            <Text style={Styles.detailsStyle}>
                              {Languages.KM}
                            </Text>
                            <Text style={{ color: Colors.SecondaryText }}> {'|'} </Text>
                            <Text style={Styles.detailsStyle}>{Languages.Delivery}</Text>
                            <Text style={Styles.detailsStyleBold}>
                              {' '}
                              {item.delivery_charges} {Languages.SR}
                            </Text>
                          </Text>
                        </View>}
                    </View>
                    <View style={[Styles.row_width_height, { marginTop: 3 }]}>
                      <View style={Styles.pin_green}>
                        <View
                          style={{ flexDirection: 'row', alignItems: 'center' }}>
                          {I18nManager.isRTL ? (
                            <SvgUri
                              width="10"
                              height="10"
                              fill="#B4B4B4"
                              uri={item.tagline?.image}
                            />
                          ) :
                            (
                              <SvgUri
                                width="10"
                                height="10"
                                fill="#B4B4B4"
                                uri={item.tagline?.image}
                              />
                            )

                          }
                          <Text style={Styles.fastDeliveryStyle}>
                            {' '}
                            {item.tagline?.text}{' '}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </ShimmerPlaceholder>
        </View>
      </View>
    </TouchableHighlight>
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


export default React.memo(SearchedItem);
