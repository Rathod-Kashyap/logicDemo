import {
  ArrowBackIcon,
  ArrowForwardIcon,
  Avatar,
  Heading,
  HStack,
  Image,
  InfoIcon,
  QuestionIcon,
  View,
  VStack,
} from 'native-base';
import React, {Component} from 'react';
import {Text} from 'react-native';

class RecentList extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <VStack px={5} py="3">
        <HStack justifyContent={'space-between'}>
          <Text style={{color: 'black', fontWeight: 'bold', fontSize: 18}}>
            Recent
          </Text>
          <ArrowForwardIcon size="md" pt="2" />
        </HStack>
        <HStack pt={'2'}>
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYnHnN4lnDVdgtQN1gXkaX-hqdItbVzrGFqQ&usqp=CAU',
            }}
            size="sm"
            rounded={'lg'}
          />
          <View px={3} flex="1">
            <Text
              numberOfLines={2}
              style={{fontWeight: 'bold', color: 'black'}}>
              Philosophy of Moira sisters ~ Episode 12 gjgj Philosophy of Moira
              sisters ~ Episode 12 gjgj
            </Text>
            <HStack py={2}>
              <InfoIcon size="sm" px={1} />
              <View px={1}>
                <Text numberOfLines={2} style={{color: 'black'}}>
                  {' '}
                  29 mins remaining
                </Text>
              </View>
            </HStack>
          </View>
        </HStack>
        <HStack pt={'2'}>
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUb9tq9Irz16GAh_fCBdkBuiQPYw5M8neQBA&usqp=CAU',
            }}
            size="sm"
            rounded={'lg'}
          />
          <View px={3} flex="1">
            <Text
              style={{fontWeight: 'bold', color: 'black'}}
              numberOfLines={2}>
              Benefits of reading books ~ Episode 32
            </Text>
            <HStack py={2}>
              <InfoIcon size="sm" px={1} />
              <View px={1}>
                <Text style={{color: 'black'}}> 1 hour remaining</Text>
              </View>
            </HStack>
          </View>
        </HStack>
      </VStack>
    );
  }
}

export default RecentList;
