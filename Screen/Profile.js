import React, { Component } from 'react'
import { useState } from 'react';
import {
    StyleSheet, Text, View, Image,
    TouchableWithoutFeedback, StatusBar,
    TextInput, SafeAreaView, Keyboard, TouchableOpacity,
    KeyboardAvoidingView
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useRoute } from '@react-navigation/native';
import { useEffect } from 'react';
import Email from './Email';
import AsyncStorage from '@react-native-async-storage/async-storage';





export default function Profile({navigation}) {
    
    const [userEmail, setUserEmail] = useState('');

    useEffect(() => {
      const fetchData = async () => {
        try {
          const value = await AsyncStorage.getItem('user_email');
          if (value !== null) {
            setUserEmail(value); // Set the userEmail state with the retrieved value
          } else {
            console.log('Không tìm thấy giá trị trong AsyncStorage.');
          }
        } catch (error) {
          console.error('Lỗi khi lấy dữ liệu từ AsyncStorage:', error);
        }
      };
  
      fetchData();
    }, []);
      

        return (

            <SafeAreaView style={styles.container}>
                <View style={styles.containerTop}>
                    <View style={styles.containerBTop}>
                            <TouchableOpacity >
                                <Icon name="arrow-left" size={20} color="white"  onPress={()=>{navigation.goBack()}}/>
                            </TouchableOpacity>
                        </View>
                    <View style={styles.containerMid}>
                        <Text  style={styles.title}>Profile</Text>
                        <TouchableOpacity style={styles.buttonContainer}>
                                    <Text style={styles.user}>User Email: {userEmail} </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonContainer} onPress={()=>{navigation.navigate('Email')}}>
                                    <Text style={styles.user}>Email</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonContainer} onPress={()=>{navigation.navigate('Pass')}}>
                                    <Text style={styles.user}>PassWord</Text>
                        </TouchableOpacity>
                  

                    </View>
                </View>
            </SafeAreaView>
        )
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black', 
    },
    containerTop: {
        flex: 1,
        marginTop:30,
    },
    containerMid:{
        flex:1,
        padding:10,
        justifyContent:'flex-start',
        flexDirection:'colum',
        
    },
    containerBTop:{
        left:20,
        alignSelf:'flex-start',
        flexDirection:'row',
        justifyContent:'space-between',

    },
    title:{
        color:'white',
        fontSize:30,
    },
    user:{
        fontSize:14,
        color:'white',
    },
    buttonContainer: {
        backgroundColor: 'black',
        borderColor:'white',
        borderBottomWidth:1,
        height:50,
        marginBottom:30
        
      },
    
})