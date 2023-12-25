import React, { useState, useEffect } from 'react';
import {
    StyleSheet, Text, View, TextInput, SafeAreaView, TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage'; 



export default function Email({navigation}) {
    const [email, setEmail] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [userEmail, setUserEmail] = useState('');
  
    useEffect(() => {
      const fetchUserEmail = async () => {
        try {
          const storedEmail = await AsyncStorage.getItem('user_email');
          if (storedEmail !== null) {
            setEmail(storedEmail);
          }
        } catch (error) {
          console.error('Error fetching user email:', error);
        }
      };
  
      fetchUserEmail();
    }, []);
    useEffect(() => {
    const fetchUserEmail = async () => {
        try {
          const email = await AsyncStorage.getItem('user_email');
          if (email !== null) {
            setUserEmail(email);
          }
        } catch (error) {
          console.error('Error fetching user email:', error);
        }
      };
  
      fetchUserEmail();
    }, []); 
    
    const handleEmailChange = (text) => {
      setNewEmail(text);
    };
  
    const onClickChange = async () => {
      try {
        if (newEmail.length === 0) {
          // Show error message or take necessary action
          return;
        }
        await AsyncStorage.setItem('user_email', newEmail);
        console.log('Email has been updated in AsyncStorage:', newEmail);
        navigation.goBack();
      } catch (error) {
        console.error('Error updating email in AsyncStorage:', error);
      }
    };
  
      return(
            <SafeAreaView style={styles.container}>
                    <View style={styles.containerTop}>
                        <View style={styles.containerButtonTop}>
                            <TouchableOpacity style={styles.buttonTop1}>
                                <Icon name="arrow-left" size={20} color="white"  onPress={()=>{navigation.goBack()}}/>
                            </TouchableOpacity>
                        </View>
                    </View> 
                    <View style={styles.infoContainer}>
                              <Text style={styles.title}>Thay đổi EMAIL</Text>
                                <Text style={styles.h1}>Địa chỉ hòm thư điện tử của bạn là : {userEmail}</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="EMAIL"
                                    placeholderTextColor="white"
                                    onChangeText={handleEmailChange}
                                    value={newEmail}
                                />
                                 <TouchableOpacity style={styles.dnbuttonContainer}>
                                    <Text style={styles.buttonText} onPress={onClickChange}>Thay đổi Email</Text>
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
        backgroundColor: 'black',
        marginTop:30,
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
      fontSize: 14,
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

