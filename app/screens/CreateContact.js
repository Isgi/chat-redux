/**
 * Sample React Native CreateContact
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  ActivityIndicator
} from 'react-native';
import { Item, Form, Input, Button, Text } from 'native-base';
import { connect } from 'react-redux';
import { createContact, updateContact } from '../actions/contacts';

type Props = {};
class CreateContact extends Component<Props> {

  constructor(props) {
    super(props);
    let name = '';
    let number = '';
    if (props.navigation.state.params) {
      name = props.navigation.state.params.name;
      number = props.navigation.state.params.number;
    }
    this.state = {
      name: name,
      number: number
    }
  }

  handleSave = () => {
    this.props.dispatch(createContact(this.state))
    .then( res => {
      this.props.dispatch({
        type: 'Navigation/BACK'
      })
    })
    .catch( err => {
      alert('Error Cuyy')
    })
  }

  handleUpdate = () => {
    const { params } = this.props.navigation.state;
    const newValue = {
      ...params,
      ...this.state
    }
    this.props.dispatch(updateContact(newValue))
    .then( res => {
      this.props.dispatch({
        type: 'Navigation/BACK'
      })
    })
    .catch( err => {
      alert('Error Cuyy')
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Form>
          <Item>
            <Input value={this.state.name} onChangeText={(text) => this.setState({name: text})} placeholder="Name" />
          </Item>
          <Item last>
            <Input value={this.state.number} onChangeText={(text) => this.setState({number: text})} placeholder="Number" />
          </Item>
          <Button  onPress={this.props.navigation.state.params && this.props.navigation.state.params.name ? this.handleUpdate : this.handleSave} style={styles.button} full dark>
            {this.props.contactsReducer.isLoading ? <ActivityIndicator color="#ffffff" /> : <Text>Save</Text>}
          </Button>
        </Form>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contactsReducer: state.contactsReducer
  }
}

export default connect(mapStateToProps)(CreateContact)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    padding: 10
  },
  button: {
    marginTop: 10
  }
});
