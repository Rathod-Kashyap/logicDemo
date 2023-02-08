import axios from 'axios';
import {action, autorun, makeObservable, observable} from 'mobx';
import {inject, observer} from 'mobx-react';
import {
  ArrowUpIcon,
  Box,
  HamburgerIcon,
  HStack,
  Icon,
  IconButton,
  PlayIcon,
  StatusBar,
  SunIcon,
  View,
  Text,
  Spacer,
  SearchIcon,
  Modal,
  Button,
  FormControl,
  Input,
} from 'native-base';
import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import DisplaySkel from '../login/DisplaySkel';

@observer
@inject('userStore')
class AppBarEx extends Component {
  @observable logBtn = true;
  constructor(props) {
    super(props);
    //makeObservable(this);
  }
  state = {
    modalVisible: false,
    details: [],
    name: '',
    job: '',
  };

  componentDidMount() {
    // if (Actions.currentScene != 'login') {
    //   this.setNavBtnT();
    // }
    // setTimeout(() => {
    //   if (Actions.currentScene == 'todo') {
    //     this.setNavBtnT();
    //     this.props.navigation.setParams({
    //       title: 'Home',
    //     });
    //   } else {
    //     this.setNavBtnT();
    //   }
    // }, 2000);
  }

  @action setNavBtn = () => {
    this.logBtn = false;
  };
  @action setNavBtnT = () => {
    this.logBtn = true;
  };
  delData = () => {
    axios({
      method: 'delete',
      url: ' https://reqres.in/api/users/2',
    })
      .then(response => {
        console.log(response);
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
            <FormControl>
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
                    this.sendData();
                  }}>
                  Submit
                </Button>
                {/* <Button
                  onPress={() => {
                    this.delData();
                  }}>
                  Delete
                </Button> */}
              </View>
            </Modal.Footer>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    );
  };

  handleLogout = () => {
    const {userStore} = this.props;
    userStore.updateData('', '');
    Actions.reset('login');
  };

  render() {
    return (
      <>
        <StatusBar />
        <Box
          justifyContent={'space-between'}
          h={'50px'}
          bg="#deb887"
          borderBottomRadius={'md'}>
          <HStack flex={1} alignItems="center">
            {/* <SunIcon size="5" color="emerald.500" mx={'10px'} /> */}
            <Text fontSize={'xl'}>{this.props.title}</Text>
            <Spacer />
            <HStack
              flex={1}
              justifyContent={'space-evenly'}
              alignItems={'center'}>
              {this.logBtn && (
                <Button
                  onPress={() => {
                    // this.setState({modalVisible: true});
                    this.handleLogout();
                  }}>
                  Logout
                </Button>
              )}

              <SearchIcon size="4" color="emerald.500" />
            </HStack>
          </HStack>
        </Box>
        <this.openModal />
      </>
    );
  }
}
export default AppBarEx;

// <Modal
// isOpen={this.state.modalVisible}
// onClose={() => this.setState({modalVisible: false})}
// avoidKeyboard
// justifyContent="center"
// size="lg">
// <Modal.Content>
//   <Modal.CloseButton />
//   <Modal.Header>Forgot Password?</Modal.Header>
//   <Modal.Body>
//     <FormControl mt="3">
//       <FormControl.Label>Email</FormControl.Label>
//       <Input type="text" />
//       <FormControl.Label>Password</FormControl.Label>
//       <Input type="password" />
//     </FormControl>
//   </Modal.Body>
//   <Modal.Footer>
//     <Button flex="1" onPress={() => {}}>
//       Proceed
//     </Button>
//   </Modal.Footer>
// </Modal.Content>
// </Modal>
