import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  KeyboardAvoidingView
} from 'react-native';
import Header from './Header';
import db from '../config';
import firebase from 'firebase';

export default class Write extends React.Component {
  constructor(){
    super();
    this.state={
      title:"",
      author:"",
      storyText:""
    }
  }
  submitStory = () => {
    console.log('Submitted Story');
     db.collection("Story").add({
            title: this.state.title,
            author: this.state.author,
            storyText: this.state.storyText,
            date:firebase.firestore.Timestamp.now().toDate()
        })
        this.setState({
            title: '',
            author: '',
            storyText: ''
        })
    ToastAndroid.show("Your Story is Submitted", ToastAndroid.SHORT);
  }
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" enabled>
      <View style={{ backgroundColor: 'crimson', margin: 0, height: 700 }}>
        <Header />
        <TextInput
          style={{
            height: 40,
            borderColor: 'white',
            borderWidth: 2,
            placeholderTextColor: 'white',
            textAlign: 'center',
            borderRadius: 30,
            margin: 10,
            color: 'white',
            fontSize:20
          }}
          placeholder="Title of The Story"
          value={this.state.title}
          onChangeText={(text) => {
            this.setState({
             title: text,
            });
          }}
        />

        <TextInput
          style={{
            height: 40,
            borderColor: 'white',
            borderWidth: 2,
            placeholderTextColor: 'white',
            textAlign: 'center',
            borderRadius: 30,
            margin: 10,
            color: 'white',
            fontSize:20
          }}
          placeholder="Author of The Story"
          value={this.state.author}
          onChangeText={(text) => {
            this.setState({
             author: text,
            })
          }}
        />
        <TextInput
          style={{
            height: 200,
            borderColor: 'white',
            borderWidth: 2,
            placeholderTextColor: 'white',
            textAlign: 'center',
            borderRadius: 30,
            margin: 10,
            color: 'white',
            fontSize:20
          }}
          placeholder="Type the story here ..."
          value={this.state.storyText}
          onChangeText={(text) => {
            this.setState({
             storyText: text,
            })
          }}
        />
        <TouchableOpacity
          style={{
            alignSelf: 'center',
            marginBottom: 60,
            backgroundColor: 'pink',
            borderRadius: 50,
            borderWidth: '2px',
            padding: 10,
            borderColor: 'black',
            width: 150,
            textAlign: 'center',
            fontSize:20
          }}
          onPress={this.submitStory}>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              fontWeight: 'bold',
              fontFamily: 'cursive',
            }}>
            SUBMIT
          </Text>
        </TouchableOpacity>
      </View>
      </KeyboardAvoidingView>
    );
  }
}
