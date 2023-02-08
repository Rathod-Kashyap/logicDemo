import {action, makeObservable, observable} from 'mobx';
import {observer} from 'mobx-react';
import {
  Box,
  HStack,
  Image,
  Pressable,
  ScrollView,
  VStack,
  Text,
  View,
  AspectRatio,
} from 'native-base';
import React, {Component} from 'react';

@observer
class PlayList extends Component {
  @observable style = false;
  @observable text = 'All';
  constructor(props) {
    super(props);
    makeObservable(this);
  }
  state = {};
  //  const TextStyle = {
  //     bg:'black'
  //     color:'white'
  // }
  @action handleClickText = e => {
    console.log(e._dispatchInstances.memoizedProps.children);
    this.text = e._dispatchInstances.memoizedProps.children;
    this.styleArray.map(v => {
      if (v.text === text) {
        v.bg = !v.bg;
      }
    });
  };

  @action handleStyle = val => {
    console.log('first', val);
    this.text = val;
  };

  render() {
    const value = [
      'All',
      'Psychology',
      'Motivation',
      'Self Care',
      'Mythology',
      'Horror',
    ];
    return (
      <VStack py={2}>
        <ScrollView horizontal>
          <Box flex={1} flexDirection="row" px="5" py={2}>
            {value.map(v => {
              let bgs, colors;
              if (this.text == v) {
                colors = 'white';
                bgs = 'black';
              } else {
                bgs = 'white';
                colors = 'black';
              }
              return (
                <Box
                  backgroundColor={bgs}
                  borderRadius="2xl"
                  alignItems="center"
                  m="1"
                  justifyContent={'space-evenly'}
                  p={'2'}>
                  <Text
                    px={'2'}
                    color={colors}
                    onPress={() => this.handleStyle(v)}>
                    {v}
                  </Text>
                </Box>
              );
            })}
          </Box>

          {/* <Text px={'2'}>Psychology</Text>
            <Text px={'2'}>Motivation</Text>
            <Text px={'2'}>Self Care</Text>
            <Text px={'2'}>All</Text>
            <Text px={'2'}>Psychology</Text>
            <Text px={'2'}>Motivation</Text>
            <Text px={'2'}>Self Care</Text> */}
        </ScrollView>
        <ScrollView horizontal>
          <Box>
            <Image
              mx={5}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1nrF4-TVB4OJelam7-fnCGkniQnvf-JS87w&usqp=CAU',
              }}
              style={{resizeMode: 'contain'}}
              height="40"
              width="xs"
              borderRadius={'20'}
            />
          </Box>
          <Box>
            <Image
              mx={5}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGZwYV2ggBUoQMbq7wBlXlblFkIBJv0laquA&usqp=CAU',
              }}
              style={{resizeMode: 'contain'}}
              height="40"
              width="xs"
              borderRadius={'20'}
            />
          </Box>
          <Box>
            <Image
              mx={5}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrwDNlABQza8dfAE6cCTzdJFSITiuzKJ2yBw&usqp=CAU',
              }}
              style={{resizeMode: 'contain'}}
              height="40"
              width="xs"
              borderRadius={'20'}
            />
          </Box>

          <Box>
            <Image
              mx={5}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLVUoeEPrfNn8UiY1Y4uFo2t3NksCiums8vQ&usqp=CAU',
              }}
              style={{resizeMode: 'contain'}}
              height="40"
              width="xs"
              borderRadius={'20'}
            />
          </Box>
        </ScrollView>
      </VStack>
    );
  }
}

export default PlayList;
