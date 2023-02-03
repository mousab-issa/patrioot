
import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  ScrollView,
  TouchableHighlight,
  I18nManager,
  Dimensions,
  FlatList,
} from 'react-native';
import { CommonActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Languages from '../../common/Languages';
import { connect } from 'react-redux';
import styles from './Styles';
import Toast from 'react-native-simple-toast';
import CustomIcon from '../../common/CustomIcon';
import DashedLine from '../../Components/DashedLine/DashedLine';
import Constants from '../../common/Constants';
import {
  deleteCart,
  DecrementAction,
  IncremenntAction,
  EditAction,
  updateCurrentVendor,
  CallCheckOutApi,
  setLoading,
  updateApiCallStatus,
} from '../../redux/cart/action';
import { addNotificationAction } from '../../redux/notification/action';
import Colors from '../../theme/colors';

import CustomizeCartModel from '../../Components/CustomizeCartModel/CustomizeCartModel';
import { ActivityIndicator } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import { Keyboard } from 'react-native';
import Modal from 'react-native-modal';


const CartScreen = (props) => {
  const {
    editDetails,
    addNotificationData,
    selectedLanguage,
    selectedCartData,
    totalPrice,
    deleteData,
    checkOutOrder,
    currentVendor,
    branchId,
    increment,
    authToken,
    setLoading,
    serviceTax,
    decrement,
    itemQuantity,
    isError,
    apiSuccess,
    isLoading,
    itemPrice,
    errorMessage,
    updateSuccessStatus,
    distance
  } = props;

  const [data, setData] = useState(selectedCartData);
  const [modelVisible, setmodelVisible] = useState(false);
  const [itemChecked, setItemChecked] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [currentDetails, setCurrentDetails] = useState(null);
  const [serviceAndTax, setServiceAndTax] = useState(serviceTax);
  const [deliveryCharges, setDeliveryCharges] = useState(12);
  const [vendorName, setVendorName] = useState('');
  const [grandTotal, setGrandTotal] = useState(0);
  const [keyBoardCurrentHeight, setKeyBoardHeight] = useState(0);

  const [isKeyboardVisible, setKeyboardVisible] = useState(false);


  useEffect(() => {
    const VendorItem = props.route.params.currentItem;
    setDeliveryCharges(((VendorItem.delivery_charges == null || VendorItem.delivery_charges == undefined) ? 0 : VendorItem.delivery_charges));
    setVendorName(VendorItem.name);
    setGrandTotal((totalPrice + serviceAndTax +
      ((VendorItem.delivery_charges == null || VendorItem.delivery_charges == undefined) ? 0 : VendorItem.delivery_charges)).toFixed(2));
    if (isError && errorMessage.length > 0) {
      Toast.showWithGravity(
        errorMessage,
        Toast.SHORT,
        Toast.CENTER,
      );
    }
    setData(selectedCartData);
    if (apiSuccess && !isError) {

      const timeoutHandle = setTimeout(() => {
        clearTimeout(timeoutHandle);
        updateSuccessStatus(false);
        const resetAction = CommonActions.reset({
          index: 0,
          routes: [
            {
              name: 'HomeScreen',
            },
          ],
        });
        props.navigation.dispatch(resetAction);
      }, 500);
    }
  }, [totalPrice, isError, isLoading, apiSuccess, selectedCartData]);


  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      (e) => {
        setKeyBoardHeight(e.endCoordinates.height);
        setKeyboardVisible(true); // or some other action
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); // or some other action
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, [])

  const IncrementItem = (id) => {
    increment(id);
  };
  const DecreementItem = (id) => {
    decrement(id);
  };
  const onBackClicked = () => {
    props.navigation.goBack();
  };

  const onEditClicked = (index, details) => {
    setCurrentIndex(index);
    setCurrentDetails(details);
    setmodelVisible(true);
  };

  const onNextClicked = () => {
    if (data == null || data.length == 0) {
      Toast.showWithGravity(
        Languages.CartEmpty,
        Toast.SHORT,
        Toast.CENTER,
      );
      return;
    }
    if (isLoading)
      return;
    setLoading(true);
    const currentDatadata = {
      payment_method: 'cash',
      orderItems: JSON.stringify(data),
      delivery_mode: 'my_place', // 'COD',
      vendor_id: currentVendor,
      location_name: 'Riyadh',
      branch_id: branchId,
      lang: selectedLanguage,
      service_charges: serviceAndTax,
      delivery_charges: deliveryCharges,
      distance,

    }
    checkOutOrder(currentDatadata, authToken);
  };

  function newRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const onModalClose = () => {
    setmodelVisible(false);
  };

  const handleDelete = (id) => {
    return deleteData(id);
  };

  const onEditDetails = (id, details) => {
    editDetails(id, details);
  };

  return (
    <SafeAreaView style={styles.container}>
      
      <Modal
        isVisible={modelVisible}
        backdropOpacity={0.9}
        backdropColor="rgba(0,0,0,0.5)"
        animationInTiming={1}
        animationOutTiming={1}
        coverScreen={false}
        deviceWidth={Dimensions.get('screen').width}
        deviceHeight={Dimensions.get('screen').height}
        style={styles.modalContent}
      >
        <CustomizeCartModel
          onModalClose={onModalClose}
          index={currentIndex}
          note={currentDetails}
          onEditDetails={onEditDetails}
          data={data}
          setData={setData}
          bottomSpace={keyBoardCurrentHeight}
          keyboardVisible={isKeyboardVisible}
        />
      </Modal> 
      <View style={styles.headerContainer}>
        <TouchableHighlight
          style={styles.backIconBackground}
          onPress={onBackClicked}
          underlayColor="none">
          <CustomIcon
            name={I18nManager.isRTL ? 'FatBlackArrowRTL' : 'FatBlackArrow'}
            type={'SVG'}
            iconStyle={{
              fontSize: Constants.ResponsiveSize.f12,
              color: '#000000',
              ...props.iconStyle,
            }}
          />
        </TouchableHighlight>

        <Text style={styles.kfcText}>{vendorName}</Text>
      </View>
      <ScrollView style={styles.content}>
        {data.length > 0 && (
          <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => {
              if (itemPrice(index) !== 0) {
                return (
                  <View style={styles.foodCardContainer}>
                    <View style={styles.foodCardLeftContainer}>
                      <Image
                        source={{ uri: item.item.cover_pic }}
                        style={styles.foodCardImage}
                      />
                    </View>
                    <View style={styles.foodCardRightContainer}>
                      <View style={styles.trashBoxContainer}>
                        <Text style={styles.boldText}>{item.item.name}</Text>
                        <View style={styles.deleteButtonContainer}>
                          <TouchableHighlight
                            onPress={() => handleDelete(index)}
                            style={styles.trashConatiner}
                            underlayColor="none">
                            <CustomIcon name={'trash'} />

                          </TouchableHighlight>
                        </View>
                      </View>
                      <View>
                        <Text style={styles.regularText}>{item.item.description}</Text>
                      </View>
                      <View style={styles.bottomIconContainer}>
                        <View style={{ justifyContent: 'flex-end' }}>
                          <Text style={styles.boldText}>
                            {itemPrice(index)} {Languages.SR}
                          </Text>
                        </View>
                        <View style={styles.addIconConatiner}>
                          <TouchableHighlight
                            onPress={() => onEditClicked(index, item.note)}
                            style={styles.editConatiner}
                            underlayColor="none">

                            {item.note != '' ? (
                              <CustomIcon name={'ellipse'} />
                            ) : (
                                <CustomIcon name={'edit'} />
                              )}

                          </TouchableHighlight>
                          <View style={styles.addContainer}>
                            <TouchableHighlight
                              onPress={() => DecreementItem(index)}
                              underlayColor="none" style={{ padding: 5 }}>

                              <Icon
                                name={'minus'}
                                size={12}
                                color={Colors.AppGreenColor}
                              />
                            </TouchableHighlight>

                            <Text style={styles.boldTextDigit}>
                              {itemQuantity(index)}
                            </Text>

                            <TouchableHighlight
                              onPress={() => IncrementItem(index)}
                              underlayColor="none" style={{ padding: 5 }}>

                              <Icon
                                name={'plus'}
                                size={12}
                                color={Colors.AppGreenColor}
                              />
                            </TouchableHighlight>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                );
              }
            }}
          />
        )}
      </ScrollView>
      <View style={styles.footerContainer}>
        <DashedLine />
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 2, alignItems: 'flex-start' }}>
            <Text style={styles.cartText}>{Languages.TotalCartPrice}</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'flex-end' }}>
            <Text style={styles.cartText}>
              {totalPrice} {Languages.SR}
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 2, alignItems: 'flex-start' }}>
            <Text style={styles.cartText}>{Languages.DeliveryPrice}</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'flex-end' }}>
            <Text style={styles.cartText}>
              {deliveryCharges} {Languages.SR}
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 2, alignItems: 'flex-start' }}>
            <Text style={styles.cartText}>
              {Languages.Service}
              {' + '}
              {Languages.Tax}
            </Text>
          </View>
          <View style={{ flex: 1, alignItems: 'flex-end' }}>
            <Text style={styles.cartText}>
              {serviceAndTax} {Languages.SR}
            </Text>
          </View>
        </View>
        <DashedLine />
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <TouchableHighlight
            style={styles.primaryBtn}
            onPress={onNextClicked}
            underlayColor="none">
            <View style={{ width: '100%', flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
              {!isLoading && <View style={{ width: '100%', flex: 1, flexDirection: 'row' }}>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                  <Text
                    style={[styles.boldText, { color: '#fff', paddingLeft: 20, paddingRight: 20 }]}>
                    {Languages.OrderNow}
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                  }}>
                  <Text
                    style={[styles.boldText, { color: '#fff', paddingRight: 15, paddingLeft: 15 }]}>
                    {grandTotal} {Languages.SR}
                  </Text>
                  <View style={styles.back_roundViewInner}>
                    <CustomIcon
                      name={
                        I18nManager.isRTL ? 'FatGreenArrowRTL' : 'FatGreenArrow'
                      }
                      type={'SVG'}
                      iconStyle={{
                        fontSize: Constants.ResponsiveSize.f12,
                        color: '#000000',
                        ...props.iconStyle,
                      }}
                    />
                  </View>
                </View>
              </View>
              }
              {isLoading &&
                <ActivityIndicator size="small" color="#fff" />
              }
            </View>

          </TouchableHighlight>
        </View>
        
      </View>
       
    </SafeAreaView>
  );
};

