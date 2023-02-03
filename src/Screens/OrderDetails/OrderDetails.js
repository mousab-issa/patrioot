import React, {
  useEffect, useState
} from 'react';
import {
  ActivityIndicator, I18nManager, SafeAreaView, Text,
  TextInput, TouchableHighlight, View, Linking,
  TouchableWithoutFeedback
} from 'react-native';
import Toast from 'react-native-simple-toast';
import { connect } from 'react-redux';
import Constants from '../../common/Constants';
import CustomIcon from '../../common/CustomIcon';
import Languages from '../../common/Languages';
import LongButton from '../../Components/LongButton/LongButton';
import {
  PlaceCustomOrder,
  setOrderNoteAction,
  setStartAPIAction,
  updateCustomApiStatus
} from '../../redux/orderLocation/action';
import Styles from './Styles';


function OrderDetails(props) {

  const {
    loading,
    setOrderNote,
    orderFare,
    orderDistance,
    customApiSuccess,
    setOrderPickupLocation,
    pickupAddress,
    selectedLanguage,
    setStartAPI,
    destinationAddress,
    destinationLatitude,
    destinationLongitude,
    pickupLatitude,
    pickupLongitude,
    serviceTax,
    postCustomOrder,
    customOrderData,
    updateCustomStatus,
    auth_token,
    error
  } = props;

  const [txtMessage, setTextMessage] = useState('');
  const [selectedOrderPrice, setSelectedOrderPrice] = useState(0);
  const [serviceAndTax, setServiceAndTax] = useState(serviceTax);

  const onChangeText = (key, val) => {
    setTextMessage(val)
  };
  useEffect(() => {
    if (error && error.length > 0)
      Toast.showWithGravity(
        error,
        Toast.SHORT,
        Toast.CENTER,
      );
    if (customApiSuccess) {
      updateCustomStatus(false);

      props.navigation.navigate('DriverList', { notificationData: customOrderData });
    }
    else {
      if (error && error.length > 0) {
        Toast.showWithGravity(
          error,
          Toast.SHORT,
          Toast.CENTER,
        );
      }

    }
  }, [customApiSuccess, error])
  const onBackClicked = () => {
    props.navigation.goBack();
  };
  const onSubmitClicked = () => {
    if (loading) return;
    if (txtMessage.length == 0) {
      Toast.showWithGravity(
        Languages.AddDescription,
        Toast.SHORT,
        Toast.CENTER,
      );
      return;
    }
    setStartAPI();
    setOrderNote(txtMessage);
    const lang = selectedLanguage;
    const min_price = selectedOrderPrice == 0 ? 0 : selectedOrderPrice == 1 ? 10 : selectedOrderPrice == 2 ? 100 : 200;
    const max_price = selectedOrderPrice == 0 ? 10 : selectedOrderPrice == 1 ? 100 : selectedOrderPrice == 2 ? 200 : 2000;
    const data = {
      start_latitude: Constants.debugMode ? 24.571434165848927 : pickupLatitude, // , // ,
      start_longitude: Constants.debugMode ? 46.56661803154316 : pickupLongitude, // , // ,
      start_name: pickupAddress,
      destination_name: destinationAddress,
      destination_latitude: destinationLatitude,
      destination_longitude: destinationLongitude,
      description: txtMessage,
      delivery_charges: orderFare,
      service_charges: serviceAndTax,
      distance: orderDistance,
      lang,
      min_price,
      max_price,

    }
    postCustomOrder(data, auth_token)
  };
  const Clicked = (selectedItem) => {
    setSelectedOrderPrice(selectedItem)
  };

  const onTermsClicked = () => {
    Linking.openURL(Constants.TermsOfServiceLink);
  };

  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.mainView}>
        <View style={Styles.row}>
          <TouchableHighlight onPress={onBackClicked} style={{ marginLeft: -10 }} underlayColor="none">
            <CustomIcon name={I18nManager.isRTL ? 'BlackArrowRTL' : 'BlackArrow'}
              type={'SVG'}
              iconStyle={{ fontSize: Constants.ResponsiveSize.f12, color: '#000000', ...props.iconStyle, }} />
          </TouchableHighlight>
          <View>
            <Text style={Styles.heading}>{Languages.OrderDetails}</Text>
          </View>
        </View>
        <View style={Styles.textView}>
          <Text style={Styles.textSize}>{Languages.HowMuchWillCOst}</Text>
        </View>
        <View style={Styles.priseView}>
          <TouchableHighlight onPress={() => Clicked(0)} style={selectedOrderPrice == 0 ? Styles.box : Styles.boxWhite} underlayColor="none">
            <Text style={selectedOrderPrice == 0 ? Styles.fontSelected : Styles.fonts}>
              0-10 <Text style={Styles.smallText}>{Languages.SR}</Text>
            </Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => Clicked(1)} style={selectedOrderPrice == 1 ? Styles.box : Styles.boxWhite} underlayColor="none">
            <Text style={selectedOrderPrice == 1 ? Styles.fontSelected : Styles.fonts}>
              10-100 <Text style={Styles.smallText}>{Languages.SR}</Text>
            </Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => Clicked(2)} style={selectedOrderPrice == 2 ? Styles.box : Styles.boxWhite} underlayColor="none">
            <Text style={selectedOrderPrice == 2 ? Styles.fontSelected : Styles.fonts}>
              100-200 <Text style={Styles.smallText}>{Languages.SR}</Text>
            </Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => Clicked(3)} style={selectedOrderPrice == 3 ? Styles.box : Styles.boxWhite} underlayColor="none">
            <Text style={selectedOrderPrice == 3 ? Styles.fontSelected : Styles.fonts}>
              200+ <Text style={Styles.smallText}>{Languages.SR}</Text>
            </Text>
          </TouchableHighlight>
        </View>
      </View>
      <View style={Styles.hrRowinner} />
      <View style={Styles.textBoxView}>
        <View>
          <Text style={Styles.heading2}>{Languages.Writeyourorder}</Text>
        </View>
        <TextInput
          style={Styles.messageBox}
          placeholder={Languages.TypeOrderDetailsHere}
          placeholderTextColor="#CFCCCC"
          numberOfLines={6}
          multiline={true}
          value={txtMessage}
          onChangeText={(val) => onChangeText('note', val)}
        />
      </View>
      <View style={[Styles.hrRowinner, { marginTop: 10 }]} />
      <View style={Styles.totalView}>
        <View style={Styles.bottom1}>
          <View style={Styles.bottomleft}><Text style={Styles.textTotal}>{Languages.DeliveryFees}</Text></View>
          <View style={Styles.bottomRight}><Text style={Styles.textTotal}>{orderFare} </Text><Text style={Styles.textSR}>{Languages.SR}</Text></View>
        </View>
        <View style={Styles.bottom1}>
          <View style={Styles.bottomleft}><Text style={Styles.textTotal}>{Languages.Tax} {'+'} {Languages.ServiceFees}</Text></View>
          <View style={Styles.bottomRight}><Text style={Styles.textTotal}>{serviceAndTax} </Text><Text style={Styles.textSR}>{Languages.SR}</Text></View>
        </View>
        <View style={Styles.bottom1}>
          <View style={Styles.bottomleft}><Text style={Styles.textTotal}>{Languages.Total}</Text></View>
          <View style={Styles.bottomRight}><Text style={Styles.textTotal}>{(parseFloat(orderFare) + parseFloat(serviceAndTax)).toFixed(2)} </Text><Text style={Styles.textSR}>{Languages.SR}</Text></View>
        </View>

        <Text style={Styles.paymentText}>
          {Languages.Paymentareaftertheorderisready}
        </Text>
        <View style={Styles.bottomView}>

          <View style={Styles.marginTop}>
            <View>
              <Text style={Styles.bottomText}>
                {Languages.ByOrderingyouagreetothe} {' '}
                <TouchableWithoutFeedback onPress={onTermsClicked}>
                  <Text style={Styles.colorGreen}>
                    {Languages.Termsandservices}
                  </Text>
                </TouchableWithoutFeedback>
              </Text>
            </View>
            <View style={Styles.buttonOuter}>
              {!loading && <LongButton onButtonClick={onSubmitClicked} buttonText={Languages.SubmitOrder} />}
              {loading &&
                <View
                  style={Styles.primaryBtn}>

                  <ActivityIndicator size="small" color="#fff" /></View>
              }
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const mapStateToProps = ({ orderLocation, User, home_view }) => {
  return {
    auth_token: User.auth_token,
    customApiSuccess: orderLocation.customApiSuccess,
    loading: orderLocation.loading,
    error: orderLocation.error,
    pickupAddress: orderLocation.pickupAddress,
    destinationAddress: orderLocation.destinationAddress,
    orderFare: orderLocation.orderFare,
    orderDistance: orderLocation.orderDistance,
    destinationLatitude: orderLocation.destinationLatitude,
    destinationLongitude: orderLocation.destinationLongitude,
    pickupLatitude: orderLocation.pickupLatitude,
    pickupLongitude: orderLocation.pickupLongitude,
    customOrderData: orderLocation.customOrderData,
    selectedLanguage: User.selectedLanguage,
    serviceTax: home_view.serviceTax,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setStartAPI: () => {
      dispatch(setStartAPIAction());
    },
    updateCustomStatus: (payload) => {
      dispatch(updateCustomApiStatus(payload));
    },
    setOrderNote: (orderNote) => {
      dispatch(setOrderNoteAction(orderNote));
    },
    postCustomOrder: (obj, auth_token) => dispatch(PlaceCustomOrder(obj, auth_token)),

  };

};

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetails);
