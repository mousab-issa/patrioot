import React, { useState } from 'react';
import {
    Animated,
    FlatList,
    StyleSheet,
    View,
} from 'react-native';
//Theming
import Colors from '../../theme/colors';
import Theme from '../../common/Theme';
//Components
import PatriootCard from '../../Components/Main/PatriootCard';
import FadingGradient from '../../Components/Main/Layout/FadingGradient';
//ScrollView for the bottomsheet
import { BottomSheetScrollView } from '@gorhom/bottom-sheet';
//Renaimted
import { withTiming, useSharedValue, Easing } from "react-native-reanimated";
import Languages from '../../common/Languages';



const Patrioot = (props) => {
    //Fading animation
    const opacityChange = useSharedValue(0);

    //Cards
    const PatirootDetails = [
        {
            id: 1,
            cover_pic:Theme.Delivery,
            title: Languages.ChooseYourRiderTitle,
            body: Languages.ChooseYourRiderDescription,
            hasText: true
        },
        {
            id: 2,
            cover_pic:Theme.Chatting,
            title: Languages.EasyCommunicationTitle,
            body: Languages.EasyCommunicationDescription,
            hasText: true
        },
        {
            id: 3,
            cover_pic:Theme.Time,
            title: Languages.AlltheTimeTitle,
            body: Languages.AlltheTimeDescription,

            hasText: true
        },
        {
            id: 4,
            cover_pic:Theme.Tracking,
            title: Languages.TrackingTitle,
            body: Languages.TrackingDescription,
            hasText: true
        },
    ];

    //Detect scrolling
    let offsetY = 0;

    const ScrollListener = (e) => {
        offsetY = e.nativeEvent.contentOffset.y;
        if (offsetY <= 2) {
            opacityChange.value = withTiming(0, {
                duration: 300,
                easing: Easing.out(Easing.exp),
            });
            // SetShown(false);
        } else if (offsetY > 2 && opacityChange.value != 1) {

            opacityChange.value = withTiming(1, {
                duration: 400,

            });
        }
    }

    return (
        <Animated.View style={[styles.container]}>
            <View style={{ flex: 1, marginBottom: 10 }}>
                <BottomSheetScrollView
                    showsVerticalScrollIndicator={false}
                    onEndReachedThreshold={0.5}
                    onEndReached={({ distanceFromEnd }) => {

                    }}
                    onScroll={Animated.event(
                        [],
                        {
                            useNativeDriver: false,
                            listener: (e) => {
                                ScrollListener(e)
                            },
                        },
                    )}>
                    <FlatList
                        data={PatirootDetails}
                        keyExtractor={(item, index) => index.toString()}
                        onEndReachedThreshold={0.5}
                        renderItem={({ item, i }) => (
                            <View key={i}>
                                <PatriootCard
                                    img={PatirootDetails.cover_pic}
                                    title={PatirootDetails.en_title}
                                    content={PatirootDetails.body}
                                    hasText={true}
                                    item={item}
                                /></View>
                        )}
                    />

                </BottomSheetScrollView>
                <FadingGradient opacityChange={opacityChange} />
            </View>
        </Animated.View>
    );
}
export default Patrioot;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WhiteColor,
    }

});
