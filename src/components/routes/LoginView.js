import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import styles from '../../styles/routes/LoginViewStyles'
import {inject, observer} from 'mobx-react'
import LoginSubView from '../theme/LoginSubView'
import { Navigation } from 'react-native-navigation'

@inject ('user')
@observer
export default class LoginView extends Component {
  static options() {
    return {
      topBar: {
        title: {
          text: 'Login',
        },
      }
    };
  }

  constructor() {
    super();
    this.state = {
      loading: false,
    }
  }

  onSubmit = (username, password) => {
    this.setState({ loading: true })
    this.props.user.login(username, password).then(() => {
      this.setState({ loading: false })
      Navigation.pop(this.props.componentId)
    })
  }
  
  render() {
    return (
      <View style={styles.container}>
        <LoginSubView onSubmit={this.onSubmit} loading={this.state.loading}/>
	    </View>
    );
  }
}