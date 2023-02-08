import {
  Avatar,
  Box,
  Button,
  FlatList,
  FormControl,
  HStack,
  Input,
  Modal,
  Skeleton,
  Spacer,
  View,
  VStack,
} from 'native-base';
import React, {Component} from 'react';
import {RefreshControl, Text} from 'react-native';
import {Call} from '../../api';
import deleteData from '../../utils/deleteData';
import sendData from '../../utils/sendData';
import AppBarEx from '../nativeBase/AppBarEx';
import {clone, get, isEmpty, remove} from 'lodash';
import userData from '../../utils/userData';

class DisplaySkel extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    details: [],
    refresh: false,
    modalVisible: false,
    name: '',
    job: '',
    id: '',
  };

  delData = (idToDel, name, job) => {
    let arr1, arr2, index;
    deleteData(idToDel, name, job)
      .then(response => {
        console.log(idToDel);
        arr1 = clone(this.state.details);
        arr2 = remove(arr1, v => v.id == idToDel);
        this.setState({details: arr1});
        // arr1 = this.state.details.filter(v => {
        //   return v.id != idToDel;
        // });
        // this.setState({details: arr1});
      })
      .catch(error => {
        console.log(error);
      });
  };

  postData = () => {
    sendData(this.state.name, this.state.job)
      .then(response => {
        if (!isEmpty(response.data)) {
          this.state.details.push(response.data);
          this.setState({name: ''});
          this.setState({job: ''});
          this.setState({modalVisible: false});
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
  handleRefresh = () => {
    this.setState({refresh: false});
  };

  getUserData = () => {
    userData()
      .then(response => {
        console.log(response.data.data);
        if (!isEmpty(response.data.data)) {
          alert(get(response, 'data.data[0].first_name'));
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  openModal = () => {
    return (
      <Modal
        avoidKeyboard
        isOpen={this.state.modalVisible}
        onClose={() => {
          this.setState({modalVisible: false});
        }}
        justifyContent={'center'}>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Enter Detail</Modal.Header>
          <Modal.Body>
            <FormControl isRequired>
              <FormControl.Label>Name</FormControl.Label>
              <Input
                placeholder="Name"
                onChangeText={name => this.setState({name: name})}
              />
              <FormControl.Label>Job</FormControl.Label>
              <Input
                placeholder="Job"
                onChangeText={pass => this.setState({job: pass})}
              />
            </FormControl>
            <Modal.Footer>
              <View justifyContent={'space-between'}>
                <Button
                  onPress={() => {
                    if (!isEmpty(this.state.name) && !isEmpty(this.state.job)) {
                      this.postData();
                    } else {
                      alert('Please enter details');
                    }
                  }}>
                  Submit
                </Button>
              </View>
            </Modal.Footer>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    );
  };

  render() {
    return (
      <View>
        {/* <Button
          onPress={() => {
            this.setState({modalVisible: true});
          }}>
          Click Me
        </Button> */}
        <this.openModal />
        {this.state.refresh ? (
          <DisplaySkel />
        ) : (
          <FlatList
            refreshControl={
              <RefreshControl
                refreshing={this.state.refresh}
                onRefresh={this.handleRefresh}
              />
            }
            ListEmptyComponent={
              <View>
                <Text>No Data</Text>
              </View>
            }
            data={this.state.details}
            renderItem={({item}) => {
              return (
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
                    <VStack>
                      <Text
                        _dark={{
                          color: 'black',
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
                        {item.id}
                      </Text>
                      <HStack>
                        <Button
                          mx={5}
                          onPress={() =>
                            this.delData(item.id, item.name, item.job)
                          }>
                          Delete
                        </Button>
                        <Button mx={5} onPress={() => this.getUserData()}>
                          Show
                        </Button>
                      </HStack>
                    </VStack>
                    <Spacer />
                  </HStack>
                </Box>
              );
            }}
            keyExtractor={item => item.id}
          />
        )}
      </View>
    );
  }
}

export default DisplaySkel;
