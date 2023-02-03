import React from 'react';
import {
  Text,
  View
} from 'react-native';
import Languages from '../../common/Languages';
import DashedLine from '../../Components/DashedLine/DashedLine';
import Styles from '../../Screens/ChatScreenView/Styles';


function Bill(props) {

  const getOrderPrice = () => {

return ((parseFloat(props.serviceTax) + parseFloat(props.orderData.order.data.order.delivery_charges) + parseFloat(props.orderPrice)).toFixed(2))
    
  }

  return (
    <View
      style={[Styles.billCard]}>
      <View style={Styles.billCardInner}>
        <Text style={Styles.billTitle}>{Languages.Bill}</Text>

        <View>
          <View>
            <View style={Styles.billInnerView}>
              <Text style={[Styles.bold, Styles.boldBorder1]}>
                {Languages.GoodPrice}
              </Text>
              <Text style={[Styles.normal]}>
                {':'}
                <Text> {props.orderPrice} {'  '}</Text>
                {Languages.SR}
              </Text>
            </View>
          </View>
          <View style={{ width: '63%', height: 10, marginLeft: 10, marginTop: -3 }}>
            <DashedLine />
          </View>
          <View>
            <View style={Styles.billInnerView}>
              <Text style={[Styles.bold, Styles.boldBorder1]}>
                {Languages.DeliveryPrice}
              </Text>
              <Text style={[Styles.normal]}>
                {':'}
                <Text> {props.orderData.order.data.order.delivery_charges} {'  '}</Text>
                {Languages.SR}
              </Text>
            </View>
          </View>
          <View style={{ width: '63%', height: 10, marginLeft: 10, marginTop: -3 }}>
            <DashedLine />
          </View>
          <View>
            <View style={Styles.billInnerView}>
              <Text style={[Styles.bold, Styles.boldBorder1]}>
                {Languages.PaymentGatwayCommision}
              </Text>
              <Text style={[Styles.normal]}>
                {':'}
                <Text> {props.serviceTax} {'  '}</Text>
                {Languages.SR}
              </Text>
            </View>
          </View>
          <View style={{ width: '63%', height: 10, marginLeft: 10, marginTop: -3 }}>
            <DashedLine />
          </View>
          <View>
            <View
              style={[Styles.billInnerView, { marginTop: 10, marginBottom: 10 }]}>
              <Text style={[Styles.bold]}>
                {Languages.VATnumber} {':'} {props.VATnumber}
              </Text>
            </View>
          </View>

          <View
            style={{
              flex: 1,
              borderTopColor: 'black',
              borderTopWidth: 0.5,
            }}>
            <View
              style={{
                flexDirection: 'row',
                marginLeft: 10,
                marginTop: 5,
                marginBottom: 10,
              }}>
              <Text style={Styles.bold}>
                {Languages.Total} {':'}
              </Text>
              <Text style={Styles.totalText}>{getOrderPrice()} {Languages.SR}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Bill;
