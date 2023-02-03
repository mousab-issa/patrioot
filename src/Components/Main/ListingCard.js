import { useTheme } from "@react-navigation/native";
import React, { Component } from "react";
import {
    Dimensions,
    I18nManager,
    ImageBackground,
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import { useDispatch, useSelector } from "react-redux";
import Constants from './../../common/Constants';
import Colors from './../../theme/colors';


const BORDER_RADIUS = 16
const BOTTOM_BORDER_RADIUS = 0

const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

class ListingCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
        //    isLoaded: false,
        }
    }

    componentDidMount() {
        // this.timeoutHandle = setTimeout(() => {
        //     clearTimeout(this.timeoutHandle);
        //     this.setState({
        //         isLoaded: true
        //     })
        // }, 1000);
    }


    render() {
        const { config, isLoading } = this.props

        return (
            <View style={styles.container}>
                <TouchableHighlight
                    displayUntilPressOut={true}
                    onPress={this.props.onPress} underlayColor="none">
                    <View style={styles.outerStyle}>
                        <ShimmerPlaceholder visible={this.props.isLoading} height={windowWidth * 0.60}
                            isInteraction={false} style={{ borderRadius: BORDER_RADIUS, }}
                            width={windowWidth - 40}>
                            <ImageBackground source={require("./../../../assets/images/grey-image.jpg")}
                                style={styles.imageStyle}
                                imageStyle={{ borderTopLeftRadius: BORDER_RADIUS, borderTopRightRadius: BORDER_RADIUS, borderBottomLeftRadius: this.props.hasText ? BOTTOM_BORDER_RADIUS : BORDER_RADIUS, borderBottomRightRadius: this.props.hasText ? BOTTOM_BORDER_RADIUS : BORDER_RADIUS }}>
                                <ImageBackground source={{ uri: this.props.img }}
                                    style={styles.imageStyle}
                                    imageStyle={{ borderTopLeftRadius: BORDER_RADIUS, borderTopRightRadius: BORDER_RADIUS, borderBottomLeftRadius: this.props.hasText ? BOTTOM_BORDER_RADIUS : BORDER_RADIUS, borderBottomRightRadius: this.props.hasText ? BOTTOM_BORDER_RADIUS : BORDER_RADIUS }}>
                                </ImageBackground>
                            </ImageBackground>
                            {this.props.hasText &&
                                <View style={styles.cardShadow}>
                                    <View style={styles.cardContainer}>
                                        <Text style={styles.heading}>{this.props.title}</Text>
                                        <Text style={styles.details}>{this.props.content}</Text>
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
    const dispatch = useDispatch()
    return <ListingCard {...props} colors={colors} config={config} dispatch={dispatch} />
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        paddingTop: Constants.ResponsiveSize.f5,
        paddingBottom: Constants.ResponsiveSize.f7,
    },
    image: {
        width: '100%',
        height: '20%'
    },
    imageStyle: {
        width: windowWidth - 40,
        height: (windowWidth - 40) * 0.50
    },
    cardShadow: {
        borderBottomEndRadius: BORDER_RADIUS,
        borderBottomLeftRadius: BORDER_RADIUS,
        backgroundColor: 'transparent',
    },
    cardContainer: {
        paddingHorizontal: 15,
        paddingBottom: 15,
        backgroundColor: '#fff',
        borderBottomEndRadius: BORDER_RADIUS,
        borderBottomLeftRadius: BORDER_RADIUS,
        borderColor: '#ddd',
        borderWidth: 0.5,
        borderTopWidth: 0,
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
    outerStyle: {
        borderRadius: BORDER_RADIUS,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
});