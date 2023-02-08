import React, {Component} from 'react';
import {View} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {
  Checkbox,
  HStack,
  VStack,
  Text,
  Menu,
  Button,
  Pressable,
  HamburgerIcon,
  Actionsheet,
  Icon,
  Center,
  Avatar,
} from 'native-base';
let k = 0;

class checkBox extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    showVal: false,
    data: [
      {name: 'kashyap', isCheck: true},
      {name: 'Husen', isCheck: false},
      {name: 'Hiten', isCheck: true},
      {name: 'rahul', isCheck: true},
      {name: 'yash', isCheck: false},
    ],
  };
  render() {
    let k = 0;
    let show = '-';
    this.state.data.map(v => {
      if (v.isCheck) {
        k = k + 1;
        show = show + ' ' + v.name;
      }
    });
    if (k == this.state.data.length) {
      show = 'Full';
    } else if (k == 0) {
      show = 'None';
    }
    return (
      <View>
        {this.state.data.map(value => {
          return (
            <Checkbox
              value={value.name}
              isChecked={value.isCheck}
              onChange={bol => {
                const arr = [...this.state.data];
                const index = arr.findIndex(v => v.name == value.name);
                arr[index].isCheck = bol;
                this.setState(arr);
              }}>
              <Text>{value.name}</Text>
            </Checkbox>
          );
        })}
        <Text>{show}</Text>
        <Menu
          placement="top right"
          trigger={triggerProps => {
            console.log(triggerProps);
            return (
              <Pressable {...triggerProps}>
                <HamburgerIcon />
              </Pressable>
            );
          }}>
          <Menu.OptionGroup title="Font" defaultValue={'Aria'} type="radio">
            <Menu.ItemOption value="Aria">Aria</Menu.ItemOption>
            <Menu.ItemOption>Nunito Sans</Menu.ItemOption>
            <Menu.ItemOption>Roboto</Menu.ItemOption>
          </Menu.OptionGroup>
        </Menu>
        <Actionsheet
          isOpen={this.state.showVal}
          onClose={() => {}}
          disableOverlay>
          <Actionsheet.Content>
            <Actionsheet.Item> Option 1</Actionsheet.Item>
            <Actionsheet.Item>Option 2</Actionsheet.Item>
            <Actionsheet.Item>Option 3</Actionsheet.Item>
          </Actionsheet.Content>
        </Actionsheet>
        <Center>
          <Avatar.Group
            _avatar={{
              size: 'lg',
            }}
            max={3}>
            <Avatar
              bg="green.500"
              source={{
                uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
              }}>
              AJ
            </Avatar>
            <Avatar
              bg="cyan.500"
              source={{
                uri: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
              }}>
              TE
            </Avatar>
            <Avatar
              bg="indigo.500"
              source={{
                uri: 'https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
              }}>
              JB
            </Avatar>
            <Avatar
              bg="amber.500"
              source={{
                uri: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
              }}>
              TS
            </Avatar>
            <Avatar
              bg="green.500"
              source={{
                uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
              }}>
              AJ
            </Avatar>
            <Avatar
              bg="cyan.500"
              source={{
                uri: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
              }}>
              TE
            </Avatar>
            <Avatar
              bg="indigo.500"
              source={{
                uri: 'https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
              }}>
              JB
            </Avatar>
            <Avatar
              bg="amber.500"
              source={{
                uri: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
              }}>
              TS
            </Avatar>
          </Avatar.Group>
        </Center>
      </View>
    );
  }
}

export default checkBox;
