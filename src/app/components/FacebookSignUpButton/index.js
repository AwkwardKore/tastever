import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native';
import {Button} from '@shoutem/ui';

export default class FacebookSignUpButton extends Component {
  render() {
    return(
      <Button activeOpacity={0.8} styleName='clear' style={styles.button}>
        <Text style={styles.text}>SIGN UP WITH FACEBOOK</Text>
      </Button>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#4267B2',
    borderRadius: 10,
    height: 44,
    width: '80%'
  },
  text: {
    color: '#ffffff',
    fontFamily: 'SourceSansPro-Bold',
    fontSize: 14
  }
});
