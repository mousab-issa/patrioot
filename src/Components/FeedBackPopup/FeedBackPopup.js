import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  I18nManager,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import { AirbnbRating } from 'react-native-ratings';
import Toast from 'react-native-simple-toast';
import { connect } from 'react-redux';
import CustomIcon from '../../common/CustomIcon';
import Languages from '../../common/Languages';
import {
  CallRatingApi,
  startRatingLoading,
  CallOrderCompleteApi
} from '../../redux/chat/action';
import Styles from './Styles';


function PopupBillPrice(props) {
  const {
    loading,
    RatingApi,
    ratingApiSuccess,
    updateLoading,
    authToken,
    errorMessage,
    OrderCompleteApi
  } = props;
  const [communication, setCommunication] = useState(0);
  const [deliverSpeed, setDeliverSpeed] = useState(0);
  const [deliveryCondition, setDeliveryCondition] = useState(0);

  function onFeedbackThumbsUpClicked() {
    props.onModalClose();
  }
  useEffect(() => {
    if (!loading && errorMessage.length > 0) {
      Toast.showWithGravity(
        errorMessage,
        Toast.SHORT,
        Toast.CENTER,
      );
      updateLoading(false);
    }
    if (!loading && ratingApiSuccess) {
      updateLoading(false);
      props.onModalClose();

    }
  }, [loading])

  useEffect(() => {
    const data = {
      order_id: props.orderId
    };
    OrderCompleteApi(data, authToken);
  }, [])



  const communicationFeedback = (val) => {
    setCommunication(val);
  };
  const deliverSpeedFeedback = (val) => {
    setDeliverSpeed(val);
  };
  const deliveryConditionFeedback = (val) => {
    setDeliveryCondition(val);
  };

  const onPress = () => {
    updateLoading(true);
    const data = {
      communication: communication,
      delivery_speed: deliverSpeed,
      delivery_condition: deliveryCondition,
      order_id: props.orderId
    };
    RatingApi(data, authToken);
    props.onSendClicked();
  };

  return (
    <View>
      {/* <View style={Styles.containerLoading}> */}
      <View style={Styles.popupInner}>
        <View style={{ marginTop: 8, marginBottom: 8 }}>
          <Text style={Styles.titleStyle}>{Languages.RateExperience}</Text>
        </View>
        <View style={Styles.popupImage}>
          <CustomIcon name={'fileDocument'} />
        </View>
        <View style={Styles.feedbackEntryStyle}>
          <View>
            <Text style={Styles.feedbackEntryText}>{Languages.Communication}</Text>
          </View>
          <View style={Styles.feedbackEntryInput}>
            <AirbnbRating
              showRating={false}
              defaultRating={0}
              reviewSize={10}
              size={20}
              onFinishRating={(val) => communicationFeedback(val)}
            />
          </View>
        </View>
        <View style={Styles.feedbackEntryStyle}>
          <View>
            <Text style={Styles.feedbackEntryText}>{Languages.DeliverySpeed}</Text>
          </View>
          <View style={Styles.feedbackEntryInput}>
            <AirbnbRating
              showRating={false}
              defaultRating={0}
              reviewSize={10}
              size={20}
              onFinishRating={(val) => deliverSpeedFeedback(val)}
            />
          </View>
        </View>
        <View style={Styles.feedbackEntryStyle}>
          <View>
            <Text style={Styles.feedbackEntryText}>{Languages.DeliveryCondition}</Text>
          </View>
          <View style={Styles.feedbackEntryInput}>
            <AirbnbRating
              showRating={false}
              defaultRating={0}
              reviewSize={10}
              size={20}
              onFinishRating={(val) => deliveryConditionFeedback(val)}
            />
          </View>
        </View>
        <View style={Styles.feedbackButtonContainer}>
          <View style={Styles.feedbackSubmitButton}>
            <TouchableHighlight onPress={onPress} underlayColor="none">
              <View>
                {!loading && <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingVertical: 5,
                    paddingHorizontal: 10,

                  }}>
                  <View style={{ position: 'absolute', left: 15 }}>
                    {I18nManager.isRTL ? (
                      <CustomIcon name={'WhiteLeftPointer'} />
                    ) : (
                        <CustomIcon name={'rightPointer'} />
                      )}
                  </View>
                  <Text style={Styles.feedbackButtonText}>{Languages.Send}</Text>
                </View>}
                {
                  loading &&
                  <ActivityIndicator size='small' color='#fff' />
                }
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
      {/* </View> */}
    </View>
  );
}

const mapStateToProps = ({ chat, User }) => {
  return {
    authToken: User.auth_token,
    loading: chat.loading,
    errorMessage: chat.errorMessage,
    ratingApiSuccess: chat.ratingApiSuccess
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    RatingApi: (ratingData, token) => {
      dispatch(CallRatingApi(ratingData, token));
    },
    OrderCompleteApi: (orderData, token) => {
      dispatch(CallOrderCompleteApi(orderData, token));
    },
    updateLoading: (loadingStatus) => {
      dispatch(startRatingLoading(loadingStatus));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PopupBillPrice);