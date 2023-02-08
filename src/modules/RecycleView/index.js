import {get, isEmpty, isNumber} from 'lodash';
import {action, makeObservable, observable, observe} from 'mobx';
import {inject, observer} from 'mobx-react';
import React, {Component} from 'react';
import {View, Dimensions} from 'react-native';
import {RecyclerListView, DataProvider, LayoutProvider} from 'recyclerlistview';
import getData from '../../utils/getData';
import {Avatar, Text, Box, HStack, Spacer, VStack} from 'native-base';

const {width, height} = Dimensions.get('window');

const ViewTypes = {
  ODD: 1,
  Even: 2,
};

@inject('apistore')
@observer
export default class RecycleTestComponent extends React.Component {
  @observable value = [];

  constructor(args) {
    super(args);
    makeObservable(this);
  }
  _dataProvider = new DataProvider((r1, r2) => {
    return r1 !== r2;
  });

  _layoutProvider = new LayoutProvider(
    index => {
      if (index % 3 == 0) {
        return ViewTypes.ODD;
      } else {
        return ViewTypes.ODD;
      }
    },
    (type, dim) => {
      if (type == ViewTypes.Even) {
        dim.width = width;
        dim.height = 100;
      } else {
        dim.width = width / 2;
        dim.height = 100;
      }
    },
  );

  @action setData(data) {
    this.value = data;
  }

  componentDidMount() {
    const {data} = this.props.apistore;
    // console.log(data);
    this.setData(data);
  }

  //Given type and data return the view component
  _rowRenderer(type, data) {
    if (type == ViewTypes.Even) {
      return (
        <Box
          flex={1}
          borderWidth="1"
          borderRadius={'10'}
          borderColor="muted.800"
          py="2"
          maxW={width - 10}>
          <HStack space={[2, 3]} justifyContent="space-between">
            <Avatar
              size="48px"
              source={{
                uri: data.avatar,
              }}
            />
            <VStack>
              <Text color="coolGray.800" bold flexWrap={'wrap'}>
                {data.first_name} {data.last_name}
              </Text>
              <Text color="coolGray.600">{data.email}</Text>
            </VStack>
            <Spacer />
          </HStack>
        </Box>
      );
    } else {
      return (
        <Box
          borderWidth="1"
          borderRadius={'10'}
          borderColor="muted.600"
          mx={2}
          pl={['0', '4']}
          pr={['0', '5']}
          py="2">
          <HStack space={[2, 3]} justifyContent="space-between" px={3}>
            <Avatar
              size="48px"
              source={{
                uri: data.avatar,
              }}
            />
            <VStack>
              <Text color="coolGray.800" bold>
                {data.first_name}
              </Text>
              <Text color="coolGray.600">{data.last_name}</Text>
            </VStack>
            <Spacer />
          </HStack>
        </Box>
      );
    }
  }

  render() {
    return (
      <RecyclerListView
        isHorizontal={false}
        canChangeSize={true}
        //forceNonDeterministicRendering={true}
        layoutProvider={this._layoutProvider}
        dataProvider={this._dataProvider.cloneWithRows(this.value)}
        rowRenderer={this._rowRenderer}
      />
    );
  }
}
