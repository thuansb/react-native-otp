# react-native-otp

[![npm version](https://badge.fury.io/js/react-native-otp.svg)](https://badge.fury.io/js/react-native-otp)

OTP Input component for React Native

## Features

- The behavior is the same with the native input component, the only difference is the OTP UI
- Control value from outside (clear OTP, autofill OTP)
- Easy to customize style
- No additional dependencies

## Demo

## Install

NPM

```npm install --save react-native-otp```

Yarn

```yarn add react-native-otp```

## Usage

```javascript
import OTPInput from 'react-native-otp';


handleOTPChange = (val) => {
    console.log(`OTP: ${val}`);
}

render() {
   return (
        <MyOTP
            onChange={this.handleOTPChange}
            tintColor="#FB6C6A"
            offTintColor="#BBBCBE"
            otpLength={6}
        />
   )
}

```

## Available props

| Name                           | Type             | Default        | Description           |
| ------------------------------ | ---------------- | -------------- | -------------------------------------------------------------------------------------------- |
| value                          | string           | ''             | OTP value             |
| onChange                       | function         | () => null     | On otp input change   |
| otpLength                      | number           | 6              | length of otp numbers |
| tintColor                      | string           | '#FB6C6A'      | active cell underline color       |
| offTintColor                   | string           | '#BBBCBE'      | cell under line color |
| containerStyle                 | object           | {}             | overide container style |
| cellStyle                      | object           | {}             | overide cell style |

