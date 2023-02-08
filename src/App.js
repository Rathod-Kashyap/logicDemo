import React, {Component} from 'react';
import {
  LogBox,
  ProgressBarAndroidComponent,
  Text,
  TouchableOpacity,
} from 'react-native';
import {
  CircularProgress,
  NativeBaseProvider,
  Progress,
  View,
} from 'native-base';
import Routes from './routes';
import {observer, Provider} from 'mobx-react';
import userStore from './modules/Storage/UserStore';
import toDoStore from './modules/Storage/TodoStore';
import apistore from './modules/Storage/apiStore';
import {ApolloClient, ApolloProvider, gql, InMemoryCache} from '@apollo/client';
import {ApolloSub, ApolloClientApi} from './utils/apiClient';
import codePush from 'react-native-code-push';
import {makeObservable, observable} from 'mobx';
import {Actions} from 'react-native-router-flux';
LogBox.ignoreAllLogs();

// const client = ApolloClientApi.init();

const client = ApolloSub.init();
let codePushOptions = {checkFrequency: codePush.CheckFrequency.MANUAL};

@observer
class App extends Component {
  @observable d = false;
  constructor(props) {
    super(props);
    makeObservable(this);
  }
  onButtonPress() {
    this.d = true;
    codePush.sync(
      {
        updateDialog: true,
        installMode: codePush.InstallMode.IMMEDIATE,
      },
      status => {
        switch (status) {
          case codePush.SyncStatus.DOWNLOADING_PACKAGE:
            // Show "downloading" modal
            console.log('downloading');
            break;
          case codePush.SyncStatus.INSTALLING_UPDATE:
            // Hide "downloading" modal
            console.log('completed');
            break;
        }
      },
      ({receivedBytes, totalBytes}) => {
        if (receivedBytes == totalBytes) {
          this.d = false;
        }
      },
    );
  }
  state = {
    d: true,
  };
  render() {
    return (
      <NativeBaseProvider>
        {/* {this.d ? <Progress color={'black'} size={'lg'} /> : null} */}
        {false ? (
          <View>
            <TouchableOpacity onPress={this.onButtonPress}>
              <Text>Check for updates</Text>
            </TouchableOpacity>
          </View>
        ) : null}

        <Provider
          userStore={userStore}
          toDoStore={toDoStore}
          apistore={apistore}>
          <ApolloProvider client={client}>
            <Routes />
          </ApolloProvider>
        </Provider>
      </NativeBaseProvider>
    );
  }
}

export default codePush(codePushOptions)(App);
