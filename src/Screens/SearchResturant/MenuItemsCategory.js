import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  Dimensions,
  TouchableHighlight,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import { connect } from 'react-redux';
import Constants from '../../common/Constants';

import styles from './Styles';

const Screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

const MenuItemsCategory = (props) => {
  const {
    menuItemCategories,
    MenuTabClick,
    selectedIndex,
    tabScrollView,
  } = props;

  // const tabScrollView = useRef(null);
  const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);
  const [selectedSection, setSelectedSection] = useState(0);

  useEffect(() => {
    setSelectedSection(selectedIndex);

    
  }, [selectedIndex]);

  const moveToSection = (section) => {
    MenuTabClick(section);
    setSelectedSection(section);
  };

  return (
    <FlatList
      style={(menuItemCategories != null && menuItemCategories.length > 0) ? styles.restaurantData : styles.restaurantDataEmpty}
      ref={tabScrollView}
      horizontal
      showsHorizontalScrollIndicator={false}
      data={menuItemCategories}
      removeClippedSubviews={false}
      keyExtractor={(section) => section.id}
      renderItem={({ item, index }) => (
        <ShimmerPlaceholder
          visible={true}
          height={Constants.ResponsiveSize.f24}
          isInteraction={false}>
          <View style={{ alignItems: 'center', width: menuItemCategories.length < 3 ? (Screen.width * (1 / menuItemCategories.length)) : '100%' }}>
            <TouchableHighlight
              key={item.id}
              onPress={() => moveToSection(index)}
              underlayColor="none">
              <View style={menuItemCategories.length == 1 ? styles.menuItems1 : (menuItemCategories.length == 2 ? styles.menuItems2 : (menuItemCategories.length == 3 ? styles.menuItems3 :(styles.menuItems3Plus)))}>
                <Text style={styles.categoryName}>{item.name}</Text>
                <View
                  style={
                    selectedSection === index
                      ? ( styles.categoryIndicatorSelected)
                      : styles.categoryIndicatorNotSelected
                  }>
                </View>
              </View>
            </TouchableHighlight>
             {/* <View
              style={
                selectedSection === index
                  ? (menuItemCategories.length == 1 ? styles.categoryIndicatorSelected1 : styles.categoryIndicatorNotSelected)
                  : styles.categoryIndicatorNotSelected
              }>

            </View>  */}
          </View>
        </ShimmerPlaceholder>
      )}
    />
  );
};

const mapStateToProps = ({ search_resturent, cart }) => {
  return {
    selectedIndex: search_resturent.selectedIndex,
  };
};

export default connect(mapStateToProps, null)(MenuItemsCategory);
