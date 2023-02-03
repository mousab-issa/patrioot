import React, { useState } from 'react';
import {
  FlatList
} from 'react-native';
import { connect } from 'react-redux';
import HomeInnerScreen from '../HomeInnerScreen/HomeInnerScreen';




const HomeView = ({ promoData, navigation }) => {
  const [OrderListData, setOrderListData] = useState(promoData);

  const onViewClicked = () => {
    alert('View Open');
  };

  return (
    <FlatList
      scrollEnabled={false}
      data={OrderListData}
      removeClippedSubviews={false}
      keyExtractor={(data) => data.id}
      renderItem={(data) => (

        <HomeInnerScreen
          onPress={onViewClicked}
          Heading={data.item.heading}
          Details={data.item.details}
          imageData={data.item.imageData}
        />
      )}
    />
  );
};

const mapStateToProps = ({ promo }) => {
  return {
    promoData: promo.promo_data,
  };
};

export default connect(mapStateToProps, null)(HomeView);
