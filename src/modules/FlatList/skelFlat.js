import {
  Avatar,
  Box,
  Button,
  FlatList,
  FormControl,
  HStack,
  Input,
  Modal,
  Skeleton,
  Spacer,
  View,
  VStack,
} from 'native-base';
import React, {Component} from 'react';
import {RefreshControl, Text} from 'react-native';
import {Call} from '../../api';
import deleteData from '../../utils/deleteData';
import sendData from '../../utils/sendData';
import AppBarEx from '../nativeBase/AppBarEx';
import {clone, get, isEmpty, remove} from 'lodash';
import userData from '../../utils/userData';

class SkelFlat extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <VStack>
        <HStack m={2}>
          <Skeleton rounded={'full'} size={'48px'} />
          <Skeleton rounded={'lg'} h={'10'} />
        </HStack>
        <HStack m={2}>
          <Skeleton rounded={'full'} size={'48px'} />
          <Skeleton rounded={'lg'} h={'10'} />
        </HStack>
        <HStack m={2}>
          <Skeleton rounded={'full'} size={'48px'} />
          <Skeleton rounded={'lg'} h={'10'} />
        </HStack>
        <HStack m={2}>
          <Skeleton rounded={'full'} size={'48px'} />
          <Skeleton rounded={'lg'} h={'10'} />
        </HStack>
        <HStack m={2}>
          <Skeleton rounded={'full'} size={'48px'} />
          <Skeleton rounded={'lg'} h={'10'} />
        </HStack>
        <HStack m={2}>
          <Skeleton rounded={'full'} size={'48px'} />
          <Skeleton rounded={'lg'} h={'10'} />
        </HStack>
        <HStack m={2}>
          <Skeleton rounded={'full'} size={'48px'} />
          <Skeleton rounded={'lg'} h={'10'} />
        </HStack>
        <HStack m={2}>
          <Skeleton rounded={'full'} size={'48px'} />
          <Skeleton rounded={'lg'} h={'10'} />
        </HStack>
        <HStack m={2}>
          <Skeleton rounded={'full'} size={'48px'} />
          <Skeleton rounded={'lg'} h={'10'} />
        </HStack>
        <HStack m={2}>
          <Skeleton rounded={'full'} size={'48px'} />
          <Skeleton rounded={'lg'} h={'10'} />
        </HStack>
      </VStack>
    );
  }
}

export default SkelFlat;
