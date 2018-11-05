import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';
import PropTypes from 'prop-types';

class OTPInput extends Component {

  static propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    otpLength: PropTypes.number,
    tintColor: PropTypes.string,
    offTintColor: PropTypes.string,
    containerStyle: PropTypes.object,
    cellStyle: PropTypes.object,
  }

  static defaultProps = {
    value: '',
    onChange: () => null,
    otpLength: 6,
    tintColor: '#FB6C6A',
    offTintColor: '#BBBCBE',
    containerStyle: {},
    cellStyle: {}
  };

  textInput = null;

  componentDidMount = () => {
    this.textInput.focus();
  };

  handleChangeText = (val) => {
    const { onChange } = this.props;
    onChange(val);
  };

  render() {
    const {
      value,
      containerStyle,
      cellStyle,
      tintColor,
      offTintColor,
      otpLength,
      ...otherProps
    } = this.props;

    return (
      <View>
        <TextInput
          ref={input => (this.textInput = input)}
          onChangeText={this.handleChangeText}
          style={{ width: 0, height: 0 }}
          value={value}
          minLength={otpLength}
          maxLength={otpLength}
          returnKeyType="done"
          {...otherProps}
        />
        <View style={[styles.container, containerStyle]}>
          {Array(otpLength)
            .fill()
            .map((_, index) => (
              <Text
                key={index}
                style={[
                  styles.cell,
                  cellStyle,
                  {
                    borderColor:
                      index === value.length ? tintColor : offTintColor
                  }
                ]}
                onPress={() => this.textInput.focus()}
              >
                {value && value.length > index ? value[index] : " "}
              </Text>
            ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cell: {
    paddingVertical: 11,
    borderBottomWidth: 1.5,
    width: 40,
    margin: 5,
    textAlign: 'center',
    fontSize: 16,
    color: '#000'
  }
});

export default OTPInput;

