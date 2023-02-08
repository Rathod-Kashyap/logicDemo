/**
 * @format
 */

import App from './src/App';
import {name as appName} from './app.json';
import React, {Component} from 'react';
import {AppRegistry} from 'react-native';

AppRegistry.registerComponent(appName, () => App);
