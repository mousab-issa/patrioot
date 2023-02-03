
import React, { useRef, useEffect, Text } from 'react';
import LottieView from 'lottie-react-native';
import Constants from './Constants';


const CustomLottieIcon = ({ start, styles, name }) => {
    const gameRef = useRef(null);

    const StartAnimation = () => {
        gameRef.current.play();
    }

    const ResetAnimation = () => {
        gameRef.current.reset();
    }

    useEffect(() => {

        if (start) {
            StartAnimation();
        }
        else if (!start) {
            ResetAnimation();
        }

    },[start])


    if (name === 'LoadingDelivery') {
        return (
            <LottieView
                style={{
                    height: Constants.ResponsiveSize.f30,
                    width: Constants.ResponsiveSize.f30
                }}
                source={require(`../../assets/animations/LoadingDelivery.json`)}
                ref={gameRef}
            />
        );
    } else if (name === 'LoadingDeliveryPin') {
        return (

            <LottieView
                style={{
                    height: Constants.ResponsiveSize.f50,
                    width: Constants.ResponsiveSize.f50
                }}
                source={require(`../../assets/animations/LoadingDeliveryPin.json`)}
                ref={gameRef}
            />
        );

    } else if (name === 'LoadingPickup') {
        return (
            <LottieView
                style={{
                    height: Constants.ResponsiveSize.f30,
                    width: Constants.ResponsiveSize.f30
                }}
                source={require(`../../assets/animations/LoadingPickup.json`)}
                ref={gameRef}
            />
        );

    } else if (name === 'LoadingPickupIcon') {

        return (

            <LottieView
                style={{
                    height: Constants.ResponsiveSize.f50,
                    width: Constants.ResponsiveSize.f50
                }}
                source={require(`../../assets/animations/LoadingPickupIcon.json`)}
                ref={gameRef}
            />
        );
    }

    return (
        <Text>No Icon found</Text>
    );
}


export default CustomLottieIcon;

