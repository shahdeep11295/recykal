import React from 'react';
import Routes from "./src/Screens/Routes";
import 'react-native-gesture-handler';
import Store from "./src/utils/Store";
import { Provider } from 'react-redux'


export default class App extends React.Component{
  render(){
    return(
      <Provider store={Store}>
      <Routes />
      </Provider>
    )
  }
}
