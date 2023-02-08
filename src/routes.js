import React, {Component} from 'react';
import {Router, Scene} from 'react-native-router-flux';
import Home from './modules/home';
import Login from './modules/login';
import Base from './modules/nativeBase/Base';
import Registration from './modules/registration';
import CustomTabB from './CustomTabB';
import checkBox from './modules/login/checkBox';
import DemoSkel from './modules/login/DemoSkel';
import AppBarEx from './modules/nativeBase/AppBarEx';
import ApiDemo from './modules/FlatList/ApiDemo';
import DisplaySkel from './modules/login/DisplaySkel';
import lodashEx from './modules/home/lodashEx';
import HomeTodo from './modules/Todos/index';
import {inject} from 'mobx-react';
import NativeBaseEx from './modules/login/NativeBaseEx';
import RecycleTestComponent from './modules/RecycleView';
import GraphqlEx from './modules/Apollo/rick';
import MainApollo from './modules/Apollo';
import AddApollo from './modules/Apollo/AddApollo';
import UpdateApollo from './modules/Apollo/UpdateApollo';
import HomeUi from './components/Home';
import NavBar from './components/NavBar';
import TabBar from './components/TabBar';

class Routes extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    //sceneStyle={{backgroundColor: '#00ff4a'}}
    return (
      <Router>
        <Scene key="root" navBar={NavBar}>
          <Scene
            tabs
            key="tabbar"
            tabStyle={{marginBottom: 10}}
            hideNavBar
            tabBarComponent={TabBar}>
            <Scene
              key="homeUi"
              component={HomeUi}
              showLabel={false}
              title="Login"
            />
            <Scene
              key="registration"
              component={Registration}
              back
              showLabel={false}
            />
            <Scene
              key="rickAndMorty"
              component={GraphqlEx}
              showLabel={false}
              title="Rick"
              back
            />
            <Scene
              key="todo"
              component={HomeTodo}
              showLabel={false}
              title="Home"
            />
            <Scene
              key="api"
              component={RecycleTestComponent}
              showLabel={false}
              title="Recycle"
            />
            <Scene key="recycle" component={ApiDemo} showLabel={false} />
          </Scene>
          <Scene key="display" component={NativeBaseEx} showLabel={false} />
          <Scene key="CheckBox" component={checkBox} back showLabel={false} />
          <Scene
            key="login"
            component={Login}
            showLabel={false}
            title="Login"
          />

          <Scene
            key="graph"
            component={MainApollo}
            showLabel={false}
            title="Apollo"
          />
          <Scene
            key="updateFruit"
            component={UpdateApollo}
            showLabel={false}
            title="Update Fruit"
            back
          />

          <Scene
            key="addFruit"
            component={AddApollo}
            showLabel={false}
            title="Add Fruit"
            back
          />
          <Scene key="home" component={Home} back showLabel={false} />

          {/* <Scene
            tabs
            key="tabbar"
            tabStyle={{marginBottom: 10}}
            hideNavBar
            tabBarComponent={CustomTabB}>
            <Scene
              key="graph"
              component={MainApollo}
              showLabel={false}
              title="Apollo"
            />
            <Scene
              key="todo"
              component={HomeTodo}
              showLabel={false}
              title="Home"
            />
            <Scene
              key="recycle"
              component={RecycleTestComponent}
              showLabel={false}
              title="Recycle"
            /> */}
          {/* <Scene key="CheckBox" component={checkBox} back showLabel={false} /> */}
          {/* <Scene key="display" component={NativeBaseEx} showLabel={false} /> */}
          {/* <Scene
              key="registration"
              component={Registration}
              back
              showLabel={false}
            />
            <Scene key="native" component={lodashEx} showLabel={false} />
            */}
        </Scene>
      </Router>
    );
  }
}

export default Routes;
