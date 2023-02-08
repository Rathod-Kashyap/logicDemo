import {compact} from 'lodash';
import _ from 'lodash';
import React, {Component} from 'react';
import {View} from 'react-native';
import {Text} from 'native-base';
class lodashEx extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    arr = [0, 1, 2, , 4, 5, 6, false, NaN];
    let arr1 = [0, 1, 2, 4];
    let arr2 = _.difference(arr, arr1);
    console.log('arr', arr);
    console.log('arr2 concat', _.compact(arr2));
    return (
      <View>
        <Text>Text</Text>
      </View>
    );
  }
}

export default lodashEx;
