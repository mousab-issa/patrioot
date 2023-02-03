import { useTheme } from "@react-navigation/native";
import React, { Component } from "react";
import {
    Dimensions,
    I18nManager,
    Image,
    ImageBackground,
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from "react-native";
import CountDown from 'react-native-countdown-component';
import LinearGradient from 'react-native-linear-gradient';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import { useDispatch, useSelector } from "react-redux";
import Constants from '../../common/Constants';
import Colors from '../../theme/colors';
import moment from "moment";
import Languages from "../../common/Languages";
// import { Image } from "native-base";

const BORDER_RADIUS = 16
const BOTTOM_BORDER_RADIUS = 26

const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

class PromoListingCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoaded: false,
        }
    }

    componentDidMount() {
    }

    getRemainingTime = (endTime) => {
        const remains = moment.duration(moment(new Date()).diff(moment(endTime)));
        const remainInSec = Math.floor(remains.asSeconds());
        return remainInSec;
    }

    render() {
        const { config
            , loading } = this.props

        return (
            <View style={styles.container}>
                <TouchableHighlight
                    displayUntilPressOut={true}
                    onPress={this.props.onPress} underlayColor="none">
                    <View style={styles.outerStyle}>
                        <ShimmerPlaceholder visible={!loading} height={windowWidth * 0.60}
                            isInteraction={false} style={{ borderRadius: BORDER_RADIUS, }}
                            width={windowWidth - 40}>
                            <View style={styles.imageShadow}>
                                <View style={styles.imageContainer}>
                                    <ImageBackground source={require("./../../../assets/images/grey-image.jpg")}
                                        style={styles.imageStyle}
                                        imageStyle={{ borderTopLeftRadius: BORDER_RADIUS, borderTopRightRadius: BORDER_RADIUS, borderBottomLeftRadius: BOTTOM_BORDER_RADIUS, borderBottomRightRadius: BOTTOM_BORDER_RADIUS, }}>
                                        <ImageBackground source={{ uri: this.props.item.promoData.cover_pic }}
                                            style={styles.imageStyle}
                                            imageStyle={{ borderTopLeftRadius: BORDER_RADIUS, borderTopRightRadius: BORDER_RADIUS, borderBottomLeftRadius: BOTTOM_BORDER_RADIUS, borderBottomRightRadius: BOTTOM_BORDER_RADIUS, }}>
                                        </ImageBackground>
                                    </ImageBackground>
                                </View>
                            </View>
                            {this.props.hasText &&
                                <View style={styles.cardShadow}>
                                    <View style={styles.cardContainer}>
                                        <View style={styles.searchMan}>
                                            <Image
                                                source={{ uri: this.props.item.promoData.vendor_data.thumbnail }}
                                                style={{ width: 60, height: 60, borderRadius: 60, resizeMode: 'contain' }}
                                                resizeMode={'cover'}
                                            />
                                        </View>
                                        <View style={styles.divider} />
                                        <View style={styles.innerMiddelContainer}>
                                            {(this.props.item.promoData.title && this.props.item.promoData.title.length > 0) &&
                                                <Text style={styles.heading}>{this.props.item.promoData.title}</Text>
                                            }
                                            <Text style={styles.details}>{this.props.item.promoData.body}</Text>
                                        </View>
                                        <View style={styles.divider} />
                                        <View style={styles.counter}>
                                            <CountDown
                                                until={this.props.item.endingTime}
                                                digitStyle={{ backgroundColor: Colors.ButtonColor }}
                                                digitTxtStyle={{ color: '#fff' }}
                                                size={10}
                                                timeToShow={['D', 'H', 'M', 'S']}
                                                timeLabels={{ d: null, h: null, m: null, s: null }}
                                                timeLabelStyle={{ fontSize: 8, color: 'green' }}
                                                timeLabels={{ d: (Languages.days), h: (Languages.hours), m: (Languages.min), s: (Languages.seconds) }}
                                            />
                                        </View>
                                    </View>
                                </View>
                            }
                        </ShimmerPlaceholder>
                    </View>
                </TouchableHighlight>
            </View >
        );
    }
}

export default function (props) {
    const { colors } = useTheme()
    const config = useSelector((state) => state.config);
    const loading = useSelector((state) => state.promo.isLoading)
    const dispatch = useDispatch()
    return <PromoListingCard {...props} colors={colors} loading={loading} config={config} dispatch={dispatch} />
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
        width: '100%',
        height: '20%'
    },
    imageStyle: {
        width: windowWidth - 40,
        height: (windowWidth - 40) * 0.50,
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