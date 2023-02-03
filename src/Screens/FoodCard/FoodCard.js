import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
} from 'react-native';
import { connect } from 'react-redux';
import Languages from '../../common/Languages';
import styles from './Styles';
import { foodCardAction } from '../../redux/foodCrad/foodCardAction';
import LongButton from '../../Components/LongButton/LongButton';
import _ from 'lodash';

const Incremennt = require('../../../assets/images/incremennt.png');
const Decrement = require('../../../assets/images/decrement.png');

import Constants from '../../common/Constants';
import { ClearCart, updateCurrentVendor } from '../../redux/cart/action';
import { Alert } from 'react-native';
import { ActivityIndicator } from 'react-native';
import Colors from '../../theme/colors';
import Styles from '../../Components/CustomizeCartModel/Styles';

const FoodCard = (props) => {
  const { searchFood, navigation, addData, currentVendor,
    updateCurrentVendor,
    clearCart,
  } = props;
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(searchFood.price);
  const [singlePrice, setSinglePrice] = useState(searchFood.price);
  const [isImageLoading, setImageLoading] = useState(false);
  const [isLoadError, setLoadError] = useState(false);
  const [topImage, setTopImage] = useState(searchFood.cover_pic);
  const [extraFood, setExtraFood] = useState(
    _.cloneDeep(searchFood.addons),
  );
  const [removeFood, setRemoveFood] = useState(
    _.cloneDeep(searchFood.removables),
  );
  const [extrPrice, setExtrPrice] = useState(0);
  const [details, setDetails] = useState('');
  



  useEffect(() => {  
    if (isLoadError) {
      
      setTopImage(Constants.PlaceholderImage)
    }

  }, [isLoadError])

  const IncrementItem = () => {
    const qty = quantity + 1;
    setQuantity(qty);
    setPrice(calculateTotals() * qty);
  };

  const DecreaseItem = () => {
    const qty = quantity - 1;
    if (qty >= 1) {
      setQuantity(qty);
      setPrice(calculateTotals() * qty);
    }
  };

  const onBackClicked = () => {
    navigation.goBack();
  };
  const createAlert = () =>
    Alert.alert(
      "Vendor change",
      "You can only order from one vendor at a time. if you want to still add this your previous clear will be clear.",
      [
        {
          text: "Cancel",
          onPress: () =>{} ,
          style: "cancel"
        },
        {
          text: "OK", onPress: () => {
            const branch_id = searchFood.branch_id;
            const vendor_id = searchFood.vendor_id;
            const distance = searchFood.distance;
            const currentVendorName = searchFood.restaurantName;

            const data = {
              branch_id,
              vendor_id,
              distance,
              currentVendorName
            }
            updateCurrentVendor(data);
            clearCart([]);
            addItemTocart();
            
          }
        }
      ]
    );

  const onAddClicked = () => {
    if (currentVendor == -1) {
      const branch_id = searchFood.branch_id;
      const vendor_id = searchFood.vendor_id;
      const distance = searchFood.distance;
      const currentVendorName = searchFood.restaurantName;
      const data = {
        branch_id,
        vendor_id,
        distance,
        currentVendorName,
      }
      updateCurrentVendor(data);
    }
    if (currentVendor != -1 && searchFood.vendor_id != currentVendor) {
      createAlert();
      return;
    }
    addItemTocart();
  };
  const addItemTocart = () => {
    const addon = [];
    extraFood?.forEach(element => {
      if (element.selected)
        addon.push(element.id);
    });
    const removable = [];
    removeFood?.forEach((value) => {
      if (value.selected) {
        removable.push(value.id)
      }
    });
    
    let obj = {
      id: searchFood.id,
      item: searchFood,
      price,
      quantity,
      singlePrice,
      extras_price: extrPrice,
      note: details,
      addon,
      removable,
    };
    
    addData(obj);
    navigation.goBack();
  }

  const onExtraItemClicked = (item, index) => {
    const tempExtraFood = [...extraFood];
    tempExtraFood[index].selected = !tempExtraFood[index].selected;
    setExtraFood(tempExtraFood);

    setPrice(calculateTotals() * quantity);
  };

  const onRemoveItemClicked = (item, index) => {
    
    const tempRemoveFood = [...removeFood];
    tempRemoveFood[index].selected = !tempRemoveFood[index].selected;
    setRemoveFood(tempRemoveFood);
    
  };

  const calculateTotals = () => {
    let extrPrice = 0;
    extraFood.map((extra, index) => {
      if (extra.selected) {
        extrPrice = extrPrice + extra.price;
      }
    });
    setExtrPrice(extrPrice);
    return singlePrice + extrPrice;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />
        <View style={styles.imageCardContainer2}>
          <ImageBackground
            source={{ uri: topImage }}
            imageStyle={{
              borderBottomLeftRadius: 5,
              borderBottomRightRadius: 5,
            }}
            onLoadEnd={() => setImageLoading(false)}
            onLoadStart={() => {
              setImageLoading(true);
              setLoadError(false);
            }}
            onError={(e) => {
              setImageLoading(false);
              setLoadError(true);
            }}
            style={styles.cardImage2}>
            <TouchableOpacity
              style={styles.backIconBackground}
              onPress={onBackClicked}>
              <Image
                source={Languages.BackWhiteArrow}
                style={styles.backIcon}
              />
            </TouchableOpacity>
            {isImageLoading && <ActivityIndicator size='large' color={Colors.ButtonColor} style={{ flex: 1 }} />
            }
            {/* {isLoadError &&
              <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text style={[Styles.regularText, { textAlign: 'center' }]}>{"404 image Error"}</Text>
              </View>} */}
          </ImageBackground>
        </View>
        <View style={styles.middleContainer}>
          <Text style={styles.boldText}>{searchFood.name}</Text>
          <Text style={styles.regularText}>{searchFood.description}</Text>
        </View>
        {(extraFood || removeFood) &&
          <View style={styles.extrasContainer}>
            <ScrollView style={{ marginLeft: 5 }} nestedScrollEnabled={true}>
              {extraFood && <View style={styles.extraText}>
                <Text style={styles.optionsTitle}>{Languages.Extras}</Text>
              </View>}
              {extraFood &&
                extraFood.map((extra, index) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      style={styles.checkboxContainer}
                      onPress={() => onExtraItemClicked(extra, index)}>
                      {!extra.selected && (
                        <Image
                          source={require('../../../assets/images/checkbox.png')}
                          style={styles.checkboxIcon}
                        />
                      )}
                      {extra.selected && (
                        <Image
                          source={require('../../../assets/images/checkbox_checked.png')}
                          style={styles.checkboxIcon}
                        />
                      )}

                      <View
                        style={{
                          justifyContent: 'space-between',
                          flexDirection: 'row',
                          flex: 1,
                          paddingRight: 8,
                        }}>
                        <Text style={styles.checkboxText}>{extra.name}</Text>
                        <Text
                          style={{
                            color: '#868585',
                            textAlign: 'right',
                            justifyContent: 'flex-end',
                            fontSize: Constants.ResponsiveSize.f18,
                          }}>
                          {extra.price}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  );
                })}

              {removeFood && <View style={styles.RemoveText}>
                <Text style={styles.optionsTitle}>{Languages.RemoveItems}</Text>
              </View>}
              {removeFood &&
                removeFood.map((extra, index) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      style={styles.checkboxContainer}
                      onPress={() => onRemoveItemClicked(extra, index)}>
                      {!extra.selected && (
                        <Image
                          source={require('../../../assets/images/checkbox.png')}
                          style={styles.checkboxIcon}
                        />
                      )}
                      {extra.selected && (
                        <Image
                          source={require('../../../assets/images/checkbox_checked.png')}
                          style={styles.checkboxIcon}
                        />
                      )}

                      <View
                        style={{
                          justifyContent: 'space-between',
                          flexDirection: 'row',
                          flex: 1,
                          paddingRight: 8,
                        }}>
                        <Text style={styles.checkboxText}>{extra.name}</Text>
                      </View>
                    </TouchableOpacity>
                  );
                })}
            </ScrollView>
          </View>}
        {(!removeFood && !extraFood) &&
          <View style={styles.extrasTransparentContainer} />
        }
        {/* </View> */}

        <View style={styles.bottomContainer}>
          <View style={styles.bottomContainerInner}>
            <TouchableOpacity onPress={DecreaseItem}>
              <Image source={Decrement} style={styles.addIcon} />
            </TouchableOpacity>
            <Text style={styles.quantityText}>{quantity}</Text>
            <TouchableOpacity onPress={IncrementItem}>
              <Image source={Incremennt} style={styles.addIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.bottomContainerInner2}>
            <Text style={styles.boldText2}>
              {price} {Languages.SR}
            </Text>
          </View>
        </View>
        <View style={styles.buttonOuter}>
          <LongButton onButtonClick={onAddClicked} buttonText={Languages.ADD} />
        </View>
      </View>
    </SafeAreaView>
  );
};
const mapStateToProps = ({ foodCard, search_resturent, cart }) => {
  return {
    searchFood: foodCard.sourceData,
    currentVendor: cart.currentVendor,
    resturentRecord: search_resturent.resturent_data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addData: (obj) => {
      dispatch(foodCardAction(obj));
    },
    deleteData: (id) => {
      dispatch(deleteData(id));
    },
    updateData: (obj) => {
      dispatch(editData(obj));
    },
    updateCurrentVendor: (id) => {
      dispatch(updateCurrentVendor(id))
    },
    clearCart: () => {
      dispatch(ClearCart([]))
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(FoodCard);
