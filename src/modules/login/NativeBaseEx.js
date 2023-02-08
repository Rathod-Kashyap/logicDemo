import {
  Alert,
  AlertDialog,
  Box,
  Button,
  CheckIcon,
  FormControl,
  Heading,
  Input,
  Slide,
  SunIcon,
  Toast,
} from 'native-base';
import React, {Component} from 'react';
import {Text, View} from 'react-native';

class NativeBaseEx extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    isOpen: true,
    data: [{name: 'kas', password: '123'}],
  };
  render() {
    return (
      <Box m={10}>
        <Alert status={'warning'}>
          <Alert.Icon mr="100px" />
          Hello
        </Alert>
        <AlertDialog motionPreset="fade">
          <AlertDialog.Content>
            <AlertDialog.Header fontSize="lg" fontWeight="bold">
              Delete Customer
            </AlertDialog.Header>
            <AlertDialog.Body>
              Are you sure? You can't undo this action afterwards.
            </AlertDialog.Body>
            <AlertDialog.Footer>
              {/* <Button
                  onPress={() => {
                    this.setState({isOpen: !this.state.isOpen});
                  }}>
                  Cancel
                </Button> */}
              <Button
                colorScheme="red"
                ml="3"
                onPress={() => {
                  this.setState({isOpen: !this.state.isOpen});
                }}>
                Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Content>
        </AlertDialog>

        <Heading>Welcome</Heading>
        <FormControl isRequired>
          <FormControl.Label>Name:</FormControl.Label>
          <Input
            placeholder="Name"
            type="text"
            onChangeText={v => {
              this.state.data.push({name: v, password});
            }}
          />
          <FormControl.HelperText>Enter Your Name</FormControl.HelperText>
          <FormControl.Label>Password:</FormControl.Label>
          <Input
            placeholder="password"
            type="password"
            onChangeText={v => {
              this.state.data.push({password: v});
            }}
          />
          <FormControl.HelperText pl={'10px'}>
            Size of Password should be more than 6
          </FormControl.HelperText>
          {/* <Button
            title="Show"
            onPress={() => {
              console.log(this.state.data);
            }}
          /> */}
        </FormControl>
        <Button
          onPress={() => {
            this.setState({isOpen: !this.state.isOpen});
          }}>
          Cancel
        </Button>

        <Slide in={this.state.isOpen} placement={'top'}>
          <Alert justifyContent={'center'} status="error">
            <SunIcon />
            <Text color="black">No Internet!</Text>
          </Alert>
        </Slide>
      </Box>
    );
  }
}

export default NativeBaseEx;
