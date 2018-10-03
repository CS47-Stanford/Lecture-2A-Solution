import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
        style = {styles.imageStyle}
        source={require('./assets/stockPhoto.png')}/>
        <View style={styles.textView}>
          <Text style={{fontWeight: 'bold'}}>
          Guillermo Moreno
          <Text> </Text>
            <Text style={{fontWeight: 'normal'}}>
             with
            </Text>
            <Text> </Text>
           Josephine Williams
           <Text> </Text>
             <Text style={{fontWeight: 'normal'}}>
              and
              </Text>
              <Text> </Text>
             2 others!
             </Text>
          <Text style={{color: 'gray'}}>
          Yesterday at 11:14 PM
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  imageStyle: {
    height: 50,
    width: 50,
    borderRadius: 25,
    },
  textView: {
    flex: 1,
    flexDirection: 'column',
  },
});
