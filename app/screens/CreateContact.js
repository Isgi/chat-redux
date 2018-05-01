/**
 * Sample React Native CreateContact
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View
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
    this.props.dispatch(createContact(this.state));
    this.props.dispatch({
      type: 'Navigation/BACK'
    })
  }

  handleUpdate = () => {
    this.props.dispatch(updateContact(this.state));
    this.props.dispatch({
      type: 'Navigation/BACK'
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
            <Text>Save</Text>
          </Button>
        </Form>
      </View>
    );
  }
}

export default connect()(CreateContact)

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
