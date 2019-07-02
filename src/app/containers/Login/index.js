import React, {Component} from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {ImageBackground, Overlay} from '@shoutem/ui';

const background = require('../../../assets/images/backgrounds/login-background.png');

export default class Login extends Component {
  render() {
    return (
      <ImageBackground
        source={background}
        style={styles.background}
      >
        <StatusBar barStyle="light-content" />
        <Overlay style={styles.container}>
        </Overlay>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1
  },
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    height: '100%',
    width: '100%'
  }
});
