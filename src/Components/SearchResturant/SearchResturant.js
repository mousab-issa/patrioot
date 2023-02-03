import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  I18nManager, Image,
  Text, View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import Icon from 'react-native-vector-icons/FontAwesome';
import Languages from '../../common/Languages';
import Colors from '../../theme/colors';
import Styles from './Styles';

const {width: windowWidth, height: windowHeight} = Dimensions.get('screen');

function SearchResturent({image, title}) {
  const [isLoaded, setisLoaded] = useState(false);
  const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

  useEffect(() => {
    const timeoutHandle = setTimeout(() => {
      clearTimeout(timeoutHandle);
      setisLoaded(true);
    }, 500);
  }, []);

  return (
    <View style={Styles.notificationCard}>
      <ShimmerPlaceholder
        visible={isLoaded}
        shimmerColors={['#ebebeb', '#c5c5c5', '#ebebeb']}
        height={windowWidth * 0.3}
        isInteraction={false}
        width={windowWidth - 10}>
        <View style={{flex: 1, width: windowWidth}}>
          <View style={Styles.innerview}>
            <View style={[Styles.restaurantImageOuter, {flex: 2}]}>
              <View
                style={{
                  borderRightColor: '#AFAFAF',
                  borderRightWidth: 0.4,
                  paddingRight: 10,
                }}>
                <Image
                  source={image}
                  resizeMode="contain"
                  style={Styles.restaurantImage}
                />
              </View>
            </View>
            <View style={{flex: 8}}>
              <View style={Styles.contentMargin}>
                <View style={Styles.KFC_view}>
                  <View style={[Styles.restaurantNameStyle, {flex: 2}]}>
                    <Text style={Styles.titleStyle}>{title}</Text>
                  </View>
                  <View style={[Styles.orderNowOuterStyle, {flex: 1}]}>
                    <View style={Styles.open_close_text}>
                      <Text style={Styles.opentextStyle}>{Languages.open}</Text>
                    </View>
                  </View>
                </View>
                <View style={Styles.row_width_height}>
                  <Text style={Styles.detailStyle}>
                    Fast food, Fried chicken{' '}
                  </Text>
                </View>
                <View style={[Styles.row_width_height, {marginTop: 5}]}>
                  <View style={Styles.pin_green}>
                    <Text>
                      <Text style={Styles.detailsStyleBold}>{'34'} </Text>
                      <Text style={Styles.detailsStyle}>{Languages.KM}</Text>
                      <Text style={{color: Colors.SecondaryText}}> | </Text>
                      <Text style={Styles.detailsStyleBold}>{'9:00'}</Text>
                      <Text style={Styles.detailsStyle}>
                        {' '}
                        {Languages.AM} {Languages.TO}{' '}
                      </Text>
                      <Text style={Styles.detailsStyleBold}>{'11:00'}</Text>
                      <Text style={Styles.detailsStyle}> {Languages.PM}</Text>
                      <Text style={{color: Colors.SecondaryText}}> | </Text>
                      <Text style={Styles.detailsStyle}>Delivery</Text>
                      <Text style={Styles.detailsStyleBold}>
                        {' '}
                        {'12'} {Languages.SR}
                      </Text>
                    </Text>
                  </View>
                </View>
                <View style={[Styles.row_width_height, {marginTop: 5}]}>
                  <View style={Styles.pin_green}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      {I18nManager.isRTL ? (
                        <Icon
                          name={'backward'}
                          size={8}
                          color={Colors.SecondaryText}
                        />
                      ) : (
                        <Icon
                          name={'forward'}
                          size={8}
                          color={Colors.SecondaryText}
                        />
                      )}
                      <Text style={Styles.fastDeliveryStyle}>
                        {' '}
                        Fast Delivery{' '}
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
  );
}
export default SearchResturent;
