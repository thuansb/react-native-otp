import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import OTPInput from 'react-native-otp';

export default class App extends React.Component {

  state = {
    otp: ''
  }

  handleOTPChange = (otp) => {
    this.setState({ otp })
  }

  clearOTP = () => {
    this.setState({ otp: undefined })
  }

  autoFill = () => {
    this.setState({ otp: '221198' })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Enter OTP password</Text>

        <OTPInput
          value={this.state.otp}
          onChange={this.handleOTPChange}
          tintColor="#FB6C6A"
          offTintColor="#BBBCBE"
          otpLength={6}
        />

        <Button onPress={this.clearOTP} title="Clear" />
        <Button onPress={this.autoFill} title="Auto fill" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginBottom: 15
  }
});
