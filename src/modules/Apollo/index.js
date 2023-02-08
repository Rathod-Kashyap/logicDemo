import {Button} from 'native-base';
import {Component} from 'react';
import React, {View} from 'react-native';
import {Actions} from 'react-native-router-flux';

class MainApollo extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <View
        style={{
          alignSelf: 'center',
          flex: 1,
          justifyContent: 'center',
        }}>
        <Button style={{margin: 5}} onPress={() => Actions.rickAndMorty()}>
          Rick & Morty
        </Button>
        <Button style={{margin: 5}} onPress={() => Actions.updateFruit()}>
          Update Fruit
        </Button>
        <Button style={{margin: 5}} onPress={() => Actions.addFruit()}>
          Add Fruit
        </Button>
      </View>
    );
  }
}

export default MainApollo;
