import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux';
import BottomSheetButton from '../../common/BottomSheetButton';
import Constants from '../../common/Constants';
import CustomIcon from '../../common/CustomIcon';
import Languages from '../../common/Languages';
import HomeInnerScreen from '../HomeInnerScreen/HomeInnerScreen';
import Styles from './Styles';

const HomeView = (props) => {
  const {
    homeView,
    navigation,
  } = props;

  const [OrderListData, setOrderListData] = useState(homeView);
  const [showTopBar, setShowTopBar] = useState(false);
  useEffect(() => {
  }, [])


  const onSearchClicked = () => {
    navigation.navigate('SearchScreen');
   // navigation.navigate('PickupLocationMap');
  };

  const onProfileClicked = () => {
    navigation.navigate('MyAccountScreen');
  };

  const onScrollBeginDrag = () => {
    setShowTopBar(true)
  }

  const onScrollEndDrag = () => {
    setShowTopBar(false)
  }

  const onViewClicked = () => {
    navigation.navigate('PickupLocationMap');
  };
  return (
    <>
      <View style={Styles.searchContainerOuter}>
        <View style={Styles.searchContainer}>
          <BottomSheetButton
            onPress={() => onSearchClicked()}
            style={Styles.searchContainer}>
            <View style={Styles.searchStyle}>
              <CustomIcon name={"search"} type="MaterialIcons" iconStyle={{ marginLeft: 5, fontSize: Constants.ResponsiveSize.f22, paddingHorizontal: Constants.ResponsiveSize.f5 }} />
              <Text style={Styles.text_for_find}>
                {Languages.Findfoodmarketsandotherservices}
              </Text>
            </View>
          </BottomSheetButton>
        </View>
        <View>
          <BottomSheetButton
            onPress={() => onProfileClicked()}
            style={Styles.profileOuterStyle}>
            <CustomIcon name={"person"} type="Ionicons" iconStyle={{ fontSize: Constants.ResponsiveSize.f40, paddingHorizontal: Constants.ResponsiveSize.f5, color: 'green' }} />
          </BottomSheetButton>
        </View>
      </View>
      <FlatList
        onScrollBeginDrag={onScrollBeginDrag}
        onScrollEndDrag={onScrollEndDrag}
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
    </>

  );
};

const mapStateToProps = ({ home_view }) => {
  return {
    homeView: home_view.home_view_data,
  };
};

export default connect(mapStateToProps, null)(HomeView);
