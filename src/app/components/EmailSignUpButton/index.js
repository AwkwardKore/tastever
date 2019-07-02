import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native';
import {Button} from '@shoutem/ui';

export default class EmailSignUpButton extends Component {
  render() {
    return(
      <Button activeOpacity={0.8} styleName='clear' style={styles.button}>
        <Text style={styles.text}>SIGN UP WITH EMAIL</Text>
      </Button>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#27CC9D',
    borderRadius: 10,
    height: 44,
    width: '80%'
  },
  text: {
    color: '#ffffff',
    fontFamily: 'SourceSansPro-Bold',
    fontSize: 18
  }
});
