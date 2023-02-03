import React from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, StatusBar, Platform, NativeModules } from 'react-native';

const { StatusBarManager } = NativeModules;
var STATUSBAR_HEIGHT = Platform.OS == 'ios' ?
    StatusBarManager.getHeight((statusBarHeight) => {
        STATUSBAR_HEIGHT = statusBarHeight.height
    }) :
    0;

const CustomStatusBar = props => {
    return (
        <View style={{ width: "100%", height: STATUSBAR_HEIGHT, backgroundColor: props.backgroundColor }}>
            <StatusBar translucent={props.translucent} barStyle={props.barStyle} backgroundColor={props.backgroundColor} />
        </View>
    );
};

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(CustomStatusBar);


const styles = StyleSheet.create({

});

