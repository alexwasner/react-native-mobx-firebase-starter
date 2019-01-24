import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Platform, ColorPropType, TouchableNativeFeedback, TouchableOpacity, View, Text } from 'react-native';
import { Navigation } from 'react-native-navigation';
import styles from '../../styles/theme/ButtonViewStyles'

export default class ButtonView extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    accessibilityLabel: PropTypes.string,
    color: ColorPropType,
    disabled: PropTypes.bool,
    hasTVPreferredFocus: PropTypes.bool,
    onPress: PropTypes.func,
    onPressIn: PropTypes.func,
    testID: PropTypes.string,
  };

  render() {
    const {
      accessibilityLabel,
      color,
      onPress,
      onPressIn,
      title,
      hasTVPreferredFocus,
      disabled,
      testID,
    } = this.props;
    const buttonStyles = [styles.button];
    const textStyles = [styles.text];

    if (color) {
      if (Platform.OS === 'ios') {
        textStyles.push({color: color});
      } else {
        buttonStyles.push({backgroundColor: color});
      }
    }

    const accessibilityTraits = ['button'];
    if (disabled) {
      buttonStyles.push(styles.buttonDisabled);
      textStyles.push(styles.textDisabled);
      accessibilityTraits.push('disabled');
    }

    const formattedTitle =
      Platform.OS === 'android' ? title.toUpperCase() : title;
    let Touchable =
      Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

    if (typeof onPressIn === 'function') {
      Touchable = Navigation.TouchablePreview;
    }

    return (
      <Touchable
        accessibilityComponentType='button'
        accessibilityLabel={accessibilityLabel}
        accessibilityTraits={accessibilityTraits}
        hasTVPreferredFocus={hasTVPreferredFocus}
        testID={testID}
        disabled={disabled}
        onPress={onPress}
        onPressIn={onPressIn}>
        <View style={buttonStyles}>
          <Text style={textStyles} disabled={disabled}>
            {formattedTitle}
          </Text>
        </View>
      </Touchable>
    );
  }
}