import React from 'react';
import {FlatList} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import EDIT_CONTACT from './screens/EditContactScreen';
import ADD_CONTACT from './screens/AddNewContactScreen'
import HOME_VIEW from './screens/HomeScreen';
import VIEW_CONTACT from './screens/ViewContactScreen';

const MainNavigator = createStackNavigator({
  HOME_VIEW:{screen:HOME_VIEW},
  VIEW_CONTACT:{screen:VIEW_CONTACT},
  EDIT_CONTACT:{screen:EDIT_CONTACT},
  ADD_CONTACT:{screen:ADD_CONTACT},
}, 

{
  defaultNavigationOptions:{
  headerTintColor:"blue",
  headerStyle:{
    backgroundColor:"darkblue"},
  headerTitleStyle:{color:"white"}
        }
     }
  );

  const App = createAppContainer(MainNavigator);

  export default App;

