import React, {Component} from 'react';
import {Button, Image, Pressable, Text, View} from 'react-native';
import axios from 'axios';
import {Actions} from 'react-native-router-flux';

const options = {
  method: 'get',
  url: 'https://api.adviceslip.com/advice',
};

class Home extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    response: '',
  };

  componentWillMount() {
    //console.log(this.props);
    this.props.navigation.setParams({
      title: 'Home',
    });
    axios
      .request(options)
      .then(res => {
        this.setState({response: res.data.slip.advice});
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <View
        style={{
          width: '100%',
          backgroundColor: '#0891b2',
          justifyContent: 'center',
          borderRadius: 5,
          maxWidth: '100%',
          marginBottom: 20,
          marginTop: 3,
          paddingLeft: 4,
          paddingRight: 4,
        }}>
        <View>
          <Text style={{marginTop: 20, fontSize: 13}}>TODAY @ 9PM</Text>
        </View>
        <View style={{paddingTop: 4}}>
          <Text style={{color: 'white', fontSize: 15}}>
            {this.state.response}
            Let's talk about avatar!
          </Text>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              paddingTop: 20,
            }}>
            <Pressable
              onPress={() => {
                alert('k');
              }}
              style={{
                backgroundColor: 'black',
                alignSelf: 'flex-start',
                paddingTop: 13,
                paddingBottom: 13,
                paddingLeft: 60,
                paddingRight: 60,
                borderRadius: 15,
              }}>
              <Text
                style={{
                  textTransform: 'uppercase',
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: 'white',
                }}>
                Remind me
              </Text>
            </Pressable>
            <Image
              source={{
                uri: 'https://media.vanityfair.com/photos/5ba12e6d42b9d16f4545aa19/3:2/w_1998,h_1332,c_limit/t-Avatar-The-Last-Airbender-Live-Action.jpg',
              }}
              style={{
                height: 100,
                borderRadius: 15,
                width: 100,
                bottom: 30,
                right: 10,
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default Home;
