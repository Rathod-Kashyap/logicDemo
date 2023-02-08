import {action, makeObservable, observable} from 'mobx';
import {observer} from 'mobx-react';
import {
  Box,
  CircleIcon,
  HStack,
  InfoIcon,
  Pressable,
  ShareIcon,
  SunIcon,
  View,
  Text,
  CheckIcon,
  FavouriteIcon,
  ThreeDotsIcon,
} from 'native-base';
import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import home from '../../assets/fonts/home.svg';

@observer
class TabBar extends Component {
  @observable text = '';
  @observable current = '_homeUi';
  constructor(props) {
    super(props);
    makeObservable(this);
  }
  state = {};
  @action handleText = () => {
    // console.log('first', t._dispatchInstances);
    // this.text = t;
    // this.current = Actions.currentScene;
    // console.log('current', this.current);
  };
  render() {
    let cl;
    console.log('clr', Actions.currentScene);
    return (
      <HStack justifyContent={'space-evenly'} py="1">
        <Pressable onPress={() => Actions.homeUi()}>
          <SunIcon size="lg" alignSelf="center" />
          <Text
            color={Actions.currentScene == '_homeUi' ? 'blue.300' : 'black'}>
            HomeUi
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            this.handleText();
            Actions.rickAndMorty();
          }}
          _pressed={{
            _text: {
              color: 'yellow',
            },
          }}>
          <ThreeDotsIcon size="lg" alignSelf="center" />
          <Text
            color={
              Actions.currentScene === '_rickAndMorty' ? 'blue.300' : 'black'
            }>
            Rick and Morty
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            Actions.CheckBox();
            this.handleText();
          }}
          _pressed={{
            _text: {
              color: 'yellow',
            },
          }}>
          <FavouriteIcon size="lg" alignSelf="center" />
          <Text color={Actions.currentScene == '_todo' ? 'blue.300' : 'black'}>
            TODO
          </Text>
        </Pressable>
        <Pressable
          onPress={e => {
            Actions.recycle();
            this.handleText();
          }}>
          <CircleIcon size="lg" alignSelf="center" />
          <Text
            color={Actions.currentScene === '_recycle' ? 'blue.300' : 'black'}>
            Profile
          </Text>
        </Pressable>
      </HStack>
    );
  }
}
export default TabBar;
