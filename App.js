import NetInfo from "@react-native-community/netinfo";
import React from "react";
import { Alert, Platform } from "react-native";
import RNExitApp from 'react-native-exit-app';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import CustomStatusBar from './src/common/CustomStatusBar';
import Navigation from './src/navigation/Navigation';
import Languages from './src/common/Languages';
import { persistor, store } from './src/redux';

class App extends React.Component {
  constructor(props) {
    super(props);
     isNetworkDialog = false;
  }
  componentDidMount = () => {
    this.logApp();
  };
  logApp = () => {
    NetInfo.addEventListener(state => {
      if (!state.isConnected)
        this.showNetworkAlert(state.isConnected);
    });
  };
  showNetworkAlert = (connected) => {
    if (!this.isNetworkDialog) {
      this.isNetworkDialog = true;
      Alert.alert( 
        Languages.NetworkError,
        Languages.NetworkErrorMessage,
        [
          {
            text: "Exit",
            onPress: () => {
              this.isNetworkDialog = false;
              RNExitApp.exitApp();
            },
            style: "cancel"
          },
          {
            text: "Retry", onPress: () => {
              NetInfo.fetch().then(state => {
                if (state.isConnected)
                  this.isNetworkDialog = false;
                else
                {
                  this.isNetworkDialog = false;
                  this.showNetworkAlert(state.isConnected);}
              });
            }
          }
        ]
      );
    }
  }
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          {Platform.OS == 'android' && (<CustomStatusBar translucent={false} barStyle={'light-content'} backgroundColor={'#06B160'} />)}
          <Navigation />
        </PersistGate>
      </Provider>
    );
  }
}
export default App;