const mapStateToProps = ({ cart, User, home_view }) => {
  return {
    isError: cart.isError,
    errorMessage: cart.errorMessage,
    apiSuccess: cart.apiCallSuccess,
    isLoading: cart.loading,
    branchId: cart.branchId,
    distance: cart.distance,
    selectedLanguage: User.selectedLanguage,
    currentVendor: cart.currentVendor,
    authToken: User.auth_token,
    userId: User._id,
    selectedCartData: cart.sourceData,
    totalCount: cart.totalCount,
    itemQuantity: (index) =>
      (cart.sourceData[index] && cart.sourceData[index].quantity) || 0,
    itemPrice: (index) =>
      (cart.sourceData[index] && cart.sourceData[index].price) || 0,
    totalPrice: cart.totalPrice,
    serviceTax: home_view.serviceTax,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    checkOutOrder: (obj, token) => {
      dispatch(CallCheckOutApi(obj, token))
    },
    updateCurrentVendor: (id) => {
      dispatch(updateCurrentVendor(id))
    },
    deleteData: (id) => {
      dispatch(deleteCart(id));
    },
    increment: (id) => {
      dispatch(IncremenntAction(id));
    },
    decrement: (id) => {
      dispatch(DecrementAction(id));
    },
    addNotificationData: (notificationData) => {
      dispatch(addNotificationAction(notificationData));
    },
    editDetails: (id, details) => {
      dispatch(EditAction(id, details));
    },
    setLoading: (payLoad) => {
      dispatch(setLoading(payLoad));
    },
    updateSuccessStatus: (payLoad) => {
      dispatch(updateApiCallStatus(payLoad));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);
