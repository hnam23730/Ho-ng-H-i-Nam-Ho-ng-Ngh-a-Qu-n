import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { FontAwesome,Ionicons,Feather } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import Sysmodal from '../Sysmodal';


const Signup = ({navigation}) => {
   
    const [Email, setEmail] = useState('');
    const handleEmailChange = (Email) => {
        setEmail(Email);
      }
    const [PassWord, setPassWord] = useState('');
    const handlePassWordChange = (PassWord) => {
        setPassWord(PassWord);
      }
    const [Ho, setHo] = useState('');
    const handleHoChange = (Ho) => {
        setHo(Ho);
      }
    const [Ten, setTen] = useState('');
    const handleTenChange = (Ten) => {
        setTen(Ten);
      }

    const [isChecked, setChecked] = useState(false);
    const onHideModal = ()=>{
      setShowModal(false);
    }
    const[showModal,setShowModal] = useState(false);
    const onClickLogin =()=>{
      if(Email.length==0 || PassWord.length==0 || Ho.length==0 || Ten.length==0)
      {
          setShowModal(true);
          return; 
      }
      if(Email.length!=0 || PassWord.length!=0 || Ho.length!=0 || Ten.length!=0){
        navigation.goBack();
      }
      console.log('click login',{
          Email,
          PassWord,
          Ho,
          Ten,
      })
    }
    
    
    
  
  return (
    <SafeAreaView style={styles.container}>
      <Sysmodal visible={showModal} onHide={onHideModal}/> 
      <View style={styles.containerTop}>
        <View style={styles.containerButtonTop}>
          <TouchableOpacity style={styles.buttonTop } onPress={()=>{navigation.goBack()}}>
            <FontAwesome name="arrow-left" size={20} color="white"  />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.title}>THÔNG TIN CÁ NHÂN</Text>

        <TextInput
          style={styles.input}
          placeholder="EMAIL"
          placeholderTextColor="white"
          onChangeText={handleEmailChange}
          value={Email}
        />
        <TextInput
          style={styles.input}
          placeholder="MẬT KHẨU"
          placeholderTextColor="white"
          onChangeText={handlePassWordChange}
          value={PassWord}
        />
        <TextInput
          style={styles.input}
          placeholder="HỌ"
          placeholderTextColor="white"
          onChangeText={handleHoChange}
          value={Ho}
        />
        <TextInput
          style={styles.input}
          placeholder="TÊN"
          placeholderTextColor="white"
          onChangeText={handleTenChange}
          value={Ten}
        />

        
    <View style={styles.checkboxContainer}>
        <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked}  />
                <Text style={styles.h1}>Tôi muốn nhận thông báo về các mẫu mới nhất của Zara qua địa chỉ hòm thư điện tử của tôi</Text>
    </View>
        <TouchableOpacity style={styles.dnbuttonContainer}>
          <Text style={styles.buttonText}  onPress={onClickLogin} >Tiếp Tục</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

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
  containerButtonTop: {
    width: 70,
    display: 'flex',
    left: 20,
    alignSelf: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  h1: {
    color: 'white',
    fontSize: 9,
    textAlign: 'left',
    marginBottom: 5,
    marginRight:15,
    opacity: 0.9,
  },
  title: {
    color: 'white',
    fontSize: 13,
    textAlign: 'left',
    marginBottom: 20,
    opacity: 0.9,
  },
  infoContainer: {
    flex: 15,
    backgroundColor: 'black',
    padding: 20,
  },
  input: {
    height: 40,
    backgroundColor: 'black',
    color: '#FFF',
    marginBottom: 20,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderBottomColor: 'white',
  },
  dnbuttonContainer: {
    backgroundColor: 'black',
    marginBottom: 20,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'white',
    height: 35,
  },
  buttonText: {
    top: 7,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'light-bold',
    fontSize: 12,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginRight:10,
  },
  checkbox: {
    
    alignSelf:'flex-start',
    
  },
  checkboxText: {
    
    fontSize: 12,
    marginLeft: 10,
  },

  checkbox: {
    margin: 8,
  },
});

export default Signup;