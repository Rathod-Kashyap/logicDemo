import React, {Component} from 'react';
import {
  Avatar,
  Text,
  View,
  Box,
  HStack,
  Spacer,
  VStack,
  Fab,
  FlatList,
  FormControl,
  Input,
} from 'native-base';
import {RefreshControl} from 'react-native';
import DisplaySkel from '../login/DisplaySkel';
import getData from '../../utils/getData';
import axios from 'axios';
import {get, isEmpty} from 'lodash';
import {action, makeObservable, observable} from 'mobx';
import {inject, observer} from 'mobx-react';
import SkelFlat from './skelFlat';

@inject('apistore')
@observer
class ApiDemo extends Component {
  @observable refresh = false;
  @observable data = [];

  constructor(props) {
    super(props);
    makeObservable(this);
  }
  state = {};

  @action setData(d) {
    this.data = d;
  }
  @action setRefresh(d) {
    this.refresh = d;
  }
  callApi = () => {
    getData()
      .then(response => {
        const data = get(response, 'data.data', []);

        const {apistore} = this.props;
        if (!isEmpty(data)) {
          this.setData(data);
          this.setRefresh(false);
          apistore.setData(this.data);
        } else {
          // to do
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.callApi();
    this.props.navigation.setParams({
      title: 'FlatList',
    });
  }

  handleRefresh = () => {
    // const {apiStore} = this.props;
    // this.setState({refresh: true});
    // this.setState({data: []});
    this.setRefresh(true);

    this.callApi();
  };

  render() {
    const {data, refresh} = this.props.apistore;
    // console.log(data);
    // console.log('-------------');
    return (
      <View>
        {this.refresh ? (
          <SkelFlat />
        ) : (
          <FlatList
            refreshControl={
              <RefreshControl
                refreshing={refresh}
                onRefresh={this.handleRefresh}
              />
            }
            ListEmptyComponent={
              <View>
                <Text>No Data</Text>
              </View>
            }
            data={data}
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
                  <Avatar
                    size="48px"
                    source={{
                      uri: item.avatar,
                    }}
                  />
                  <VStack>
                    <Text
                      _dark={{
                        color: 'warmGray.50',
                      }}
                      color="coolGray.800"
                      bold>
                      {item.first_name} {item.last_name}
                    </Text>
                    <Text
                      color="coolGray.600"
                      _dark={{
                        color: 'warmGray.200',
                      }}>
                      {item.email}
                    </Text>
                  </VStack>
                  <Spacer />
                </HStack>
              </Box>
            )}
            keyExtractor={item => item.id}
          />
        )}
        {/* <Fab
          icon={createIcon}
          renderInPortal={false}
          mt="0"
          size="lg"
          color="emerald.500"
          onPress={() => {
            this.handleRefresh();
          }}
        /> */}
      </View>
    );
  }
}

export default ApiDemo;
