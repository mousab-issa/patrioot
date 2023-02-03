import React from 'react';
import {
  FlatList, Image,
  Text,
  TouchableOpacity, View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import { connect } from 'react-redux';
import Languages from '../../common/Languages';
import { addFood } from '../../redux/search_resturent/serarchResturentAction';
import styles from './Styles';
import CustomIcon from './../../common/CustomIcon';
import Constants from './../../common/Constants';

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

const MenuList = (props) => {
  const {
    navigation,
    selectFood,
  } = props;

  const onResturantItemClicked = (item) => {
    item.branch_id = props.branch;
    item.distance = props.distance;
    item.restaurantName = props.name;
    selectFood(item);
    navigation.navigate('FoodCard');
  };


  const ItemSeparator = () => {
    return (
      <View style={styles.seperatorOuter}>
        <View style={styles.seperatorInner}></View>
      </View>
    );
  };


  return (
    <View style={styles.scene} >
      <FlatList
        data={props.data}
        keyExtractor={(item, index) => index.toString()}
        scrollEnabled={true}
        ItemSeparatorComponent={() => <ItemSeparator />}
        renderItem={({ item, index }) => (
          <ShimmerPlaceholder
            visible={props.loaded}
            isInteraction={false}
            width={styles.foodCardContainer.width}
            height={styles.foodCardLeftContainer.height}
          >
            <TouchableOpacity
              style={styles.foodCardContainer}
              onPress={() => onResturantItemClicked(item)}>
              <View style={styles.foodCardLeftContainer}>
                <Image source={{ uri: item.cover_pic }} style={styles.foodCardImage} />
              </View>
              <View style={styles.foodCardRightContainer}>
                <Text style={styles.boldText}>{item.name}</Text>
                <Text style={styles.regularText}>{item.description}</Text>

                <View style={styles.PriceAndCaloriesContainer}>
                  <View style={styles.IconTitleTile}>
                    <View style={styles.IconStlye}>
                      <CustomIcon
                        name={'calories'}
                        type={'AntDesign'}
                        iconStyle={{
                          fontSize: Constants.ResponsiveSize.f25,
                          color: '#000000',

                        }}
                      />
                    </View>
                    <Text style={styles.InnerBoldText}>{item.calories} {Languages.Cal}</Text>
                  </View>
                  <View style={styles.IconTitleTileLeft}>
                    <View style={styles.IconStlye}>
                      <CustomIcon
                        name={'tag'}
                        type={'AntDesign'}
                        iconStyle={{
                          fontSize: Constants.ResponsiveSize.f25,
                          color: '#000000',
                        }}
                      />
                    </View>
                    <Text style={styles.InnerBoldText}>{item.price} {Languages.SR}</Text>
                  </View>
                </View>
                
              </View>
            </TouchableOpacity>
          </ShimmerPlaceholder>
        )}
      />
    </View>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    selectFood: (obj) => dispatch(addFood(obj)),
  };
};

export default connect(null, mapDispatchToProps)(MenuList);
