/**
 * @format
 */
import 'react-native-gesture-handler';
import { AppRegistry, Text, TextInput,LogBox } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'
import Geolocation from '@react-native-community/geolocation';
import {  } from 'react-native';
Geolocation.setRNConfiguration({ authorizationLevel: 'always', skipPermissionRequests: false, });



LogBox.ignoreAllLogs()
console.warn('YellowBox is disabled.');
Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;
TextInput.defaultProps = TextInput.defaultProps || {}
TextInput.defaultProps.allowFontScaling = false
//AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => gestureHandlerRootHOC(App));