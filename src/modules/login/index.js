import React, {Component} from 'react';
import {Text} from 'react-native';
import {VStack, FormControl, Input, Button} from 'native-base';
import {isEmpty} from 'lodash';
import {inject, observer} from 'mobx-react';
import {action, computed, makeObservable, observable} from 'mobx';
import userStore from '../Storage/UserStore';
import {Actions} from 'react-native-router-flux';

@inject('userStore')
@observer
class Login extends Component {
  @observable email = '';
  @observable Password = '';
  constructor(props) {
    super(props);
  }
  @action upEmail = em => {
    this.email = em;
  };
  @action upPass = em => {
    this.Password = em;
  };

  componentDidMount() {
    // console.log('login user', this.props);
    const {userStore} = this.props;
    setTimeout(() => {
      this.checkUserLogin();
    }, 3000);
  }
  checkUserLogin() {
    const {userStore} = this.props;

    if (!isEmpty(userStore.Password) && !isEmpty(userStore.email)) {
      Actions.reset('tabbar');
    }
  }

  loginAcc = () => {
    const {userStore} = this.props;
    if (!isEmpty(this.email) && !isEmpty(this.Password)) {
      userStore.updateData(this.email, this.Password);
      this.email = '';
      this.Password = '';
      this.checkUserLogin();
    }
  };
  render() {
    return (
      <VStack flex={1} justifyContent={'center'} alignSelf={'center'}>
        <FormControl isRequired>
          <FormControl.Label>Email</FormControl.Label>
          <Input
            p={2}
            placeholder="Email"
            type="text"
            w={'xs'}
            // defaultValue={this.email}
            onChangeText={e => this.upEmail(e)}
          />
          <FormControl.Label>Password</FormControl.Label>
          <Input
            p={2}
            placeholder="Password"
            type="password"
            // defaultValue={this.Password}
            onChangeText={e => this.upPass(e)}
          />
          <Button onPress={() => this.loginAcc()} my={10}>
            Login
          </Button>
        </FormControl>
      </VStack>
    );
  }
}

export default Login;
