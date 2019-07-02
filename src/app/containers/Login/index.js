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
          <Text style={styles.text}>
            Share and discover good food and
            travel destinations.
          </Text>
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
  },
  text: {
    color: '#D8D8D8',
    fontFamily: 'SourceSansPro-Bold',
    fontSize: 20,
    textAlign: 'center',
    width: '90%'
  }
});
