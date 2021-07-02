import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


const HomeScreen = ({ navigation }) => {
    return (
      <View style={styles.Container}>
          <TouchableOpacity style={styles.Button}>
          <Text>I am HomeScreen</Text>
          </TouchableOpacity>
      </View>
    );
  };

  const styles = StyleSheet.create({
      Container:{
          margin:10,
          alignItems:'center'
      },
      Button:{
          justifyContent:'center',
      }

  })





export default HomeScreen