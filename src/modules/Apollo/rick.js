import {ApolloClient, ApolloConsumer, gql} from '@apollo/client';
import {Query, Subscription} from '@apollo/client/react/components';
import {isEmpty} from 'lodash';
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
import {sub} from 'react-native-reanimated';
import ApolloClientApi, {ApolloSub} from '../../utils/apiClient';
import client from '../../utils/apiClient';
import {AddFruit, upDateFruit, rick, subTodo, subValue} from './QueryApi';
let arr = [];

@observer
class GraphqlEx extends Component {
  @observable data = [];
  @observable page = 1;
  @observable refresh = false;
  @observable end = false;
  constructor(props) {
    super(props);
    makeObservable(this);
  }
  @action setData = d => {
    //const arr = this.data.splice(0, 1);
    // this.data = [...arr, ...d];
    if (!isEmpty(d)) {
      this.data = [...this.data, ...d];
    }
    // this.data.push(d);
  };
  @action incP = () => {
    this.handleEnd(false);
    this.page = this.page + 1;
    // setTimeout(() => {
    //   // this.callAPi();
    //   this.handleEnd(false);
    // }, 1000);
  };

  @action handleEnd = val => {
    this.end = val;
  };
  @action handleRef = () => {
    this.refresh = true;
    this.data = [];
    arr = [];
    this.page = 1;
    //this.callAPi();
    this.refresh = false;
  };
  componentDidMount() {
    //this.callAPi();
  }
  callAPi = () => {
    //   ApolloClientApi.client
    //     .query({
    //       query: rick,
    //       variables: {
    //         page: this.page,
    //       },
    //     })
    //     .then(result => {
    //       console.log(result.data);
    //       this.setData(result.data.characters.results);
    //       this.handleEnd(false);
    //     })
    //     .catch(err => {
    //       console.log('Error', JSON.stringify(err, null, 2));
    //       this.handleEnd(false);
    //     });
    // subTodo
    //   .then(result => {
    //     console.log('subscribe', result);
    //   })
    //   .catch(err => {
    //     console.log('TODO Error', err);
    //   });
  };

  state = {};
  render() {
    // console.log(this.data);
    return (
      <>
        <Subscription subscription={subValue}>
          {({loading, data, error}) => {
            if (loading) {
              console.log('loading');
            }
            if (error) console.log('Error', error);
            if (data) console.log('first');
          }}
        </Subscription>
      </>
    );
  }
}

export default GraphqlEx;

{
  /* <Query query={rick} variables={{page: this.page}}>
          {({loading, error, data}) => {
            if (loading) {
              return null;
            }
            if (error) console.log('error', error);
            // this.setData(data.characters.results);
            // console.log('DATA', data);
            arr.push(...data.characters.results);
            return (
              <>
                <FlatList
                  onEndReached={() => {
                    this.incP();
                  }}
                  refreshing={this.refresh}
                  onRefresh={() => this.handleRef()}
                  ListEmptyComponent={
                    <View>
                      <Text>No Data</Text>
                    </View>
                  }
                  data={arr}
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
                      <HStack
                        space={[2, 3]}
                        justifyContent="space-between"
                        px={3}>
                        <Avatar
                          source={{uri: item.image}}
                          onPress={() => alert('img')}
                        />
                        <VStack>
                          <Text
                            onPress={() => alert(item.name)}
                            _dark={{
                              color: 'warmGray.50',
                            }}
                            color="coolGray.800"
                            bold>
                            {item.name}
                          </Text>
                          <Text
                            color="coolGray.600"
                            _dark={{
                              color: 'warmGray.200',
                            }}>
                            {item.species} {'->'}
                            {item.status}
                          </Text>
                        </VStack>
                        <Text
                          fontSize={'10'}
                          justifyContent={'flex-end'}
                          py={3}>
                          {item.created}
                        </Text>
                        <Spacer />
                      </HStack>
                    </Box>
                  )}
                  keyExtractor={item => item.id}
                />
                {/* <ActivityIndicator animating={this.end} />} */
}
// </>
// );
// }} */}
// </Query>
