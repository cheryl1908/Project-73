import * as React from 'react';
import { Text, View,  StyleSheet } from 'react-native';

class Header extends React.Component{
  render(){
    return(
    <View style={styles.head}>
    <Text style={styles.headT}> Write Stories</Text>
    
    </View>
    );
  }
}

const styles =StyleSheet.create({
  head:{
   backgroundColor:'pink',
   marginTop:2,
   marginBottom:10,
   marginLeft:10,
   marginRight:10,
   borderWidth:2,
   borderRadius:50,
   borderColor:'black',
   padding:5
  },
  headT:{
    textAlign:'center',
    color:'black',
    fontFamily:'sans-serif',
    fontSize:20,
    fontWeight:'bold'
  }
})
export default Header;