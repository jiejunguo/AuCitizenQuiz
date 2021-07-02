import React,{useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';



const QuizScreen = ({ navigation }) => {
    const [question, setQuestion]= useState('')
    return (
      <View style={styles.Container}>
          <TouchableOpacity style={styles.Button}>
          <Text>I am QuizScreen</Text>
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





export default QuizScreen