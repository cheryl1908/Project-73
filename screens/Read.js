import * as React from 'react';

import { Text, View, StyleSheet, ScrollView } from 'react-native';
import db from '../config';

export default class Read extends React.Component {
  constructor() {
    super();
    this.state = {
      allStories: [],
    };
  }
  componentDidMount = async () => {
    const ref = await db.collection('Story').get();
    ref.docs.map((doc) => {
      this.setState({
        allStories: [...this.state.allStories, doc.data()],
      });
    });
  };
  render() {
    return (
      <View style={{ backgroundColor: 'crimson' }}>
        <View style={styles.head}>
          <Text style={styles.headT}> Write Stories</Text>
        </View>
        <View>
          <ScrollView>
            {this.state.allStories.map((story, index) => {
              return (
                <View
                  style={{ borderBottomWidth: 2, marginTop: 20 }}
                  key={index}>
                  <Text style={{ fontSize: 18 }}>
                    {'Title: ' + story.title}
                  </Text>
                  <Text style={{ fontSize: 18 }}>
                    {'Author : ' + story.author}
                  </Text>
                  <Text style={{ fontSize: 18 }}>
                    {'Date : ' + story.date.toDate()}
                  </Text>
                </View>
              );
            })}
          </ScrollView>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  head: {
    backgroundColor: 'pink',
    marginTop: 2,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    borderWidth: 2,
    borderRadius: 50,
    borderColor: 'black',
    padding: 5,
  },
  headT: {
    textAlign: 'center',
    color: 'black',
    fontFamily: 'sans-serif',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
