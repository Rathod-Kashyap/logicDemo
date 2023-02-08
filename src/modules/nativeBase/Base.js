import React, {Component} from 'react';
import {
  NativeBaseProvider,
  Box,
  getColor,
  Pressable,
  VStack,
  HStack,
  Image,
  extendTheme,
  Text,
  Popover,
  Button,
  Center,
  Icon,
  Circle,
  Spacer,
  Toast,
  Slide,
  Alert,
  SunIcon,
  Fab,
  AddIcon,
  ScrollView,
  FlatList,
  Avatar,
  Heading,
} from 'native-base';
import {View} from 'react-native';
import {ToggleButtonClick} from 'native-base/lib/typescript/components/composites/Typeahead/useTypeahead/types';
const data = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    fullName: 'Aafreen Khan',
    timeStamp: '12:47 PM',
    recentText: 'Good Day!',
    avatarUrl:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    fullName: 'Sujitha Mathur',
    timeStamp: '11:11 PM',
    recentText: 'Cheer up, there!',
    avatarUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    fullName: 'Anci Barroco',
    timeStamp: '6:22 PM',
    recentText: 'Good Day!',
    avatarUrl: 'https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg',
  },
  {
    id: '68694a0f-3da1-431f-bd56-142371e29d72',
    fullName: 'Aniket Kumar',
    timeStamp: '8:56 PM',
    recentText: 'All the best',
    avatarUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU',
  },
  {
    id: '28694a0f-3da1-471f-bd96-142456e29d72',
    fullName: 'Kiara',
    timeStamp: '12:47 PM',
    recentText: 'I will call today.',
    avatarUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU',
  },
];
class Base extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    console.log(this.props);
    this.props.navigation.setParams({
      title: 'Base',
    });
  }
  state = {
    isOpen: false,
  };
  render() {
    setTimeout(() => {
      Toast.isActive(1) ? Toast.closeAll() : null;
    }, 2000);
    return (
      <ScrollView>
        <Box flex={1}>
          <Box
            bg="primary.600"
            justifyItems={'center'}
            py="30"
            px="20px"
            borderRadius="5"
            mt="1"
            rounded="md"
            width={375}
            maxWidth="100%">
            <HStack justifyContent="space-between">
              <Box justifyContent="space-between">
                <VStack space="2">
                  <Text fontSize="sm" color="white">
                    Today @ 9PM
                  </Text>
                  <Text color="white" fontSize="md" fontFamily="roboto">
                    Let's talk about avatar!
                  </Text>
                </VStack>
                <Pressable
                  _pressed={{
                    bg: 'violet.900',
                    borderWidth: '4',
                    fontWeight: 'bold',
                  }}
                  onPress={() =>
                    Toast.show({
                      id: 1,
                      title: 'Hello',
                      description: 'Clicked',
                      placement: 'top',
                    })
                  }
                  rounded="xl"
                  bg="black"
                  alignSelf="flex-start"
                  py="13"
                  px="60">
                  <Text
                    textTransform="uppercase"
                    fontSize="md"
                    fontWeight="bold"
                    color="white">
                    Remind me
                  </Text>
                </Pressable>
              </Box>
              <Image
                source={{
                  uri: 'https://media.vanityfair.com/photos/5ba12e6d42b9d16f4545aa19/3:2/w_1998,h_1332,c_limit/t-Avatar-The-Last-Airbender-Live-Action.jpg',
                }}
                alt="Aang flying and surrounded by clouds"
                height="100"
                rounded="xl"
                width="100"
              />
            </HStack>
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
        </Box>

        <Center flex={1} justifyContent="center" alignSelf={'center'}>
          <VStack>
            <Circle size="70px" bg="secondary.400">
              <Text color="white">ICON</Text>
            </Circle>
            <Center>
              <Popover
                trigger={triggerProps => {
                  return <Button {...triggerProps}>Trigger Popver</Button>;
                }}>
                <Popover.Content>
                  <Popover.Arrow />
                  <Popover.Header>Confirmation</Popover.Header>
                  <Popover.Body borderTopWidth="0">
                    Are you sure you want to continue with your action?
                  </Popover.Body>
                  <Popover.Footer borderTopWidth="0">
                    <Button.Group>
                      <Button
                        bg="red.500"
                        _pressed={{bg: 'red.700'}}
                        _text={{color: 'white'}}>
                        Yes
                      </Button>
                      <Button bg="gray.200" _pressed={{bg: 'gray.400'}}>
                        No
                      </Button>
                    </Button.Group>
                  </Popover.Footer>
                </Popover.Content>
              </Popover>
            </Center>
            <Center>
              <Popover
                trigger={triggerProps => {
                  return <Button {...triggerProps}>Trigger Popver</Button>;
                }}>
                <Popover.Content>
                  <Popover.Arrow />
                  <Popover.Header>Confirmation</Popover.Header>
                  <Popover.Body borderTopWidth="0">
                    Are you sure you want to continue with your action?
                  </Popover.Body>
                  <Popover.Footer borderTopWidth="0">
                    <Button.Group>
                      <Button
                        bg="red.500"
                        _pressed={{bg: 'red.700'}}
                        _text={{color: 'white'}}>
                        Yes
                      </Button>
                      <Button bg="gray.200" _pressed={{bg: 'gray.400'}}>
                        No
                      </Button>
                    </Button.Group>
                  </Popover.Footer>
                </Popover.Content>
              </Popover>
            </Center>
          </VStack>
        </Center>
        <Box>
          <Heading fontSize="xl" p="4" pb="3">
            Inbox
          </Heading>
          <FlatList
            data={data}
            renderItem={({item}) => (
              <Box
                borderBottomWidth="1"
                _dark={{
                  borderColor: 'muted.50',
                }}
                borderColor="muted.800"
                pl={['0', '4']}
                pr={['0', '5']}
                py="2">
                <HStack space={[2, 3]} justifyContent="space-between">
                  <Avatar
                    size="48px"
                    source={{
                      uri: item.avatarUrl,
                    }}
                  />
                  <VStack>
                    <Text
                      _dark={{
                        color: 'warmGray.50',
                      }}
                      color="coolGray.800"
                      bold>
                      {item.fullName}
                    </Text>
                    <Text
                      color="coolGray.600"
                      _dark={{
                        color: 'warmGray.200',
                      }}>
                      {item.recentText}
                    </Text>
                  </VStack>
                  <Spacer />
                  <Text
                    fontSize="xs"
                    _dark={{
                      color: 'warmGray.50',
                    }}
                    color="coolGray.800"
                    alignSelf="flex-start">
                    {item.timeStamp}
                  </Text>
                </HStack>
              </Box>
            )}
            keyExtractor={item => item.id}
          />
        </Box>
      </ScrollView>
    );
  }
}

export default Base;
