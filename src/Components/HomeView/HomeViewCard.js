import React, { useEffect, useState } from 'react';
import {
    FlatList
} from 'react-native';
import { connect } from 'react-redux';
import HomeInnerScreen from '../HomeInnerScreen/HomeInnerScreen';

const HomeViewCard = ({ homeView, navigation }) => {
    const [OrderListData, setOrderListData] = useState(homeView);

    useEffect(() => {
    }, [])
    const onViewClicked = () => {
        navigation.navigate('PickupLocationMap');
    };

    return (
        <FlatList
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

const mapStateToProps = ({ home_view }) => {
    return {
        homeView: home_view.home_view_data,
    };
};

export default connect(mapStateToProps, null)(HomeViewCard);
