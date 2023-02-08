import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Spacer,
  Stack,
  VStack,
  ZStack,
} from 'native-base';
import React, {Component} from 'react';
import {Text, View} from 'react-native';

class Registration extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <Box flex={1}>
        {/* Button in native base */}
        <VStack
          w="100%"
          space={4}
          px="2"
          mt="4"
          alignItems="center"
          justifyContent="center">
          <Button
            size="sm"
            variant={'outline'}
            isLoading
            spinnerPlacement="start"
            isLoadingText="Submiting">
            Button
          </Button>

          <Button variant={'ghost'}>GHOST</Button>
        </VStack>
        {/* Flex in native base */}
        <Spacer />
        <Flex direction="column" justifyContent="space-evenly" mb="5" mt="0.5">
          <Center
            _text={{
              color: 'black',
              fontWeight: 'extrabold',
              fontSize: '20',
              bg: 'primary.100',
            }}>
            LINE1
          </Center>
          <Center
            _text={{
              color: 'black',
              fontWeight: 'extrabold',
              fontSize: '20',
              bg: 'primary.200',
            }}>
            LINE2
          </Center>
          <Center
            _text={{
              color: 'black',
              fontWeight: 'extrabold',
              fontSize: '20',
              bg: 'primary.300',
            }}>
            LINE3
          </Center>
        </Flex>
        <Center h="40">
          <Box mt="-32">
            <ZStack mt="3" ml={-50}>
              <Box bg="primary.700" size="20" rounded="lg" shadow={3} />
              <Box
                bg="primary.500"
                mt="5"
                ml="5"
                size="20"
                rounded="lg"
                shadow={5}
              />
              <Box
                bg="primary.300"
                mt="10"
                ml="10"
                size="20"
                rounded="lg"
                shadow={7}
              />
            </ZStack>
          </Box>
        </Center>
      </Box>
    );
  }
}

export default Registration;
