import { useTheme } from '@react-navigation/native';
import React from 'react';
import {
  Animated,
  FlatList,
  I18nManager,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';
import Theme from '../../common/Theme';
import PromoListingCard from '../../Components/Main/PromoListingCard';
import PropertyCard from '../../Components/Main/PropertyCard';
import { GetPromoData } from '../../redux/promo/action';
import moment from "moment";
import Colors from '../../theme/colors';

const defaultFadeColors = [
  'rgba(255, 255, 255, 0.0)',
  'rgba(255, 255, 255, 0.7)',
  'rgba(255, 255, 255, 1)',
];
const arryMap = [1];

class PromosScreen extends React.Component {
  state = {
    isFade: false,
    keyword: '',
    isRefreshing: false,
  };

  offsetY = 0;
  scrollY = new Animated.Value(0);

  getStartFade() {
    const shadowPosY = this.scrollY.interpolate({
      inputRange: [0, 80],
      outputRange: [-40, 0],
      extrapolate: 'clamp',
    });
    return (
      <Animated.View
        style={{
          position: 'absolute',
          top: shadowPosY,
          width: '100%',
          height: 40,
        }}>
        <LinearGradient
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }}
          style={{ width: '100%', height: 40 }}
          colors={defaultFadeColors}
          pointerEvents={'none'}
        />
      </Animated.View>
    );
  }

  onChangeKeyword(text) {
    this.setState({ keyword: text });
  }
  onRefresh = () => {
  
    this.setState({ isRefreshing: true });
    setTimeout(() => {
      this.setState({ isRefreshing: false });
    }, 2000);
  }
  onViewClicked = (promoItem) => {

    const vendotData = promoItem.promoData.vendor_data
    const item = {
      vendor_id: vendotData.owner_id,
      cover_pic: vendotData.cover_pic,
      thumbnail: vendotData.thumbnail,
      branch_id: vendotData.branch_id,
      distance: vendotData.distance,
      delivery_charges: vendotData.delivery_charges,
      tags: vendotData.tags,
      name: vendotData.name,
      type: vendotData.type,
    }
 
    this.props.navigation.navigate('SearchResturant', { item });
  };
  
  getRemainingTime = (endTime) => {
    var date1 = new Date(); // current date
    var date2 = new Date(endTime); // mm/dd/yyyy format
    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const remainingTime = timeDiff / 1000

    return remainingTime;
  }

  headerLayout() {
    const { config } = this.props;

    return (
      <View>
        <View style={{ paddingTop: 10 }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              textAlign: I18nManager.isRTL ? 'right' : 'left',
            }}>
            Favorites
          </Text>
        </View>
        <View
          style={
            I18nManager.isRTL
              ? styles.searchContainer_rtl
              : styles.searchContainer
          }>
          <View style={{ flex: 1, paddingHorizontal: 3 }}>
            <PropertyCard img={Theme.sample5} title={'Fried Chiken'} />
          </View>
          <View style={{ flex: 1, paddingHorizontal: 3 }}>
            <PropertyCard img={Theme.sample6} title={'Cool'} />
          </View>
          <View style={{ flex: 1, paddingHorizontal: 3 }}>
            <PropertyCard img={Theme.sample7} title={'Pizza'} />
          </View>
        </View>
      </View>
    );
  }

  render() {
    const { config,
      promos,
      promoPaging,
      offset,
      token } = this.props;
    var PromosData = [];
    for (promo in promos) {
      const promodata = {
        promoData: promos[promo],
        endingTime: this.getRemainingTime(promos[promo].end_date)
      }
      PromosData.push(promodata)
    }

    return (
      <Animated.View style={[styles.container]}>
        <View style={{ flex: 1, marginBottom: 10 }}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            onEndReachedThreshold={0.5}
            onEndReached={({ distanceFromEnd }) => {
             
            }}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { y: this.scrollY } } }],
              {
                useNativeDriver: false,
                listener: (e) => {
                  this.offsetY = e.nativeEvent.contentOffset.y;
                  if (this.offsetY <= 2) this.setState({ isFade: false });
                  else this.setState({ isFade: true });
                 
                  if (offset > 0 && this.offsetY > ((e.nativeEvent.contentSize.height - (e.nativeEvent.layoutMeasurement.height + 50))))
                    promoPaging(GetPromoData(token, offset))

                },
              },
            )}>
            <FlatList
              data={PromosData}
              onRefresh={() => this.onRefresh()}
              refreshing={this.state.isRefreshing}
              keyExtractor={(item, index) => index.toString()}
              onEndReached={() => {
                

              }}
              onEndReachedThreshold={0.5}
              renderItem={({ item, i }) => (
                <View key={i}>
                  <PromoListingCard
                    onPress={() => this.onViewClicked(item)}
                    img={item.promoData.cover_pic}
                    title={item.promoData.en_title}
                    content={item.body}
                    hasText={true}
                    item={item}
                  /></View>
              )}
            />

          </ScrollView>

          {this.state.isFade && this.getStartFade()}
        </View>
      </Animated.View>
    );
  }
}

export default function (props) {
  const { colors } = useTheme();
  const config = useSelector((state) => state.config);
  const promos = useSelector((state) => state.promo.promo_data);
  const offset = useSelector((state) => state.promo.offset);
  const token = useSelector((state) => state.User.token);
  const promoPaging = useDispatch();
  return (
    <PromosScreen {...props} colors={colors} config={config} promos={promos} token={token} offset={offset} promoPaging={promoPaging} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WhiteColor,
  },
  inputWrapper: {
    flex: 1,
    backgroundColor: Theme.white,
    width: '100%',
    borderRadius: 50,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    borderColor: 'grey',
    borderWidth: 0.5,
    height: 40,
  },
  searchInput: {
    height: 40,
    width: '100%',
    paddingLeft: 10,
    fontSize: 15,
    paddingHorizontal: 4,
  },
  searchMan: {
    marginLeft: 20,
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: Theme.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchContainer: {
    paddingHorizontal: 0,
    marginTop: 5,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchContainer_rtl: {
    paddingHorizontal: 0,
    marginTop: 5,
    marginBottom: 10,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
