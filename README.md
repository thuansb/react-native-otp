# react-native-otp

[![npm version](https://badge.fury.io/js/react-native-otp.svg)](https://badge.fury.io/js/react-native-otp)
[![npm](https://img.shields.io/npm/dm/react-native-otp.svg?maxAge=2592000)]()
[![npm](https://img.shields.io/npm/dt/react-native-otp.svg?maxAge=2592000)]()   

OTP Input component for React Native

## Features

- The behavior is the same with the native input component, the only difference is the OTP UI
- Can use as `Controlled component (support clear OTP, autofill OTP)` and `Uncontrolled component`
- Easy to customize style
- No additional dependencies

## Preview

![](https://thumbs.gfycat.com/AccurateGentleAustraliankestrel-size_restricted.gif)

## Install

NPM

```npm install react-native-otp```

Yarn

```yarn add react-native-otp```

## Usage

1. Controlled component
```javascript
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import OTPInput from './otp';

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
```

1. Uncontrolled component
```javascript

     <OTPInput
          tintColor="#FB6C6A"
          offTintColor="#BBBCBE"
          otpLength={6}
        />

```

## Available props

| Name                           | Type             | Default        | Description           |
| ------------------------------ | ---------------- | -------------- | -------------------------------------------------------------------------------------------- |
| value                          | string           | undefined      | This value will be applied to the TextInput. Use this prop if you want a Controlled Component.             |
| onChange                       | function         | () => null     | On otp input change   |
| otpLength                      | number           | 6              | length of otp numbers |
| tintColor                      | string           | '#FB6C6A'      | active cell underline color       |
| offTintColor                   | string           | '#BBBCBE'      | cell under line color |
| containerStyle                 | object           | {}             | overide container style |
| cellStyle                      | object           | {}             | overide cell style |
| all other Text Input properties | | | Use this if you want to apply any other property to Text Input |   

## License
[MIT](https://opensource.org/licenses/mit-license.html)