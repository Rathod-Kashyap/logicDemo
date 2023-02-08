import {
  Heading,
  Input,
  ScrollView,
  SearchIcon,
  View,
  VStack,
  Text,
} from 'native-base';
import React, {Component} from 'react';
import PlayList from './PlayList';
import RecentList from './recentList';

class HomeUi extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <ScrollView flex={1}>
        <Heading fontFamily={'MontBlanc-Trial-Black'} pl={5}>
          Explore podcast
        </Heading>
        <Input
          fontSize={'15'}
          px={5}
          InputLeftElement={<SearchIcon size="sm" px="5" />}
          variant="filled"
          placeholder="Find your favourite"
          borderRadius={'10'}
          m="5"
        />
        <PlayList />
        <RecentList />
        <RecentList />
        <RecentList />
      </ScrollView>
    );
  }
}

export default HomeUi;
