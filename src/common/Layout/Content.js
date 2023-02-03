import React from 'react';
import {ScrollView, View, KeyboardAvoidingView} from 'react-native';
import Colors from '../theme/Color';

export default class Content extends React.Component {
  render() {
    const style = this.props.style ? this.props.style : [];
    if (this.props.keyboardAvoidingView) {
      return (
        <KeyboardAvoidingView
          style={[styles.container, style]}
          refreshControl={this.props.refreshControl}
          showsVerticalScrollIndicator={false}>
          <View
            behavior={'position'}
            enabled={true}
            style={[styles.container, style]}>
            {this.props.children}
          </View>
        </KeyboardAvoidingView>
      );
    }
    return (
      <ScrollView
        style={[styles.container, style]}
        refreshControl={this.props.refreshControl}
        showsVerticalScrollIndicator={false}>
        <View style={[styles.container, style]}>{this.props.children}</View>
      </ScrollView>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: Colors.Background,
  },
};
