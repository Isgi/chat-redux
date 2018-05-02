import React from 'react';
import { Icon } from 'native-base';
import { StackNavigator, TabNavigator } from 'react-navigation';

import Chats from '../screens/Chats';
import Contacts from '../screens/Contacts';
import Messages from '../screens/Messages';
import Settings from '../screens/Settings';
import Login from '../screens/Login';
import CreateContact from '../screens/CreateContact';

//default key for bellow is Main
const Main = TabNavigator({
  Contacts: { //just as a routeName not a key
    screen: Contacts,
    navigationOptions: {
      title: 'Contacts',
      tabBarIcon: ({focused, tintColor}) => {
        return <Icon name="ios-contact" style={{color: focused ? tintColor : '#bebebe'}} />
      }
    }
  },
  Chats: {
    screen: Chats,
    navigationOptions: {
      title: 'Chats',
      tabBarIcon: ({focused, tintColor}) => {
        return <Icon name="ios-chatbubbles" style={{color: focused ? tintColor : '#bebebe'}} />
      }
    }
  },
  // Messages: {
  //   screen: Messages,
  //   navigationOptions: {
  //     title: 'Messages',
  //     tabBarIcon: ({focused, tintColor}) => {
  //       return <Icon name="ios-contact" style={{color: focused ? tintColor : '#bebebe'}} />
  //     }
  //   }
  // },
  Settings: {
    screen: Settings,
    navigationOptions: {
      title: 'Settings',
      tabBarIcon: ({focused, tintColor}) => {
        return <Icon name="ios-settings" style={{color: focused ? tintColor : '#bebebe'}} />
      }
    }
  }
}, {
  tabBarOptions: {
    activeTintColor: '#000000'
  }
})

// default key for bellow is null
const RootNavigator = StackNavigator({
  Main: { // maybe as a key
    screen: Main
  },
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Login'
    }
  },
  CreateContact: {
    screen: CreateContact,
    navigationOptions: {
      title: 'Create Contact'
    }
  }
})

export default RootNavigator;