import {
  Box,
  Center,
  CheckIcon,
  DeleteIcon,
  HStack,
  SearchIcon,
  Skeleton,
  SunIcon,
  VStack,
} from 'native-base';
import React, {Component} from 'react';

class DemoSkel extends Component {
  constructor(props) {
    super(props);
  }
  state = {};

  componentWillMount() {}
  render() {
    return (
      <Center flex={1} w="100%">
        {/* <SearchIcon size="5" mt="0" color="emerald.500" /> */}

        <VStack
          w="90%"
          maxW="400"
          borderWidth="1"
          space={6}
          rounded="md"
          alignItems="center"
          _dark={{
            borderColor: 'coolGray.500',
          }}
          _light={{
            borderColor: 'coolGray.200',
          }}>
          <Skeleton h="40" />
          <Skeleton
            borderWidth={'1'}
            borderColor="coolGray.200"
            endColor="warmGray.50"
            size="20"
            rounded="full"
            mt="-70"
          />
          <HStack space="2">
            <Skeleton size="5" rounded="full" />
            <Skeleton size="5" rounded="full" />
            <Skeleton size="5" rounded="full" />
            <Skeleton size="5" rounded="full" />
            <Skeleton size="5" rounded="full" />
          </HStack>
          <Skeleton.Text lines={5} alignItems="center" px="12" />
          <Skeleton mb="3" w="40" rounded="20" />
        </VStack>
      </Center>
    );
  }
}

export default DemoSkel;
