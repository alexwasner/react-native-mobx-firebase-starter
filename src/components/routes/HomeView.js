import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import styles from '../../styles/HomeStyles'
import { inject, observer } from 'mobx-react'
import Button from '../theme/ButtonView'
import { Navigation } from 'react-native-navigation'

@inject('appState')
@observer
export default class HomeView extends Component {
  static options() {
    return {
      _statusBar: {
        backgroundColor: 'transparent',
        style: 'dark',
        drawBehind: true
      },
      topBar: {
        title: {
          text: 'Home'
        },
        largeTitle: {
          visible: true,
        },
        drawBehind: true,
        visible: true,
        animate: true
      }
    };
  }

  render() {
    return (
      <View style={styles.bar}>
        <View style={styles.root}>
          <Button title='Switch to tab based app' onPress={this.onClickSwitchToTabs} />
          <Button title='Register' onPress={this.onClickPush('App.Register')} />
          <Button title='Login' onPress={this.onClickPush('App.Login')} />
          <Button title='Show Modal' onPress={this.showModal} />
          <Text style={styles.footer}>{`this.props.componentId = ${this.props.componentId}`}</Text>
        </View>
      </View>
    );
  }

  onClickSwitchToTabs = () => {
    Navigation.setRoot({
      root: {
        bottomTabs: {
          id: 'BottomTabs',
          children: [
            {
              stack: {
                id: 'TAB1_ID',
                children: [
                  {
                    component: {
                      name: 'App.Home',
                      passProps: {
                        text: 'This is tab 1',
                        myFunction: () => 'Hello from a function!'
                      },
                      options: {
                        bottomTab: {
                          text: 'Tab 1',
                          icon: require('../../assets/images/one.png'),
                          selectedIcon: require('../../assets/images/one.png'),
                        }
                      }
                    }
                  }
                ],
                options: {
                  topBar: {
                    visible: false
                  }
                }
              }
            },
            {
              stack: {
                children: [
                  {
                    component: {
                      name: 'App.Home',
                      passProps: {
                        text: 'This is tab 2'
                      }
                    }
                  }
                ],
                options: {
                  bottomTab: {
                    text: 'Tab 2',
                    icon: require('../../assets/images/two.png'),
                  }
                }
              }
            },
            {
              component: {
                name: 'App.Home',
                passProps: {
                  text: 'This is tab 3',
                  myFunction: () => 'Hello from a function!'
                },
                options: {
                  topBar: {
                    visible: true,
                    animate: false
                  },
                  bottomTab: {
                    text: 'Tab 3',
                    icon: require('../../assets/images/one.png'),
                    selectedIcon: require('../../assets/images/one.png')
                  }
                }
              }
            }
          ],
          options: {
            bottomTabs: {
              titleDisplayMode: 'alwaysShow',
            }
          }
        }
      }
    });
  }

  onClickPush = (link) => async () => {
    await Navigation.push(this.props.componentId, {
      component: {
        name: link,
      }
    });
  }

  showModal = async () => {
    await Navigation.showModal({
      stack: {
        children: [
          {
            component: {
              name: 'App.Home'
            }
          }
        ]
      }
    });
  }
}