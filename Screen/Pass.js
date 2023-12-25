import React, { Component } from 'react'
import { useState } from 'react';
import {
    StyleSheet, Text, View, Image,
    TouchableWithoutFeedback, StatusBar,
    TextInput, SafeAreaView, Keyboard, TouchableOpacity,
    KeyboardAvoidingView
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';




export default function Pass({navigation}) {
    const [Email, setEmail] = useState('');
    const handleEmailChange = (Email) => {
        setEmail(Email);
    }
    const [PassWord, setPassWord] = useState('');
    const handlePassWordChange = (PassWord) => {
          setPassWord(PassWord);
    }
        return (

            <SafeAreaView style={styles.container}>
                
                    <View style={styles.containerTop}>
                        <View style={styles.containerButtonTop}>
                            <TouchableOpacity style={styles.buttonTop1}>
                                <Icon name="arrow-left" size={20} color="white"  onPress={()=>{navigation.goBack()}}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                        
                            
                    <View style={styles.infoContainer}>
                              <Text style={styles.title}>Thay đổi PASS</Text>
                                <Text style={styles.h1}>Địa chỉ hòm thư điện tử của bạn là</Text>

                                <TextInput
                                    style={styles.input}
                                    placeholder="EMAIL"
                                    placeholderTextColor="white"
                                    onChangeText={handleEmailChange}
                                    value={Email}
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder="PASS"
                                    placeholderTextColor="white"
                                    onChangeText={handlePassWordChange}
                                    value={PassWord}
                                />

                                 <TouchableOpacity style={styles.dnbuttonContainer}>
                                    <Text style={styles.buttonText}>Thay đổi Email</Text>
                                </TouchableOpacity>

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
        backgroundColor: 'black',
       
    },
    containerButtonTop:{
        width:70,
        display:'flex',
        left:20,
        alignSelf:'flex-start',
        flexDirection:'row',
        justifyContent:'space-between',

    },
    
    h1:{
      color: 'white',
      fontSize: 10,
      textAlign: 'left',
      marginBottom: 50,
      opacity: 0.9
    },
    
    title: {
        color: 'white',
        fontSize: 13,
        textAlign: 'left',
        marginBottom: 20,
        opacity: 0.9
    },
    infoContainer: {
        flex:15,
        backgroundColor:'black',


        padding: 20,
    },
    input: {
        height: 40,
        backgroundColor: 'black',
        color: '#FFF',
        marginBottom: 20,
        paddingHorizontal: 10,
        borderWidth:1,
        borderBottomColor:'white',
        
    },
    dnbuttonContainer: {
      backgroundColor: 'black',
      marginBottom: 20,
      paddingHorizontal: 10,
      borderWidth:1,
      borderColor:'white',
      height:35
    },
   
    buttonText: {
        top:7,
        textAlign: 'center',
        color :'white',
        fontWeight: 'light-bold',
        fontSize: 12
    },

})

