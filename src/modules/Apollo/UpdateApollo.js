import {ApolloClient, ApolloConsumer, gql} from '@apollo/client';
import {action, makeObservable, observable} from 'mobx';
import {observer} from 'mobx-react';
import {
  Box,
  FlatList,
  HStack,
  VStack,
  Text,
  View,
  Spacer,
  Avatar,
} from 'native-base';
import React, {Component} from 'react';
import {ActivityIndicator} from 'react-native';
import ApolloClientApi from '../../utils/apiClient';
import client from '../../utils/apiClient';
import {AddFruit, upDateFruit, rick, p} from './QueryApi';

@observer
class UpdateApollo extends Component {
  @observable data = [];
  @observable page = 1;
  @observable refresh = false;
  @observable end = false;
  constructor(props) {
    super(props);
    makeObservable(this);
  }
  @action setData = d => {
    this.data.push(d);
  };
  @action incP = () => {
    this.handleEnd(true);
    this.page = this.page + 1;
    setTimeout(() => {
      this.callAPi();
    }, 1000);
  };

  @action handleEnd = val => {
    this.end = val;
  };
  @action handleRef = () => {
    this.refresh = true;
    this.data = [];
    this.page = 1;
    this.callAPi();
    this.refresh = false;
  };
  componentDidMount() {
    this.callAPi();
  }
  callAPi = () => {
    p.then(result => {
      // console.log(result.data.updateFruit);
      this.setData(result.data.updateFruit);
      this.handleEnd(false);
    }).catch(err => {
      console.log('Error', JSON.stringify(err));
      this.handleEnd(false);
    });
  };
  render() {
    console.log(this.data);
    return (
      <>
        <FlatList
          onEndReached={() => {}}
          refreshing={this.refresh}
          onRefresh={() => this.handleRef()}
          ListEmptyComponent={
            <View>
              <Text>No Data</Text>
            </View>
          }
          data={this.data}
          renderItem={({item}) => (
            <Box
              borderWidth="1"
              borderRadius={'10'}
              _dark={{
                borderColor: 'muted.50',
              }}
              borderColor="muted.800"
              pl={['0', '4']}
              pr={['0', '5']}
              py="2">
              <HStack space={[2, 3]} justifyContent="space-between" px={3}>
                {/* <Avatar
                  source={{uri: item.image}}
                  onPress={() => alert('img')}
                /> */}
                <VStack>
                  <Text
                    onPress={() => alert(item.fruit_name)}
                    _dark={{
                      color: 'warmGray.50',
                    }}
                    color="coolGray.800"
                    bold>
                    {item.fruit_name}
                  </Text>
                  {/* <Text
                    color="coolGray.600"
                    _dark={{
                      color: 'warmGray.200',
                    }}>
                    {item.species} {'->'}
                    {item.status}
                  </Text> */}
                </VStack>
                {/* <Text fontSize={'10'} justifyContent={'flex-end'} py={3}>
                  {item.created}
                </Text> */}
                <Spacer />
              </HStack>
            </Box>
          )}
          // keyExtractor={item => item.id}
        />
        {this.end ? <ActivityIndicator /> : null}
      </>
    );
  }
}

export default UpdateApollo;
