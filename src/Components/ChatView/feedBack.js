import React, { useState } from 'react';
import {
  Text,

  View
} from 'react-native';
import { connect } from 'react-redux';
import Languages from '../../common/Languages';
import DashedLine from '../../Components/DashedLine/DashedLine';
import Styles from '../../Screens/ChatScreenView/Styles';


function FeedBack(props) {
  return (
    <View>
      <View
        style={[Styles.chatlocationcard]}>
        <View>
          <View style={Styles.cardInner}>
            <View style={Styles.feedBackMessageView}>
              <Text
                style={[Styles.chatBillTextStyle, Styles.feedbackMessageText]}>
                {Languages.OrderDetails}
              </Text>
            </View>
            <View style={Styles.cardInnerBottomView}>
              {!(props.orderData.order.data.order.order_type == 'Normalorder') &&
                <View style={Styles.customLabelView}>
                  <Text style={[Styles.bigdetailLabelText, { flex: 1 }]}>
                    {props.orderData.order.data.order.description}
                  </Text>
                </View>
              }
              {(props.orderData.order.data.order.order_type == 'Normalorder') &&
                <View style={Styles.bigMacLabelView}>
                  {props.orderData.order.data.order.order_item.map((item, index) => {
                    return (
                      <View
                        style={{
                          marginLeft: 20,
                          marginBottom: 5,
                          width: '90%'

                        }}>
                        <View
                          style={{
                            width: '100%',
                            flexDirection: 'row',
                          }}>
                          <Text style={[Styles.bigMacLabelText, { flex: 9 }]}>
                            {item.name}
                          </Text>
                          <View
                            style={{
                              flex: 1,
                              alignItems: 'flex-end',
                            }}>
                            <Text style={Styles.bigMacLabelText}>
                              x{item.quantity != null ? item.quantity : '1'}
                            </Text>
                          </View>
                        </View>
                        {(item.note != null && item.note != '') ? (
                          <View style={Styles.bigMacDetailText}>
                            <Text>{item.note}</Text>
                          </View>
                        ) : (
                          <View />
                        )}
                        <View style={{ width: '100%', height: 5 }}>
                          <DashedLine />
                        </View>

                      </View>
                    );
                  })}
                </View>
              }
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const mapStateToProps = ({ cart }) => {
  return {
    selectedCartData: cart.sourceData,
    totalCount: cart.totalCount,
    itemQuantity: (index) =>
      (cart.sourceData[index] && cart.sourceData[index].quantity) || 0,
    itemPrice: (index) =>
      (cart.sourceData[index] && cart.sourceData[index].price) || 0,
    totalPrice: cart.totalPrice,
  };
};

export default connect(mapStateToProps, null)(FeedBack);
