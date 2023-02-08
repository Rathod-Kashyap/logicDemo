import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Actions} from 'react-native-router-flux';

class CustomTabB extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 10,
        }}>
        <Text style={{color: 'black'}} onPress={() => Actions.graph()}>
          APOLLO
        </Text>
        <Text style={{color: 'black'}} onPress={() => Actions.todo()}>
          TODO
        </Text>
        <Text style={{color: 'black'}} onPress={() => Actions.recycle()}>
          Recycle
        </Text>
        {/* <Text style={{color: 'black'}} onPress={() => Actions.api()}>
          FlatList
        </Text>
        <Text style={{color: 'black'}} onPress={() => Actions.CheckBox()}>
          CheckBox
        </Text> */}
        <Text style={{color: 'black'}} onPress={() => Actions.display()}>
          display
        </Text>
      </View>
    );
  }
}

export default CustomTabB;
