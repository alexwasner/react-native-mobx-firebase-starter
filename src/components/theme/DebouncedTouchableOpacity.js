import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'

export default class DebouncedTouchableOpacity extends Component {
  constructor(props) {
    super(props)
    this.debounce = false
  }

  render() {
    return (
      <TouchableOpacity
        {...this.props}
        onPress={() => {
          if (this.debounce) {
            return
          } else {
            this.props.onPress()
          }
          this.debounce = setTimeout(() => {
            this.debounce = false
          }, 250)
        }}
      />
    )
  }
}

DebouncedTouchableOpacity.defaultProps = {
  //Add any missing prop that you want to pass to TouchableOpacity here
  onPress: () => {},
  onPressIn: () => {},
  onPressOut: () => {},
  style: {},
  disabled: false,
  activeOpacity: 0.8
}
