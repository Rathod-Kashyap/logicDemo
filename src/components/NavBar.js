import {Box, HStack, MoonIcon} from 'native-base';
import React, {Component} from 'react';
import {Text} from 'react-native';

class NavBar extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <HStack justifyContent={'space-between'} m="5">
        <Text style={{color: 'black', fontFamily: 'MontBlanc-Trial-Black'}}>
          Hi, Piko!
        </Text>
        <MoonIcon size="lg" />
      </HStack>
    );
  }
}

export default NavBar;
