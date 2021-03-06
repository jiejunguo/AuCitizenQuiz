import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


const HomeScreen = ({ navigation }) => {
    return (
      <View style={styles.Container}>
          <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate('Quiz')}>
          <Text>I am HomeScreen</Text>
          </TouchableOpacity>
      </View>
    );
  };

  const styles = StyleSheet.create({
      Container:{
        margin:10,
        alignItems:'center',
      },
      Button:{
        height: 62.5,
        width: 300,
        borderWidth:1,
        borderColor: 'black',
        backgroundColor: '#FFFFFF',
        justifyContent:"center",
        alignItems:"center",
      }

  })





export default HomeScreen