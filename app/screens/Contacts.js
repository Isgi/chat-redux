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
  FlatList,
  Alert
} from 'react-native';
import { connect } from 'react-redux';
import { ListItem, Left, Body, Right, Thumbnail, Text, Icon, Fab } from 'native-base';

import { allContacts, deleteContact, deleteContactLocal } from '../actions/contacts';

type Props = {};
class Contacts extends Component<Props> {

  state = {selected: (new Map(): Map<string, boolean>)};

  componentDidMount() {
    this.handleLoad()
  }

  _keyExtractor = (item, index) => item.objectId;

  handleEdit = (item) => {
    this.props.dispatch({
      type: 'Navigation/NAVIGATE',
      routeName: 'CreateContact',
      params: item
    })
  }

  handleDelete = (item) => {
    Alert.alert(
      '',
      'Yakin didelet?',
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => {
          this.props.dispatch(deleteContact(item))
          .then(() => {
            this.props.dispatch(deleteContactLocal(item))
          })
        }},
      ],
      { cancelable: true }
    )
  }

  handleLoad = () => {
    this.props.dispatch(allContacts())
  }

  _renderItem = ({item, index}) => {
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
        <Text style={styles.note} note>Long press for delete item, press for edit item</Text>
        <FlatList
          data={this.props.contactsReducer.contacts}
          extraData={this.state}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          onRefresh={this.handleLoad}
          refreshing={this.props.contactsReducer.isLoading}
        />
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
  },
  note: {
    margin: 10,
    alignSelf: 'center',
    textAlign: 'center'
  }
});
