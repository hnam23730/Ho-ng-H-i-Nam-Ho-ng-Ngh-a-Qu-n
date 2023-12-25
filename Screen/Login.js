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
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Sysmodal from '../Sysmodal';







const Login = ({navigation}) => {
  const [Email, setEmail] = useState('');
  const [PassWord, setPassWord] = useState('');

  const handleEmailChange = (Email) => {
    setEmail(Email);
  }
  const handlePassWordChange = (PassWord) => {
    setPassWord(PassWord);}
  const[showModal,setShowModal] = useState(false);

  const onHideModal = ()=>{
    setShowModal(false);
  }

  const onClickLogin = async () => {
    try {
      if (Email.length === 0 || PassWord.length === 0) {
        setShowModal(true);
        return;
      }
  
      // Lưu email vào AsyncStorage
      await AsyncStorage.setItem('user_email', Email);
      console.log('Email đã được lưu vào AsyncStorage.');
  
      if (Email.length !== 0 || PassWord.length !== 0) {
        navigation.navigate('BottomBar');
      }
  
      console.log('click login', {
        Email,
        PassWord,
      });
    } catch (error) {
      console.error('Lỗi khi lưu email vào AsyncStorage:', error);
    }
  };



  return (
    <SafeAreaView style={styles.container}>
        <Sysmodal visible={showModal} onHide={onHideModal}/> 
      <View style={styles.containerTop}>
        <View style={styles.containerButtonTop}>
                
        </View>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.title}>Truy cập vào tài khoản của bạn</Text>

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

        <TouchableOpacity style={styles.dnbuttonContainer} onPress={onClickLogin}>
          <Text style={styles.buttonText} >Đăng nhập</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.qbuttonContainer}>
          <Text style={styles.textB} onPress={()=>{navigation.navigate('LPass')}}>Quý khách đã quên mật khẩu? </Text>
        </TouchableOpacity>
        <Text style={styles.h2}>BẠN CẦN MỘT TÀI KHOẢN? </Text>

        <TouchableOpacity style={styles.dkbuttonContainer}>
          <Text style={styles.buttonText} onPress={()=>{navigation.navigate('Signup')}}>Đăng Kí</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.containerBottom}>
        <TouchableOpacity style={styles.buttonBottom}>
          <View>
            <Text style={styles.textB}>Trung tâm hỗ trợ</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  containerTop: {
    flex: 1,
    backgroundColor: 'black',
  },
  containerButtonTop: {
    width: 70,
    display: 'flex',
    alignSelf: 'flex-end',
    alignItems:'flex-end',
    right:25,
    

  },

  containerBottom: {
    flex: 3,
    backgroundColor: 'black',
  },
  textB: {
    color: 'white',
    fontSize: 14,
    textAlign: 'left',
  },
  buttonBottom: {
    marginLeft: 15,
    borderBottomColor: 'white',
    borderWidth: 1,
    width: 140,
  },

  h2: {
    color: 'white',
    fontSize: 14,
    textAlign: 'left',
    marginBottom: 10,
    opacity: 0.9,
  },

  title: {
    color: 'white',
    fontSize: 18,
    textAlign: 'left',
    marginBottom: 50,
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
  },
  qbuttonContainer: {
    right:10,
    width: 290,
    backgroundColor: 'black',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  dkbuttonContainer: {
    backgroundColor: 'black',
    paddingHorizontal: 10,
    marginTop: 20,
    borderWidth: 1,
    borderColor: 'white',
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
  }
})
export default Login;