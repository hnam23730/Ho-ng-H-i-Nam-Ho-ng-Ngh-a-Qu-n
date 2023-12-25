import { StyleSheet, View, Text ,TextInput,Image,Alert,KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { useState,useEffect } from 'react';
import Swiper from 'react-native-swiper';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Home({ navigation }) {
    const [categories, setCategories] = useState([
      {
        image: require('../assets/home1.jpg'),
      },
      {
        image: require('../assets/home2.jpg'),
      },
      {
        image: require('../assets/home3.jpg'),
      },
      {
        image: require('../assets/home4.jpg'),
      },
      {
        image: require('../assets/home5.jpg'),
      },
    ]);
  return (
    <KeyboardAvoidingView style={styles.Container} behavior="padding">
    <View style={styles.Container}>
        <Image
          source={require('../assets/Zara_Logo.svg.png')}
            style={styles.image} 
        />
    <Swiper style={styles.swiper} showsPagination={false}>
      {categories.map((category, index) => (
        <View style={styles.newcategory} key={index}>
          <Image style={styles.newcategoryImage} source={category.image} />
        </View>
      ))}
    </Swiper>
  </View>
  </KeyboardAvoidingView>
  )
}
const styles = StyleSheet.create({
  
  Container:{

    flex:1,
    alignItems:'center',
    backgroundColor:'gray',
    paddingTop:10,

  },
  searchBarContainer: {
    width: 300,
    height: 30,
    paddingRight:10,
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    borderWidth:1,
    borderColor: "black",
    position:'absolute',
    alignSelf:'center',
    bottom:40,
    
  },
  searchBar:{
    flex:1,
    textAlign:'right',
  },
  newcategory: {
    width: 400,
    height: 900,
    backgroundColor: 'white',
    alignItems:'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  newcategoryImage: {
    width: 400,
    height: 900, 
  },
  image:{
    height:100,
    width:240,
    marginTop:100,
    backgroundColor:'rgba(255, 255, 255, 0)',
    position:'absolute',
    zIndex: 2,
    
  }
});