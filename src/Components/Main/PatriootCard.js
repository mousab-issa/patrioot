
import { useTheme } from "@react-navigation/native";
import React, { Component } from "react";
import {
    Dimensions,
    I18nManager,
    ImageBackground,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Constants from './../../common/Constants';
import Colors from './../../theme/colors';

const BORDER_RADIUS = 16
const BOTTOM_BORDER_RADIUS = 26

const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

class PatriootCard extends Component {



    render() {
        const { loading } = this.props
        return (
            <View style={styles.container}>
                <View style={styles.outerStyle}>
                    <View style={styles.imageShadow}>
                        <View style={styles.imageContainer}>
                            <ImageBackground source={require("./../../../assets/images/grey-image.jpg")}
                                style={styles.imageStyle}
                                imageStyle={{ borderTopLeftRadius: BORDER_RADIUS, borderTopRightRadius: BORDER_RADIUS, borderBottomLeftRadius: BOTTOM_BORDER_RADIUS, borderBottomRightRadius: BOTTOM_BORDER_RADIUS, }}>
                                <ImageBackground source={this.props.item.cover_pic}
                                    style={styles.imageStyle}
                                    imageStyle={{ borderTopLeftRadius: BORDER_RADIUS, borderTopRightRadius: BORDER_RADIUS, borderBottomLeftRadius: BOTTOM_BORDER_RADIUS, borderBottomRightRadius: BOTTOM_BORDER_RADIUS, }}>
                                </ImageBackground>
                            </ImageBackground>
                        </View>
                    </View>
                    <View style={styles.cardShadow}>
                        <View style={styles.cardContainer}>
                            <View style={styles.searchMan}>
                                <ImageBackground source={require("./../../../assets/images/Logo_green.png")} style={styles.image}>

                                </ImageBackground>

                            </View>
                            <View style={styles.divider} />
                            <View style={styles.innerMiddelContainer}>
                                {(this.props.item.title && this.props.item.title.length > 0) &&
                                    <Text style={styles.heading}>{this.props.item.title}</Text>
                                }
                                <Text style={styles.details}>{this.props.item.body}</Text>
                            </View>
                        </View>
                    </View>

                </View>
            </View >
        );
    }
}

export default function (props) {
    const { colors } = useTheme()
    const config = useSelector((state) => state.config);
    const loading = useSelector((state) => state.promo.isLoading)
    const dispatch = useDispatch()
    return <PatriootCard {...props} colors={colors} loading={loading} config={config} dispatch={dispatch} />
}
const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        marginTop: Constants.ResponsiveSize.f5,
        marginBottom: Constants.ResponsiveSize.f7,
    },
    image: {
        width: '90%',
        height: '90%',
    },
    imageStyle: {
        width: windowWidth - 40,
        height: (windowWidth - 40) * 0.50,
        resizeMode:'contain'
    },
    cardShadow: {
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 2.22,
        elevation: 5,
        marginTop: 4
    },
    cardContainer: {
        paddingHorizontal: 10,
        paddingBottom: 10,
        paddingTop: 5,
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "center",
        flex: 1,
    },
    imageShadow: {
        borderBottomEndRadius: BOTTOM_BORDER_RADIUS,
        borderBottomLeftRadius: BOTTOM_BORDER_RADIUS,
        backgroundColor: '#0000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.4,
        shadowRadius: 2.22,
        elevation: 8,
        shadowColor: "black",

    },
    innerMiddelContainer: {
        flex: 1,
    },
    imageContainer: {
        backgroundColor: '#0000',
        marginBottom: 2,
        borderBottomEndRadius: BOTTOM_BORDER_RADIUS,
        borderBottomLeftRadius: BOTTOM_BORDER_RADIUS,
    },
    heading: {
        fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabicBold : Constants.fontFamilyBold,
        textAlign: 'left',
        paddingTop: 10,
        fontSize: Constants.ResponsiveSize.f15,
        color: Colors.TextColor,
    },
    details: {
        fontFamily: I18nManager.isRTL ? Constants.fontFamilyArabic : Constants.fontFamily,
        textAlign: 'left',
        paddingTop: 5,
        fontSize: Constants.ResponsiveSize.f13,
        color: Colors.TextColor,
    },
    searchMan: {
        width: 60,
        height: 60,
        borderRadius: 60,
        backgroundColor: "#fff",
        marginEnd: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    divider: {
        height: "50%",
        width: 1.5,
        marginStart: 5,
        alignSelf: "center",
        marginEnd: 5,
        backgroundColor: 'rgba(0, 0, 0, 0.2)'
    },
    counter: {
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        marginRight: -5
    },
    outerStyle: {
        borderRadius: BORDER_RADIUS,
        shadowColor: '#000',
        backgroundColor: '#fff',

        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }
});