/**
 * Sample React Native Contacts
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  FlatList
} from 'react-native';
import { connect } from 'react-redux';
import { ListItem, Left, Body, Right, Thumbnail, Text, Icon, Fab } from 'native-base';

import { allContacts, deleteContact } from '../actions/contacts';

type Props = {};
class Contacts extends Component<Props> {

  // state = {selected: (new Map(): Map<string, boolean>)};

  componentDidMount() {
    this.props.dispatch(allContacts())
  }

  // _keyExtractor = (item, index) => item.name;

  handleEdit = (item) => {
    this.props.dispatch({
      type: 'Navigation/NAVIGATE',
      routeName: 'CreateContact',
      params: item
    })
  }

  handleDelete = (item) => {
    this.props.dispatch(deleteContact(item))
  }

  _renderItem = (item) => {
    return (
      <ListItem
        key={item.name}
        onPress={() => this.handleEdit(item)}
        onLongPress={() => this.handleDelete(item)} avatar>
        <Left>
          <Thumbnail source={{ uri: 'https://cdn0.iconfinder.com/data/icons/avatars-6/500/Avatar_boy_man_people_account_boss_client_beard_male_person_user-128.png' }} />
        </Left>
        <Body>
          <Text>{item.name}</Text>
          <Text note>{item.number}</Text>
        </Body>
        <Right>
          <Icon name="ios-arrow-forward" />
        </Right>
      </ListItem>
    )
  }

  navigateToCreateContact = () => {
    this.props.dispatch({
      type: 'Navigation/NAVIGATE',
      routeName: 'CreateContact'
    })
  }

  render() {
    return (
      <View style={styles.container}>
        {this.props.contactsReducer.contacts.map(contact => this._renderItem(contact))}
        {/* <FlatList
          data={this.props.contactsReducer.contacts}
          extraData={this.state}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        /> */}
        <Fab
          style={{ backgroundColor: '#000000' }}
          position="bottomRight"
          onPress={this.navigateToCreateContact}>
          <Icon name="add" style={{color: '#ffffff'}} />
        </Fab>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contactsReducer: state.contactsReducer,
  }
}

export default connect(mapStateToProps)(Contacts);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});
